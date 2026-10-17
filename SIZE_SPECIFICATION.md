# Process: Roving Ideas — Site Size Specification (Version 6)

## Measurement status

**Reconstruction measurements, not certified historical pixel values.** The original design PDF provides proportional layouts and hierarchy; the numbers below describe the current CSS and are independently verifiable in the restored site. The original source typeface, export dimensions, viewport assumptions, and precise historical web CSS have not been recovered. The footer is confirmed by the project owner as sticky; **fixed** has been implemented to stay visible while scrolling.

**Units:** `px` = CSS pixels, `rem` = relative to browser root (typically 16px), `vw` = 1% viewport width, `dvh` = 1% dynamic viewport height. `clamp(min, ideal, max)` varies with screen width. `5%` horizontal padding is proportional to its parent container, not universally a fixed pixel count. All figures are CSS nominal values; actual box sizes depend on wrapping and text.

## Palette and typography

| Item | Current value |
|---|---|
| Background / paper | `#FFFFC4` |
| Primary type / ink | `#151515` |
| Inactive reference grey | `#B9B9AF` |
| Other subdued text | `#949488`, `#AAA99F`, `#B8B8A6` (context-dependent) |
| Hairline border | `rgba(32,32,24,.12)`, 1px |
| Typeface | Arial, then Helvetica, then sans-serif (substitute; original unidentified) |
| Default browser root | Usually 16px; not explicitly overridden |

## Global layout / footer (all pages)

| Element | Desktop (>700px) | Mobile (<=700px) |
|---|---|---|
| Footer position | `position: fixed; bottom:0; left:0; right:0` | Same |
| Footer minimum height | 35px | 76px |
| Footer horizontal inset | 2.2% of width each side | 5% of width |
| Footer padding | 8px vertical | 8px vertical |
| Footer logo | 10px, weight 500 | 10px, weight 500 |
| Footer navigation links | 10px, weight 400; active 700 | Same |
| Footer column gaps | 18px parent; 16px between nav links | 6px parent; 9px/16px nav rows/columns |
| Footer divider | 1px | 1px |
| Body bottom clearance | 35px | 76px |
| Focus ring for links | 2px with 3px offset | Same |

The footer remains in view when the page scrolls. A fixed footer overlays viewport real estate, so content and scroll targets have been padded accordingly. At exceptionally narrow widths or increased text zoom, the navigation may need another height adjustment.

## Homepage

| Element | Current dimension |
|---|---|
| Home stage | `min-height:75dvh` (earlier rules); flex grows to viewport as needed |
| Stage padding desktop | top 5.2rem (83px at 16px root), right 11%, bottom 6rem (96px), left 3% |
| Stage padding mobile (<=720px) | top 35px, right 6%, bottom 75px (increased by fixed-footer mobile correction), left 6% |
| Three-row instruction grid | 23% label column / 77% value column |
| Grid row minimum | 115px each (desktop) |
| Labels Go to / at / and | `clamp(16px, 1.7vw, 22.4px)`; grey, bold |
| Instruction values | `clamp(20px, 2.2vw, 38.4px)`; bold, centered, 1.3 line-height |
| Mobile instruction values | `clamp(21.6px, 5.4vw, 35.2px)` |
| Text maximum width | 900px |
| Instruction table max width | 1250px |
| Stage button text | 13px bold |
| Stage button padding | 7px |
| Stage button gap | 20px |
| Stage button position | absolute; right 3%; top 61% (desktop); right 5%, bottom 15px (mobile) |

## Instructions index

| Element | Current dimension |
|---|---|
| Main padding desktop | top 36px, sides 5.2%, bottom 128px |
| Main padding mobile | top 18px, sides 5%, bottom 80px |
| Sticky instruction metadata rail | min height 48px; top 0; horizontal gap 14px |
| Instruction number | 13px, bold; min width 23px |
| Active title / artist line | 12px inherited rail; artist muted |
| Search label | 11px |
| Search field | width 130px (desktop); maximum 23vw; full available width on mobile |
| List max width | 1200px; 12% right inset on desktop |
| Individual text row max width | 1000px |
| Instruction list font | `clamp(22.4px,2.35vw,44px)`; weight 700; line-height 1.28 |
| Mobile instruction list font | `clamp(21.6px,5.6vw,35.2px)` |
| Row vertical padding | 33.6px top / 37.6px bottom desktop; 30.4px each mobile |
| Up/down/info tools | 11px; position fixed at right 5%, top 86px (desktop), 116px (mobile) |

## Contributors

| Element | Current dimension |
|---|---|
| Main page padding | top 2.5vw, sides 5.2%, bottom 80px |
| Intro heading | `clamp(24px,3vw,51.2px)` |
| Name in closed accordion | `clamp(24px,2.75vw,48px)`; muted grey |
| Name in open accordion | same size; black |
| Name row | 14px top/bottom padding + 4px horizontal |
| Biography | `clamp(16px,1.45vw,19.2px)`; line-height 1.65 |
| Biography horizontal offset | 29% of containing width desktop; 0 mobile |
| Biography max width | 650px |
| Divider | 1px |

## Instruction detail pages

| Element | Current dimension |
|---|---|
| Page main | max width 1450px; 5%+ responsive outer padding |
| Heading | `clamp(48px,6.8vw,112px)` (inner page) |
| Instruction columns | 22% labels / remaining content with 16px gap |
| Location/time/action labels | `clamp(24px,2.2vw,38.4px)` |
| Instruction value text | `clamp(24px,2.8vw,52px)`; line-height 1.25; max width 850px |
| Detail vertical spacing | 32px top / 64px bottom |
| Lower context grid | Responsive minimum column 310px, 5vw gap, margin 64px top/bottom |
| Context body | 16.8px; line-height 1.7 |
| Context subheading | 24px |
| Prev/next row | top divider 1px; 24px top/bottom padding |
| Mobile | Single-column instruction, labels appear above each value |

## About, map, and other pages

| Element | Current dimension |
|---|---|
| General page main | max width 1450px, sides 5.2%, bottom 80px |
| About content | max width 1100px |
| About lead block | max width 950px |
| About lead subheading | `clamp(25.6px,3vw,52px)`; line-height 1.2 |
| Secondary About blocks | max width 670px; aligned to right |
| Location headings | `clamp(20.8px,2.1vw,33.6px)` |
| Location list row | top border 1px, padding 24px vertically |
| Map/context notes | 14px |

## Original mockup versus implementation

**Source-backed design characteristics:** three-part instructional homepage, pale-yellow/black/grey hierarchy, narrow bottom navigation, muted idle names and text, selected-instruction emphasis, and persistent footer recalled by the owner.

**Not recoverable as exact sizes from current evidence:** historical CSS pixel positions, original commercial font family and font metrics, exact mobile breakpoints, the true PDF-to-browser scale, detailed map dimensions, hover animation timings, and any device-specific original styling. These require original WordPress/Elementor CSS, screenshots with known dimensions, or a working archive with CSS assets.
