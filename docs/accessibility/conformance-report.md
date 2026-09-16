# WCAG 2.1 Level AA self-assessment report

## Current status

**In progress — not yet a conformance claim.** Local automated testing and remediation are complete. Production deployment/retest, the manual test matrix, VoiceOver sessions, and client authorization remain open; the independent review is optional.

## Assessment statement

Tanglao, Corp is evaluating the Southern California Chapter website against WCAG 2.1 Level A and AA using full-route automated tests and manual functional checks. This report is a self-assessment and does not represent certification, a guarantee of legal compliance, or an independent audit.

## Results

| Gate | Status |
| --- | --- |
| Site build and content validation | Passed September 15, 2026 |
| Automated WCAG 2.1 A/AA route scans | Local pass September 15, 2026: 28 desktop/mobile route scans plus important-state scans found no axe-core violations |
| Keyboard and responsive interaction tests | Local pass for all-route keyboard/focus, skip navigation, mobile-menu behavior, council filtering/disclosures/status/directory, reflow, text spacing, reduced motion, semantic structure, and recovery |
| Production automated smoke test | Pending: 89 of 91 checks passed September 15, 2026; the Join Us current-page state and mobile trigger stacking remediation require deployment and retest |
| Manual visual, zoom, reflow, and text-spacing review | Pending |
| VoiceOver with Safari and Chrome | Pending |
| Client authorization of project/reference description | Pending |
| Independent NVDA/Chrome sample review | Optional; not commissioned |

The expanded local suite completed 92 of 92 Playwright tests on September 15, 2026, including a project-specific check that promotional program cards do not create misleading article landmarks. The prior production run completed 89 checks before the known mobile-trigger overlap caused the interaction test to time out; the current-page test also failed on the undeployed Join Us remediation. Production must be rerun after deploying all remediations. Automated results cover only issues that axe-core and scripted interactions can detect; they do not replace the pending manual and assistive-technology checks.

## Remaining limitations

- Leaflet, OpenStreetMap tiles, Google Maps destinations, Google Fonts, and Google Analytics are third-party services. The local integration is assessed; the external products are outside scope.
- The visual map is supplementary. Its duplicate canvas/marker stops are excluded from the keyboard sequence; the adjacent semantic directory supplies every council and navigation link.
- Actual browser UI zoom, visual judgment, VoiceOver output, and announcements remain pending and must not be inferred from automation.
- Client/reference authorization remains a separate pending gate. No independent review has been commissioned or claimed.

The final report must list the test date, tester, browser and assistive-technology versions, passed and failed checks, disclosed limitations, and any unresolved issues. The statement below may be used only after every required non-optional gate passes:

> Tanglao, Corp self-assessed the SoCal Knights website against WCAG 2.1 Level AA, remediated identified issues, and retested the site.

Do not add “independently reviewed” unless a named reviewer completes and documents that work.
