# Manual WCAG 2.1 AA test matrix

Use `Pass`, `Fail`, `Not applicable`, or `Blocked`. Record the browser, assistive technology, date, tester, and evidence for every completed session.

| Area | Required check | Status | Evidence or notes |
| --- | --- | --- | --- |
| Keyboard | Reach and operate every control without a pointer; no keyboard trap | Pending | Automated all-route tab-order and council-control checks passed September 15, 2026; manual confirmation pending |
| Focus | Logical order, clearly visible focus, focus restored after mobile-menu dismissal | Partial pass | Automated visible-focus and restoration checks passed; September 17 visual sample showed a clearly visible focus outline; complete human keyboard path remains pending |
| Bypass | Skip link is first focusable item and moves focus to `main` | Pass | Automated interaction passed and the initial manual browser review confirmed focus moved to `main` |
| Structure | Page title, one primary heading, ordered headings, landmarks, lists, and labels convey structure | Pending | Automated title, heading, landmark, and label checks passed; manual/AT confirmation pending |
| Navigation | Navigation naming and order are consistent; current page is identified | Partial pass | Current-page and ordering tests passed locally and in the 92-test production run; screen-reader confirmation remains pending |
| Mobile menu | Name/state are announced; Escape closes it; links remain reachable | Pending | Automated interaction covered; screen-reader confirmation pending |
| Images | Informative images have equivalent alternatives; decorative images are ignored | Pending | Automated alternative-attribute checks passed; human equivalence review pending |
| Links | Link purpose is understandable in context; external links do not create a keyboard barrier | Pending | |
| Council directory | Select and disclosure controls work with keyboard and screen reader; updates are announced | Pending | Automated interaction covered; AT confirmation pending |
| Council map | Directory provides an equivalent non-map path; map does not block keyboard use | Pending | |
| Contrast | Text, controls, focus indicators, and meaningful graphics meet AA contrast | Partial pass | All-route axe checks passed and sampled focus was visually clear September 17; remaining interactive/meaningful-graphic states need human review |
| Resize | Content remains usable at 200% browser zoom | Partial pass | All-route 720 CSS-pixel layout-equivalent checks and representative visual sample passed; actual browser UI zoom review pending |
| Reflow | No loss of content or two-dimensional page scrolling at 320 CSS px / 400% equivalent | Pass | All-route page-overflow checks passed; September 17 home and councils visual samples showed no clipping, overlap, or lost content |
| Text spacing | No clipping/loss with WCAG text-spacing overrides | Pass | All-route scripted overrides passed; September 17 home-page visual sample showed no clipping, overlap, or lost content |
| Motion | Reduced-motion preference suppresses nonessential smooth scrolling and transitions | Partial pass | Computed-style production check passed; human observation with the operating-system setting remains pending |
| VoiceOver Safari | Reading order, landmarks, headings, links, controls, states, and announcements are meaningful | Provisional pass | Franz reported September 17 that VoiceOver seemed to work; Safari version and results for the five representative flows must be recorded |
| VoiceOver Chrome | Same representative flows as Safari | Provisional pass | Franz reported September 17 that VoiceOver seemed to work; Chrome version and results for the five representative flows must be recorded |
| Forms/errors | Labels, instructions, errors, and status messages | Not applicable | No submission forms in the assessed version |
| Media | Captions, transcripts, audio control, and flashing content | Not applicable | No audio or video in the assessed version |
| Downloads | First-party PDFs/documents are accessible | Not applicable | No first-party downloads in the assessed version |
| Error page | 404 page identifies the error and provides a usable recovery path | Pending | Unknown-path HTTP status, title, named main/H1, no initial focus movement, homepage recovery, responsive layouts, forced colors, reduced motion, and axe checks passed locally September 17, 2026; manual VoiceOver confirmation and production retest pending |

## Representative screen-reader flows

1. Home: skip to content, navigate headings and landmarks, follow primary navigation.
2. Mobile home: open and close the menu, confirm name/state changes, resume at the trigger.
3. Councils: choose District 94, hear the result, expand the district, reach a navigation link without using the map.
4. Events: understand the flyer alternative text and event details without viewing the image.
5. 404: understand the error and return home.

## Manual VoiceOver check for the enhanced 404

Repeat these steps in Safari and Chrome and record the browser version, date, tester, and observations:

1. With VoiceOver running, open `/accessibility-test-404` directly. Confirm the browser reports “Page Not Found | Southern California Knights” and focus is not unexpectedly moved after load.
2. Use the first Tab stop to activate “Skip to content.” Confirm focus moves to the visibly outlined main landmark and VoiceOver identifies it as “Page not found.”
3. Navigate by heading and confirm there is exactly one level-one “Page not found” heading, followed by the explanation that the requested page could not be found.
4. Navigate to “Return to the homepage,” activate it, and confirm the home page loads. Confirm there is no automatic redirect before activation.
