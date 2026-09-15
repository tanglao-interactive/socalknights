# Manual WCAG 2.1 AA test matrix

Use `Pass`, `Fail`, `Not applicable`, or `Blocked`. Record the browser, assistive technology, date, tester, and evidence for every completed session.

| Area | Required check | Status | Evidence or notes |
| --- | --- | --- | --- |
| Keyboard | Reach and operate every control without a pointer; no keyboard trap | Pending | |
| Focus | Logical order, clearly visible focus, focus restored after mobile-menu dismissal | Pending | |
| Bypass | Skip link is first focusable item and moves focus to `main` | Pending | Automated interaction covered; manual confirmation pending |
| Structure | Page title, one primary heading, ordered headings, landmarks, lists, and labels convey structure | Pending | |
| Navigation | Navigation naming and order are consistent; current page is identified | Pending | |
| Mobile menu | Name/state are announced; Escape closes it; links remain reachable | Pending | Automated interaction covered; screen-reader confirmation pending |
| Images | Informative images have equivalent alternatives; decorative images are ignored | Pending | |
| Links | Link purpose is understandable in context; external links do not create a keyboard barrier | Pending | |
| Council directory | Select and disclosure controls work with keyboard and screen reader; updates are announced | Pending | Automated interaction covered; AT confirmation pending |
| Council map | Directory provides an equivalent non-map path; map does not block keyboard use | Pending | |
| Contrast | Text, controls, focus indicators, and meaningful graphics meet AA contrast | Pending | axe coverage plus manual state review required |
| Resize | Content remains usable at 200% browser zoom | Pending | |
| Reflow | No loss of content or two-dimensional page scrolling at 320 CSS px / 400% equivalent | Pending | Map may scroll internally; verify page behavior |
| Text spacing | No clipping/loss with WCAG text-spacing overrides | Pending | |
| Motion | Reduced-motion preference suppresses nonessential smooth scrolling and transitions | Pending | CSS implementation added; manual confirmation pending |
| VoiceOver Safari | Reading order, landmarks, headings, links, controls, states, and announcements are meaningful | Pending | |
| VoiceOver Chrome | Same representative flows as Safari | Pending | |
| Forms/errors | Labels, instructions, errors, and status messages | Not applicable | No submission forms in the assessed version |
| Media | Captions, transcripts, audio control, and flashing content | Not applicable | No audio or video in the assessed version |
| Downloads | First-party PDFs/documents are accessible | Not applicable | No first-party downloads in the assessed version |
| Error page | 404 page identifies the error and provides a usable recovery path | Pending | |

## Representative screen-reader flows

1. Home: skip to content, navigate headings and landmarks, follow primary navigation.
2. Mobile home: open and close the menu, confirm name/state changes, resume at the trigger.
3. Councils: choose District 94, hear the result, expand the district, reach a navigation link without using the map.
4. Events: understand the flyer alternative text and event details without viewing the image.
5. 404: understand the error and return home.
