# Accessibility issue log

| ID | WCAG | Severity | Finding | Resolution | Verification |
| --- | --- | --- | --- | --- | --- |
| A11Y-001 | 2.1.1, 4.1.2 | Serious | Mobile navigation did not support Escape dismissal or update its accessible name between open and closed states. | Added explicit Open/Close menu names, Escape handling, focus restoration, and desktop-breakpoint state reset. | Automated interaction test passed September 15, 2026; manual VoiceOver verification pending. |
| A11Y-002 | 1.3.1, 4.1.3 | Serious | Council map/filter instructions did not clearly identify the equivalent directory path, and the status did not name the selected district. | Identified the map as a labelled region, associated help/status text, documented the directory alternative, and made status messages name the filter. | Automated filtered-state test passed September 15, 2026; manual screen-reader verification pending. |
| A11Y-003 | 2.3.3 | Moderate | Image hover transition was not explicitly suppressed for users requesting reduced motion. | Extended the reduced-motion rule to transitions and animations. | Code review complete; manual reduced-motion verification pending. |

Do not mark this assessment complete until all manual checks are resolved and any new findings have been added here.
