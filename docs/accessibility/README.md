# Accessibility self-assessment package

This folder records Tanglao, Corp's evaluation of the Southern California Chapter website against WCAG 2.1 Level AA. It is evidence of a bounded self-assessment, not an accessibility certification or legal opinion.

- [Scope and method](scope-and-method.md)
- [Manual test matrix](manual-test-matrix.md)
- [Issue log](issue-log.md)
- [Conformance report](conformance-report.md)
- [Independent review brief](independent-review-brief.md)

Automated results are reproducible locally with `npm run test:all`. Set `A11Y_BASE_URL=https://socalknights.org` when running `npm run test:a11y` to exercise the same suite against production. Raw Playwright traces and reports are generated artifacts and are not part of the conformance claim.
