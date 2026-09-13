# SoCal Knights Website Plan

## Purpose of this document

This document proposes the content, page structure, visual direction, and delivery plan for `socalknights.com`, the website of the Knights of Columbus Southern California Chapter. It is based on the supplied Word document, the supplied images, and a review of the local `stgenknights` project.

The recommended approach is to reuse the proven technical patterns from the St. Genevieve website while creating a distinct chapter-level identity and a simpler experience for members, council leaders, prospective Knights, and the public.

## Website goals

The website should help visitors:

1. Understand what the Southern California Chapter is and whom it serves.
2. Find current chapter officers, directors, and committee chairmen.
3. Discover upcoming chapter events and important announcements.
4. Learn about chapter programs and their chairmen.
5. Download current forms and official resources.
6. Join the Knights of Columbus through the official membership website.
7. Contact the chapter or the right program leader.

For chapter leadership, the website should also be easy to update without editing the same information in several places.

## Audiences

### Primary audiences

- Knights and council officers throughout Southern California
- District Deputies and chapter leaders
- Catholic men considering membership
- Members looking for forms, event details, or chapter contacts

### Secondary audiences

- Families of Knights
- Parishes and clergy
- Community partners and charitable organizations
- Members of the public who encounter a chapter program or event

## Recommended site map

The main navigation should stay compact. Related information can be grouped beneath dropdown menus on larger screens and expandable sections on mobile.

```text
Home
About
  About the Chapter
  Our Founder
  Mission and Vision
Leadership
  Chapter Officers
  Directors and Committee Chairmen
  Past Chapter Presidents
Programs
  Faith
  Community
  Life
  Other Chapter Initiatives
Events
News
  Announcements
  Photo Gallery
Resources
  Forms
  Useful Links
Join Us
Contact
```

`News` and `Resources` group related pages and prevent the main navigation from becoming too crowded. On the first release, pages with little content may be sections within a parent page rather than separate pages.

## Page content

### Home

The home page should give a clear overview and direct visitors to the most common tasks.

Recommended sections:

