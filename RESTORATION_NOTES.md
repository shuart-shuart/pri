# Process: Roving Ideas — restoration notes

## Sources
- `process_ roving ideasa.htm`: 21 December 2022 Wayback homepage, incomplete, page id 18.
- `process_ roving ideas.html`: 24 March 2023 Wayback homepage, page id 365.
- Original navigation points to `/about/`, `/instructions-list/`, `/contributors/`, `/map/`. The new archive supplies the first three pages.
- Singapore Art Week 2023 official programme guide (National Arts Council): https://www.nac.gov.sg/artweek/uploads/files/SAW23_Digital%20Programme%20Guide_221228.pdf (page 99).

## What was restored
- A functional five-page static site: Home, About, Instructions, Contributors, Map.
- The March 2023 complete #printgreensg instruction, homepage phrase arrangement, site title, page names and original disclaimer.
- The December 2022 incomplete phrase shell was documented, not passed off as a finished instruction.
- Missing original pages were replaced with clearly labeled reconstructed or incomplete pages, and all navigation is local.
- No Wayback toolbar, broken WordPress dependencies, dead calls to original server, or analytics are required.

## Added from Archive 3.zip (March 2023)
- Original About copy and project-team credits.
- Full contributor bios for 36 artists.
- All 36 entries of the original instruction list, including their explanations and significance/location notes.
- Working cross-links between the artist entries and their instructions.
- The site navigation continues to use local HTML pages.

## What still cannot be restored from these files
- Original interactive map markers and Google Maps functionality, some archived image/media dependencies, and original fonts.
- Original animations and WordPress/Elementor backend.
- Pixel-exact styles: the restored color and typographic treatment are an approximation based on surviving material and the programme guide.

## Run
Open `index.html` locally in a browser. For hosting, upload the website files to a static server. No build step or external JavaScript is required.

## Potential next recovery
Retrieve additional snapshots of `/about/`, `/instructions-list/`, `/contributors/`, `/map/` and media from the Wayback Machine, or supply any original WordPress export. Replace the clearly labeled incomplete material only with recovered evidence.

- New source: `Archive 3.zip`, March 24 2023 saved HTML for About, Instructions List, Contributors.


## Version 3: original design reference and homepage behavior

- Added the original November 2022 18-page website poster PDF (from the project Drive folder). This is a design proposal, not proof that every detail shipped unchanged.
- Updated the homepage to reflect page 1 of that original proposal: pale-yellow palette, left-aligned Go to / at / and labels, centered bold instruction body, info / next / list actions, and bottom navigation.
- Added randomized homepage instruction selection from the 36 recovered March 2023 instructions. `info` links to its entry and `next` switches to a different entry. The homepage data is bundled in JavaScript and works when `index.html` is opened locally.
- Added a provisional Resources page based on the November 2022 content brief. Its simplified definitions are restorations and not evidence of final published copy.
- Original interactive map points and true per-instruction pages are not yet rebuilt. The map remains a placeholder; plotting documents do not by themselves establish final deployed map pins.
- More source: the November 2022 website content brief specifies homepage randomization, contributor toggles, location markers, a resource list and keyword search; historic instructions remain from the March 2023 archive.


## V4 repair — historical design fidelity

- Maintained original poster palette **#ffffc4** (lemon background), **#151515** (ink), **#b9b9af** (inactive labels/controls). No bright accent colours introduced.
- Rebuilt contributor names as accessible expand/collapse entries; original March 2023 biographies remain intact.
- Repaired malformed nested HTML headings on the instructions page, numbered entries consecutively, linked all 36 to individual instruction pages, added 10-entry jumping and filtering.
- Generated 36 individual instruction pages from recovered instruction data and accompanying source commentary. Previous/next instruction navigation cycles in archival list order. Where original pages or metadata could not be verified, no fabricated material was added.
- Replaced dead map placeholder with five **documented planning locations**, clearly labeled as a location index, not as confirmed live map pins. External map searches resolve places; coordinates are NOT invented. Original complete marker dataset remains missing.
- The 2022 poster PDF is a design proposal, so these page treatments reproduce its documented intent, not a proven final release.
- Website is entirely static and should work locally, including offline except for external map and social links.


Version 5: See VISUAL_VERIFICATION.md for page-by-page visual reference fixes and remaining limitations.

## V6: Sticky footer and measured design specification
- Owner confirmed the footer remained visible while scrolling. Implemented a fixed bottom footer throughout, with mobile wrapping and body scroll clearance.
- See `SIZE_SPECIFICATION.md` for CSS font sizes, spacing, dimensions, responsive breakpoints, and uncertainty labels.


## Version 12
Standard Book/Bold font stylesheet loaded on all pages via Font Library, with offline fallback. Grey map placeholder retained. See TYPEFACE_V12.md.
