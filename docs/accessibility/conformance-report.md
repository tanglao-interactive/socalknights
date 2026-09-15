# WCAG 2.1 Level AA self-assessment report

## Current status

**In progress — not yet a conformance claim.** Automated testing and initial remediation are complete. The manual test matrix, VoiceOver sessions, and client authorization remain open; the independent review is optional.

## Assessment statement

Tanglao, Corp is evaluating the Southern California Chapter website against WCAG 2.1 Level A and AA using full-route automated tests and manual functional checks. This report is a self-assessment and does not represent certification, a guarantee of legal compliance, or an independent audit.

## Results

| Gate | Status |
| --- | --- |
| Site build and content validation | Passed September 15, 2026 |
| Automated WCAG 2.1 A/AA route scans | Passed September 15, 2026: 28 desktop/mobile route scans found no axe-core violations |
| Keyboard and responsive interaction tests | Passed automated checks for skip navigation, mobile-menu state/focus, and council filtering |
| Manual visual, zoom, reflow, and text-spacing review | Pending |
| VoiceOver with Safari and Chrome | Pending |
| Client authorization of project/reference description | Pending |
| Independent NVDA/Chrome sample review | Optional; not commissioned |

The reproducible automated run completed 31 of 31 Playwright tests. This result covers only issues that axe-core and the scripted interactions can detect; it does not replace the pending manual and assistive-technology checks.

The final report must list the test date, tester, browser and assistive-technology versions, passed and failed checks, disclosed limitations, and any unresolved issues. The statement below may be used only after every required non-optional gate passes:

> Tanglao, Corp self-assessed the SoCal Knights website against WCAG 2.1 Level AA, remediated identified issues, and retested the site.

Do not add “independently reviewed” unless a named reviewer completes and documents that work.
