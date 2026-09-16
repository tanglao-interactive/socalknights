import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/about/", "/leadership/", "/councils/", "/programs/", "/events/", "/events/district-deputy-mid-term-meeting-2027/", "/announcements/", "/gallery/", "/resources/", "/join/", "/contact/", "/privacy/", "/404.html"];
const viewports = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 }, reflow: { width: 320, height: 800 } };
// Council disclosure controls have a dedicated keyboard-operability test below.
// Leaflet's injected controls belong to the documented third-party integration.
const firstPartyInteractive = "a[href],button:not([disabled]),select:not([disabled])";

async function gotoRoute(page, route) {
  await page.goto(route, { waitUntil: "domcontentloaded" });
  await expect(page.locator("main")).toBeVisible();
}

async function expectNoWcag21Violations(page, label) {
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  const summary = results.violations.map((violation) => ({ id: violation.id, impact: violation.impact, help: violation.help, nodes: violation.nodes.map((node) => node.target.join(" ")) }));
  expect(summary, `${label} has WCAG 2.1 A/AA violations`).toEqual([]);
}

async function expectNoPageOverflow(page, label) {
  const dimensions = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
  expect(dimensions.document, `${label} document overflows horizontally`).toBeLessThanOrEqual(dimensions.viewport + 1);
  expect(dimensions.body, `${label} body overflows horizontally`).toBeLessThanOrEqual(dimensions.viewport + 1);
}

for (const [viewportName, viewport] of Object.entries({ desktop: viewports.desktop, mobile: viewports.mobile })) {
  test.describe(`${viewportName} axe scans`, () => {
    test.use({ viewport });
    for (const route of routes) {
      test(`${route} passes WCAG 2.1 A/AA axe checks`, async ({ page }) => {
        await gotoRoute(page, route);
        await expectNoWcag21Violations(page, `${viewportName} ${route}`);
      });
    }
  });
}

