# Version 9: archived CSS + plugin evidence integration

This is a static restoration, not a live WordPress or Elementor deployment.

## Source files preserved verbatim (except appended Wayback boilerplate removed)
- `archival-css/post-34.css`: December 2022 Elementor kit global colours, type families/sizes, line-height, letter spacing, responsive scales.
- `archival-css/post-18.css`: December 2022 homepage layout; 30/70 columns in responsive CSS, 23vh prompt-row heights, substantial top padding, secondary control styles.
- `archival-css/post-95.css`: December 2022 fixed-bottom navigation and background/border settings.
- `archival-css/post-180.css`: Elementor modal styles, kept as evidence, not loaded by static pages.

## Changes actually made
- New, readable `archive-alignment.css` applied after Version 8's existing CSS to map the archived site-specific CSS to the new DOM.
- Homepage text uses Standard (when available), 28px bold at desktop, 22px tablet, 18px small screens; 1.55 line-height; 30/70 label/prompt layout and archived vertical rhythm.
- Original pale-yellow `#FEFFC9`, grey `#C6C6C6`, black text, and grey 1px footer divider.
- Fixed footer, original four navigational sections, mobile P:RI, random home selection, cautionary disclaimer, archived About content preserved.
- Map remains grey 100vw/94vh placeholder, by previous user direction. **No genuine marker database or map API keys were located in supplied plugin distributions.**

## Plugin interpretation
The ZIP contains packaged Elementor Pro and WP Go Maps Pro **program code and styles**, not the project's saved WordPress database. Loading these plugins on static HTML would not recreate pages or map markers and may introduce licensing/security dependencies. Their structure was inspected, but they are not shipped as site runtime dependencies.

## Historical accuracy limits
Original Standard font binaries not found; fallback Arial is used. Only the saved CSS values have been confirmed, not all original visual breakpoints. The original map data and page-specific Elementor exports are still missing.
