import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/about/",
  "/leadership/",
  "/councils/",
  "/programs/",
  "/events/",
  "/events/district-deputy-mid-term-meeting-2027/",
  "/announcements/",
  "/gallery/",
  "/resources/",
  "/join/",
  "/contact/",
  "/privacy/",
  "/404.html",
];

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

async function expectNoWcag21Violations(page, label) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const summary = results.violations.map((violation) => ({
    id: violation.id,
    impact: violation.impact,
    help: violation.help,
    nodes: violation.nodes.map((node) => node.target.join(" ")),
  }));

  expect(summary, `${label} has WCAG 2.1 A/AA violations`).toEqual([]);
}

for (const [viewportName, viewport] of Object.entries(viewports)) {
  test.describe(`${viewportName} pages`, () => {
    test.use({ viewport });

    for (const route of routes) {
      test(`${route} passes automated WCAG 2.1 A/AA checks`, async ({ page }) => {
        await page.goto(route, { waitUntil: "networkidle" });
        await expect(page.locator("main")).toBeVisible();
        await expectNoWcag21Violations(page, `${viewportName} ${route}`);
      });
    }
  });
}

test("mobile navigation exposes state and returns focus when dismissed", async ({ page }) => {
  await page.setViewportSize(viewports.mobile);
  await page.goto("/");

  const toggle = page.locator(".nav-toggle");
  await expect(toggle).toHaveAccessibleName("Open menu");
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Close menu");
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toHaveAccessibleName("Open menu");
  await expect(toggle).toBeFocused();
  await expectNoWcag21Violations(page, "open and dismissed mobile navigation");
});

test("skip link moves focus to the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("district filter updates the directory and announces the result", async ({ page }) => {
  await page.goto("/councils/", { waitUntil: "networkidle" });
  await page.getByLabel("Choose a district").selectOption("94");
  await expect(page.locator("#map-status")).toContainText("District 94");
  await expect(page.locator('[data-district-group]:not([hidden])')).toHaveCount(1);
  await expectNoWcag21Violations(page, "filtered council directory");
});
