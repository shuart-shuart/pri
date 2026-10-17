# Version 7 — archive alignment

- Colours taken from archived styles: background/footer `#FEFFC9`, inactive text `#C6C6C6`, near-black text `#020101` (the archive also includes `#000000`). These are original CSS values but differing widgets can use separate colours.
- Typography references the archived family name `Standard`, with Arial fallback because no verified distributable original font file was recovered. The original typeface is **not embedded**.
- Footer stays fixed; abbreviated `P:RI` appears on small screens. Spacing set to 16px in the static reconstruction; original Elementor per-breakpoint gaps were not fully extractable, so exact matches are unverified.
- Home instruction remains randomized; a seeded pseudorandom generator is initialized using the current time. The historical cautionary disclaimer has been restored verbatim.
- About section text is the previously recovered March 2023 copy; archive-only banner removed. The layout is still a responsive reconstruction, not a cloned Elementor DOM.
- Removed the Resources page and its footer links; it was a planning-page reconstruction.
- Archived WP Go Maps HTML shows `wpgmza_map_1` with `width:100vw; height:94vh;` and map zoom 12 centred on Singapore (`1.3352992143226619, 103.85192954244211`). The plugin referenced Google Maps and paid WP Go Maps components; working restoration cannot be confirmed from these saved captures without backend marker data, plugin runtime and map credentials. The map page is a plain grey box at the coded dimensions, rather than false pins.
- Original Wayback media and font assets are not fully available. Do not describe the result as pixel perfect.
