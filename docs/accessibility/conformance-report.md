# WCAG 2.1 Level AA self-assessment report

## Current status

**In progress — not yet a conformance claim.** Local and production automated testing and remediation are complete. Visual sampling is complete for representative reflow, text-spacing, event-layout, and focus states. Exact browser-zoom observations, completion details for the reported VoiceOver sessions, and client authorization remain open; the independent review is optional.

## Assessment statement

Tanglao, Corp is evaluating the Southern California Chapter website against WCAG 2.1 Level A and AA using full-route automated tests and manual functional checks. This report is a self-assessment and does not represent certification, a guarantee of legal compliance, or an independent audit.

## Results

| Gate | Status |
| --- | --- |
| Site build and content validation | Passed September 15, 2026 |
| Automated WCAG 2.1 A/AA route scans | Local pass September 15, 2026: 28 desktop/mobile route scans plus important-state scans found no axe-core violations |
| Keyboard and responsive interaction tests | Local pass for all-route keyboard/focus, skip navigation, mobile-menu behavior, council filtering/disclosures/status/directory, reflow, text spacing, reduced motion, semantic structure, and recovery |
| Production automated smoke test | Previous 92-test suite passed September 17, 2026. A direct check of `https://socalknights.org/accessibility-test-404` returned HTTP 404 and the existing custom page, but the enhanced title, named main, H1, recovery label, and state checks require deployment and production retest |
| Manual visual, zoom, reflow, and text-spacing review | Partial pass September 17, 2026: representative 320px reflow, 720px layout, text-spacing, and visible-focus screenshots showed no clipping, overlap, lost content, or unclear sampled focus; actual browser UI zoom and remaining state sampling are pending |
| VoiceOver with Safari and Chrome | Provisional pass reported by Franz September 17, 2026; browsers/versions and the five representative-flow observations must be recorded before closing |
| Client authorization of project/reference description | Pending |
| Independent NVDA/Chrome sample review | Optional; not commissioned |

The expanded suite includes a project-specific check that promotional program cards do not create misleading article landmarks and now exercises a real unknown URL rather than only `/404.html`. The enhanced local suite passed 93 of 93 Playwright tests on September 17, 2026. A post-deployment production rerun remains required for the enhanced 404 assertions. Automated results cover only issues that axe-core and scripted interactions can detect; they do not replace the remaining human-observed checks.

## Remaining limitations

- Leaflet, OpenStreetMap tiles, Google Maps destinations, Google Fonts, and Google Analytics are third-party services. The local integration is assessed; the external products are outside scope.
- The visual map is supplementary. Its duplicate canvas/marker stops are excluded from the keyboard sequence; the adjacent semantic directory supplies every council and navigation link.
- Actual browser UI zoom remains pending. Franz reported that VoiceOver worked without an observed problem, but the browsers, versions, and five representative flows still need to be recorded rather than inferred from automation.
- Client/reference authorization remains a separate pending gate. No independent review has been commissioned or claimed.

The final report must list the test date, tester, browser and assistive-technology versions, passed and failed checks, disclosed limitations, and any unresolved issues. The statement below may be used only after every required non-optional gate passes:

> Tanglao, Corp self-assessed the SoCal Knights website against WCAG 2.1 Level AA, remediated identified issues, and retested the site.

Do not add “independently reviewed” unless a named reviewer completes and documents that work.
