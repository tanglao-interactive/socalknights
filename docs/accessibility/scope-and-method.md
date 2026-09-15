# Scope and method

## Evaluation target

- Standard: WCAG 2.1 Level A and AA
- Product: `https://socalknights.org/`
- Assessment type: Tanglao, Corp self-assessment
- Automated test date: September 15, 2026
- Test host: macOS 26.6.2 (build 25G83), Playwright 1.63.0, bundled Chromium 153.0.8010.12
- Manual assistive-technology environment: pending; installed Safari is 26.6.2 and installed Google Chrome is 153.0.8010.37

## Included

All first-party routes are included: home, about, leadership, councils, programs, events, the published event detail, announcements, gallery, resources, join, contact, privacy, and the 404 page. Shared headers, navigation, footers, responsive states, skip navigation, the council filter, the Leaflet map, images, and first-party downloadable resources are included.

The current site has no user accounts, submission forms, video, audio, modals, or first-party PDF downloads. Those components must be added to this scope if introduced.

## Excluded and limited

External websites are excluded after the visitor follows an external link. Google Analytics, Google Fonts, OpenStreetMap tiles, Google Maps destinations, and Leaflet are third-party services. Their integration and the controls presented on this site are evaluated; the external services themselves are not.

The visual map is supplementary. The adjacent semantic directory and ordinary Google Maps links provide the council information and navigation path without requiring the map.

## Method

1. Build and validate the generated site.
2. Run axe-core through Playwright on every route at 1440×900 and 390×844, including the mobile menu and filtered council-directory states. Run every route at 320 CSS pixels, with WCAG text-spacing overrides, and at a 720 CSS-pixel viewport as a 200%-zoom layout equivalent.
3. Exercise every first-party interactive element by keyboard, verify visible focus, and test reduced-motion, page structure, titles, alternatives, current-page state, council filtering/disclosures/status/directory, and 404 recovery.
4. Complete the manual matrix using keyboard-only input, actual browser zoom, visual inspection, VoiceOver with Safari, and VoiceOver with Chrome.
5. Record each failure in the issue log, remediate it, and preserve concise before/after evidence.
6. Repeat automated and manual regression tests before updating the conformance report.

## Pages and states exercised automatically

The 14 declared routes were exercised at desktop, mobile, 320 CSS pixels, text-spacing override, and 200%-zoom-equivalent widths. Scripted states include skip navigation; mobile-menu open, close, Escape, focus restoration, and desktop breakpoint reset; council District 94 filtering, live status, disclosure operation, map description, and directory link; reduced motion; current-page navigation; and 404 recovery. Axe-core runs on every route at desktop and mobile and again on the important open-menu and filtered-directory states.

Automated tools cannot determine conformance by themselves. Any unchecked manual item prevents an unqualified completion claim.
