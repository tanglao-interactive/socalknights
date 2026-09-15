# Scope and method

## Evaluation target

- Standard: WCAG 2.1 Level A and AA
- Product: `https://socalknights.org/`
- Assessment type: Tanglao, Corp self-assessment
- Assessment date: September 2026

## Included

All first-party routes are included: home, about, leadership, councils, programs, events, the published event detail, announcements, gallery, resources, join, contact, privacy, and the 404 page. Shared headers, navigation, footers, responsive states, skip navigation, the council filter, the Leaflet map, images, and first-party downloadable resources are included.

The current site has no user accounts, submission forms, video, audio, modals, or first-party PDF downloads. Those components must be added to this scope if introduced.

## Excluded and limited

External websites are excluded after the visitor follows an external link. Google Analytics, Google Fonts, OpenStreetMap tiles, Google Maps destinations, and Leaflet are third-party services. Their integration and the controls presented on this site are evaluated; the external services themselves are not.

The visual map is supplementary. The adjacent semantic directory and ordinary Google Maps links provide the council information and navigation path without requiring the map.

## Method

1. Build and validate the generated site.
2. Run axe-core through Playwright on every route at 1440×900 and 390×844, including the mobile menu and filtered council-directory states.
3. Complete the manual matrix using keyboard-only input, browser zoom/reflow, text-spacing overrides, reduced-motion settings, VoiceOver with Safari, and VoiceOver with Chrome.
4. Record each failure in the issue log, remediate it, and preserve concise before/after evidence.
5. Repeat automated and manual regression tests before updating the conformance report.

Automated tools cannot determine conformance by themselves. Any unchecked manual item prevents an unqualified completion claim.