test.describe("320 CSS pixel reflow", () => {
  test.use({ viewport: viewports.reflow });
  for (const route of routes) {
    test(`${route} has no page-level horizontal scrolling or lost regions`, async ({ page }) => {
      await gotoRoute(page, route);
      await expectNoPageOverflow(page, `320px ${route}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
      await expect(page.locator("h1")).toBeVisible();
    });
  }
});

test.describe("200 percent zoom equivalent", () => {
  // A 720 CSS-pixel viewport exercises the layout available when a 1440-pixel
  // browser viewport is zoomed to 200%. Browser UI zoom itself is manual-only.
  test.use({ viewport: { width: 720, height: 450 } });
  for (const route of routes) {
    test(`${route} retains content and avoids page-level horizontal scrolling`, async ({ page }) => {
      await gotoRoute(page, route);
      await expectNoPageOverflow(page, `200% zoom equivalent ${route}`);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    });
  }
});

test.describe("WCAG text spacing", () => {
  test.use({ viewport: viewports.mobile });
  for (const route of routes) {
    test(`${route} tolerates text-spacing overrides`, async ({ page }) => {
      await gotoRoute(page, route);
      await page.addStyleTag({ content: "*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}" });
      await expectNoPageOverflow(page, `text spacing ${route}`);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
      const clippedText = await page.locator("h1,h2,h3,p,a,button,label,summary,dt,dd").evaluateAll((elements) => elements.filter((element) => {
        const style = getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden" || element.closest("[hidden]")) return false;
        if (["visible", "clip"].includes(style.overflowY)) return false;
        return element.scrollHeight > element.clientHeight + 2;
      }).filter((element) => element.textContent.trim()).map((element) => element.textContent.trim().slice(0, 80)));
      expect(clippedText, `text clipping found on ${route}`).toEqual([]);
    });
  }
});

test("reduced-motion preference suppresses smooth scrolling and transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await gotoRoute(page, "/events/");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  const motion = await page.locator(".event-feature-image img").evaluate((element) => {
    const style = getComputedStyle(element);
    return { duration: style.transitionDuration, animation: style.animationDuration };
  });
  expect(parseFloat(motion.duration)).toBeLessThanOrEqual(.001);
  expect(parseFloat(motion.animation)).toBeLessThanOrEqual(.001);
});

test.describe("keyboard and visible focus", () => {
  test.use({ viewport: viewports.desktop });
  for (const route of routes) {
    test(`${route} exposes every first-party interactive element in the tab order`, async ({ page }) => {
      await gotoRoute(page, route);
      const expected = await page.locator(firstPartyInteractive).evaluateAll((elements) => elements.filter((element) => {
        const style = getComputedStyle(element);
        const closedDetails = element.closest("details:not([open])");
        const hiddenByDisclosure = closedDetails && element !== closedDetails.querySelector(":scope > summary");
        return style.display !== "none" && style.visibility !== "hidden" && !element.closest("[hidden]") && !element.closest("#council-map") && !hiddenByDisclosure && element.getClientRects().length > 0 && element.tabIndex >= 0;
      }).map((element, index) => { element.dataset.a11yTabId = String(index); return String(index); }));
      const reached = new Set();
      const interveningControls = await page.locator("summary, #council-map a[href], #council-map [tabindex=\"0\"]").count();
      for (let index = 0; index < expected.length + interveningControls + 5; index += 1) {
        await page.keyboard.press("Tab");
        const focused = await page.evaluate(() => {
          const element = document.activeElement;
          if (!(element instanceof HTMLElement)) return null;
          const style = getComputedStyle(element);
          return { id: element.dataset.a11yTabId || null, visibleIndicator: style.outlineStyle !== "none" && parseFloat(style.outlineWidth) >= 2 };
        });
        if (focused?.id !== null) {
          reached.add(focused.id);
          expect(focused.visibleIndicator, `${route} focus indicator is not visible`).toBe(true);
        }
        if (reached.size === expected.length) break;
      }
      expect([...reached].sort(), `${route} has unreachable controls`).toEqual(expected.sort());
    });
  }
});

test("mobile navigation supports open, close, Escape, restoration, and breakpoint reset", async ({ page }) => {
  await page.setViewportSize(viewports.mobile);
  await gotoRoute(page, "/");
  const toggle = page.locator(".nav-toggle");
  const nav = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(toggle).toHaveAccessibleName("Open menu");
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Close menu");
  await expect(nav).toBeVisible();
  await expectNoWcag21Violations(page, "open mobile navigation");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toHaveAccessibleName("Open menu");
  await expect(toggle).toBeFocused();
  await expect(nav).toBeHidden();
  await toggle.click();
  await toggle.click();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.setViewportSize({ width: 961, height: 844 });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(nav).toBeVisible();
  await expect(toggle).toBeHidden();
});

test("skip link is first and moves focus to main", async ({ page }) => {
  await gotoRoute(page, "/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("council filtering, disclosure, live status, map alternative, and directory work by keyboard", async ({ page }) => {
  await gotoRoute(page, "/councils/");
  const filter = page.getByLabel("Choose a district");
  await filter.focus();
  await filter.selectOption("94");
  await expect(page.locator("#map-status")).toContainText("District 94");
  await expect(page.locator("#map-status")).toHaveAttribute("role", "status");
  await expect(page.locator('[data-district-group]:not([hidden])')).toHaveCount(1);
  const district = page.locator('[data-district-group][data-district="94"]');
  await expect(district).toHaveAttribute("open", "");
  const summary = district.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(district).not.toHaveAttribute("open", "");
  await page.keyboard.press("Enter");
  await expect(district).toHaveAttribute("open", "");
  await expect(district.getByRole("link", { name: /Navigate with Google Maps/ }).first()).toBeVisible();
  await expect(page.locator("#map-help")).toContainText("keyboard-accessible district directory");
  await expect(page.locator("#council-map")).toHaveAttribute("aria-describedby", /map-help/);
  await expectNoWcag21Violations(page, "filtered and expanded council directory");
});

test("every route has expected structure, alternatives, and a unique title", async ({ page }) => {
  const titles = [];
  for (const route of routes) {
    await gotoRoute(page, route);
    titles.push(await page.title());
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("body > header")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("footer")).toHaveCount(1);
    await expect(page.getByRole("navigation", { name: "Primary navigation" })).toHaveCount(1);
    const missingAlt = await page.locator("img").evaluateAll((images) => images.filter((image) => !image.hasAttribute("alt")).map((image) => image.src));
    expect(missingAlt, `${route} has images without alt attributes`).toEqual([]);
  }
  expect(new Set(titles).size, "page titles must be unique").toBe(routes.length);
});

test("promotional program cards do not create misleading article landmarks", async ({ page }) => {
  await gotoRoute(page, "/");
  const programSection = page.locator("section", { has: page.getByRole("heading", { name: "Our program areas" }) });
  await expect(programSection.locator("article.card")).toHaveCount(0);
  await expect(programSection.locator(".card")).toHaveCount(4);
});

test("navigation identifies the current first-party section", async ({ page }) => {
  for (const route of ["/about/", "/leadership/", "/councils/", "/programs/", "/events/", "/events/district-deputy-mid-term-meeting-2027/", "/announcements/", "/resources/", "/join/"]) {
    await gotoRoute(page, route);
    await expect(page.locator('#primary-nav [aria-current="page"]')).toHaveCount(1);
  }
});

test("404 identifies the error and provides a recovery path", async ({ page }) => {
  await gotoRoute(page, "/404.html");
  await expect(page.locator("h1")).toContainText(/not found/i);
  await expect(page.getByRole("link", { name: /home/i }).first()).toBeVisible();
});