- Header with the Southern California Chapter logo and primary navigation
- Hero area with the chapter name, a short chapter description, and two actions: **View Events** and **Join Us**
- Current Columbian year theme using the supplied Saint Augustine image, if the chapter confirms it may be published
- Brief introduction to the Southern California Chapter
- Next three upcoming events
- Two or three current announcements
- Four program areas: Faith, Community, Life, and Other Chapter Initiatives
- Leadership preview featuring the President and Chaplain, with a link to all leadership
- Join invitation linked to [kofc.org/joinus](https://www.kofc.org/joinus)
- Contact prompt and footer links

The home page should not reproduce every officer, chairman, or form. It should summarize and route visitors to the appropriate page.

### About

The About page should explain the organization at two levels:

- What the Knights of Columbus is
- What the Southern California Chapter does for councils and communities in the region

Recommended content:

- Chapter purpose and geographic area served
- Short chapter history
- Mission and vision
- The four principles of Charity, Unity, Fraternity, and Patriotism, if approved for chapter use
- Short section about Blessed Michael McGivney
- Links to the official Knights of Columbus founder, mission, Supreme Council, and California State Council pages

The official source pages should be linked rather than copied at length. Chapter-specific wording is still needed.

### Leadership

This page should make chapter roles easy to scan and maintain.

Recommended sections:

1. Chapter Officers
2. Directors and Committee Chairmen
3. Past Chapter Presidents

The supplied officer roster currently includes:

- President — Felimon N. Camana
- Chaplain — Rev. Joy Lawrence Santos
- Vice President — Raymond Mangahas
- Secretary — Thomas Bray
- Treasurer — Walter Gonzalez
- Advocate — Jim Carcich
- Marshal — Geoffrey Plourde
- Assistant Marshal — William Upshaw
- Three Year Trustee — Danilo Eslava
- Two Year Trustee — Jose Estevez
- One Year Trustee — Iñigo Felimon Engo
- Immediate Past Chapter President — Danilo Eslava
- Adviser — James Larson
- State Deputy — Vladimir Rivera

Directors and chairmen should be grouped by Primary Chairmen, Faith, Community, Life, and Other. Empty roles should either show **Vacant** if the vacancy is intentional or be hidden until a name is confirmed.

Each leadership term should include the Columbian year so an old roster is not mistaken for the current one. Email addresses should use role-based addresses where possible, such as `president@`, rather than publishing personal addresses.

### Programs

The Programs landing page should explain how the chapter supports councils and communities, then link to category sections or pages.

#### Faith

- Vocations
- Icon Program
- Father McGivney Guild
- McGivney Relic
- Faith Chairman

#### Community

- Basketball Free Throw
- Essay and Poster Contest
- Wheelchair Program
- Soccer Challenge
- Coats for Kids
- Saint Joseph's Table and Food for Families
- Automated External Defibrillator program
- Community Chairman

#### Life

- Ultrasound
- Campaign Supporting People with Intellectual Disabilities
- Special Olympics
- Silver Rose
- Life Chairman

#### Other Chapter Initiatives

- District Deputy mentoring
- Ceremonials
- Membership recruitment and retention
- Training
- New council and round table development
- History book
- Fraternal benefit events
- Star Council tracking
- Safe Environment
- Cor initiative
- Hispanic development
- Retirement home support
- Columbian Charities
- Campesinos
- Disaster relief and first responders
- Scholarships
- Chapter website and social media

Each program entry should eventually contain a short description, the current chairman, relevant dates, downloadable material, and a contact action. Until descriptions are supplied, the first release can show a clean directory of programs and chairmen.

### Events

The Events page should be the authoritative chapter calendar.

Each event needs:

- Event title
- Date and start and end time
- Venue name and complete address
- Host or sponsoring council
- Short description
- Registration or ticket link, when applicable
- Cost, deadline, and capacity, when applicable
- Contact person or role
- Flyer or downloadable document, when applicable
- Status such as scheduled, postponed, cancelled, or completed

The page should show upcoming events first and retain a simple archive of past events. Calendar-download links can be added after the basic event workflow is established.

### Announcements

Announcements are for timely notices that are not necessarily events, such as leadership notices, deadlines, program updates, and chapter news.

Each announcement needs a title, publication date, summary, full content or attachment, category, and expiration or archive date. Expired announcements should move automatically to an archive instead of disappearing.

### Photo Gallery

Photos should be organized by event or album rather than placed in one long gallery.

Each album needs:

- Album title and event date
- Location or host council
- Short caption
- Photographer or source credit when required
- Accessible descriptions for meaningful images
- Confirmation that the chapter has permission to publish recognizable people, especially minors

The two supplied HEIC files need descriptive filenames and conversion to a web-friendly format before publication. The website should keep the original files outside the public build and publish optimized WebP or JPEG versions.

### Forms

The Forms page should provide one trusted place for current chapter forms.

Each form needs:

- Clear form name
- Purpose
- File type
- Revision date or Columbian year
- Who should complete it
- Where or to whom it should be submitted
- Deadline, if applicable

Forms should be grouped by topic, such as membership, programs, events, reporting, and administration. Obsolete files should be archived or removed from the public page.

### Join Us

This page should briefly explain who may join and what prospective members can expect. Its main action should go to [kofc.org/joinus](https://www.kofc.org/joinus).

Recommended supporting content:

- Basic membership eligibility, confirmed against current official wording before publication
- What membership offers
- What happens after submitting the official form
- A chapter contact for men who need help finding a local council

The website should not create a second membership application form if the official Knights of Columbus process already collects the required information.

### Contact

The Contact page should route a visitor to the correct person without exposing unnecessary personal information.

Recommended content:

- General chapter email
- Mailing address, if the chapter has one
- Chapter meeting location and schedule, if meetings are open or relevant to visitors
- Contact form with topic selection
- Links to official social media accounts
- Leadership or program directory link
- Expected response time

Contact-form submissions need spam protection, a privacy notice, and a confirmed recipient.

### Useful Links

Include clearly labeled external links to:

- Knights of Columbus Supreme Council — [kofc.org](https://www.kofc.org)
- California State Council — [californiaknights.org](https://www.californiaknights.org)
- Official Join page — [kofc.org/joinus](https://www.kofc.org/joinus)
- Official founder and mission pages
- Other diocesan, chapter, or council resources approved by the chapter

External links should be reviewed periodically so broken or outdated destinations are removed.

## What to reuse from the St. Genevieve project

The local St. Genevieve project provides useful technical patterns:

- Eleventy static-site structure
- Shared navigation, footer, and search-engine metadata includes
- Data files for announcements and gallery items
- Responsive navigation and dropdown behavior
- Announcement scheduling and archiving
- Photo gallery and lightbox behavior
- Accessible skip link, semantic headings, and responsive layout
- Static hosting and automated builds

These patterns can reduce development time, but the SoCal site should receive its own content model, branding, page hierarchy, styles, and component treatment.

The St. Genevieve content that should not be carried over includes council dues, parish-specific contact information, council number and officers, Knightline archives, council-specific analytics identifiers, and council-specific membership incentives.

## Distinct visual direction

The site can feel related to the Knights of Columbus without looking like a copy of `stgenknights.com`.

Recommended direction:

- Use the supplied Southern California Chapter logo as the primary brand asset.
- Build the palette around navy, warm gold, white, and a restrained red accent.
- Use a wide regional or service-oriented hero rather than the St. Genevieve watercolor and parish presentation.
- Use editorial cards for events and announcements, and structured directories for leadership and programs.
- Keep typography dignified and highly readable, with a serif display face paired with a clean sans serif body face.
- Use generous spacing, subtle borders, and minimal animation.
- Avoid copying the St. Genevieve page compositions, hero treatment, or exact navigation behavior.

The supplied chapter logo is wide and works well in a desktop header. A simplified emblem or approved compact logo variant may be needed for mobile, social sharing, and the browser favicon.

## Content and asset checklist

### Required before the first public release

- Approved one or two paragraph chapter description
- Official chapter name and preferred capitalization
- Geographic area or dioceses served
- Current Columbian year for the leadership roster
- Confirmation of every officer and chairman name, spelling, title, and vacancy
- Past Chapter Presidents list, including years served
- General chapter email and approved contact recipients
- Mailing address or confirmation that none should be published
- Meeting schedule and location, if public
- Initial upcoming events
- Initial announcements
- Current forms with revision dates
- Approved social media links
- Privacy policy contact and contact-form handling decision
- Permission to use both the Southern California Chapter logo and Saint Augustine theme image
- Identification and publication approval for the two supplied HEIC images

### Helpful soon after launch

- Chapter history and founding date
- Short description for each program
- Program-specific contact addresses
- Photos from several recent chapter events
- Partner, diocese, and participating council links
- Website editor or editors and an update process
- Analytics preference and consent requirements

## Editorial decisions to confirm

The chapter should answer these questions before design and development are finalized:

1. Is the formal public name **Knights of Columbus Southern California Chapter**, or is another form required?
2. Which counties, dioceses, districts, or councils does the chapter serve?
3. What is the current Columbian year for the supplied roster?
4. Are chapter meeting details public?
5. Should personal names be accompanied by email addresses or phone numbers, or should all contact use role-based addresses?
6. Are all leadership vacancies meant to appear as **Vacant**, or should unfilled roles be hidden?
7. Who may publish events, announcements, photos, and forms?
8. Should past events, announcements, and leadership rosters remain publicly searchable?
9. Does the chapter want a public list or map of participating councils?
10. Are Spanish-language pages or translated key information needed?
11. Is a newsletter archive planned, or are announcements sufficient?
12. May the Saint Augustine 2026–2027 image and both supplied HEIC images be published online?

## Recommended first release

The first release should focus on complete, dependable information rather than launching every possible feature.

### Release one pages

- Home
- About
- Leadership
- Programs
- Events
- Announcements
- Photo Gallery
- Forms and Useful Links
- Join Us
- Contact
- Privacy
- Custom 404 page

### Release one functions

- Responsive navigation
- Reusable site header and footer
- Data-driven leadership, programs, events, announcements, gallery, and forms
- Automatic separation of upcoming and past events
- Automatic announcement archiving
- Optimized responsive images
- Search-engine metadata and social-sharing images
- Accessible keyboard navigation, headings, labels, and contrast
- Contact method with spam protection, if a form is approved
- Analytics only after the chapter chooses a provider and privacy approach

### Later enhancements

- Council directory or regional map
- Calendar subscription
- Site search
- Spanish-language content
- Newsletter archive
- Private officer resources or document submission workflow
- Content-management dashboard, if nontechnical editors need it

## Technical recommendation

Use the St. Genevieve Eleventy project as a structural reference, not as a copy. A static Eleventy site remains a good fit because it is fast, inexpensive to host, secure, and suitable for content that changes periodically.

Recommended implementation:

- Eleventy for page generation
- Markdown or structured data files for editable content
- Reusable templates for navigation, footer, leadership lists, event cards, announcements, gallery albums, and forms
- Image optimization to WebP or AVIF with JPEG fallback where needed
- Automated build and deployment from the Git repository
- `socalknights.com` and `www.socalknights.com` configured with one canonical version
- HTTPS, redirects, sitemap, robots file, social metadata, and a custom 404 page
- A documented update workflow that does not require copying HTML between pages

The hosting provider can be chosen during implementation. Domain ownership is already complete, but DNS should not be changed until a tested preview is approved.

## Accessibility privacy and maintenance

Accessibility and maintenance should be part of the initial build rather than later additions.

- Meet WCAG 2.2 AA practices for contrast, keyboard access, focus states, form labels, headings, and alternatives for meaningful images.
- Avoid placing essential information only inside flyers or images.
- Publish PDF forms only when necessary and provide clear titles and revision dates.
- Collect the minimum information required through a contact form.
- Do not publish private phone numbers, personal email addresses, or home addresses without explicit approval.
- Assign an owner for events, announcements, forms, leadership changes, and annual roster rollover.
- Review events and announcements at least monthly and leadership and forms at the start of each Columbian year.

## Proposed delivery sequence

### Phase 1 Content confirmation

- Answer the editorial questions in this document.
- Verify the leadership roster and program assignments.
- Collect the initial events, announcements, forms, and contact details.
- Confirm image and logo permissions.

### Phase 2 Information architecture and design

- Approve the site map.
- Produce desktop and mobile page directions for Home, Leadership, Programs, and Events.
- Approve the visual system before all pages are built.

### Phase 3 Development

- Set up the Eleventy project and reusable components.
- Add structured content collections.
- Build and populate the release-one pages.
- Configure metadata, image optimization, accessibility, and contact handling.

### Phase 4 Review and launch

- Review content with chapter leadership.
- Test on phones, tablets, and desktop browsers.
- Check accessibility, links, forms, performance, and social previews.
- Connect the domain only after the preview is approved.
- Document how chapter editors make routine updates.

## Recommended next decision

Approve or revise the proposed site map first. Then complete the required content checklist, beginning with the exact chapter description, geographic area served, leadership year, contact information, and the first three events. Those decisions will give us enough information to create a representative home page and design system without inventing chapter content.
