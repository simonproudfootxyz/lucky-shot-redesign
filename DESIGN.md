# Lucky Shot Studio — Design System & Implementation Guide

> **Purpose:** This file is the design source of truth for ongoing work on the Lucky Shot Studio Astro site.
> Use it when making changes in Cursor so new pages, components, responsive states, and content additions remain visually consistent with the approved site direction.

## 1. Project Direction

Lucky Shot Studio is a **commercial creative-services studio with a strong portfolio layer**.

The website should feel:

- bold
- practical
- handcrafted
- confident
- commercial
- approachable
- visually distinctive without becoming decorative for decoration's sake

The site is **not** intended to feel like:

- a generic SaaS or startup site
- a polished corporate agency
- a minimal art-school portfolio with almost no service context
- a retro pastiche
- an overly whimsical craft site
- a UI-heavy app

The work itself should supply much of the visual character.

### Primary site goal

1. Show the quality and breadth of Lucky Shot Studio's work.
2. Explain services clearly enough that prospective clients understand what they can enquire about.
3. Move visitors toward an enquiry.
4. Treat the external Big Cartel shop as secondary.

## 2. Source of Truth

When making design decisions, use the following order of precedence:

1. **The current live site**
2. **This `DESIGN.md`**
3. Existing Astro components and CSS in the repository
4. Earlier static mockups / experiments
5. The client's original Illustrator concepts

Do not reintroduce styling from the original Illustrator concepts unless specifically requested.

Current production reference:

`https://lucky-shot-redesign-production.up.railway.app/`

If the live site and this file differ because the user has intentionally made a newer design change, preserve the newer live-site decision.

## 3. Brand Assets

### Logo

Use the supplied **Lucky Shot Studio SVG logo** as the canonical logo.

Rules:

- Do not redraw it.
- Do not substitute text for it.
- Do not rasterize it when SVG can be used.
- Preserve its proportions.
- On dark backgrounds, use the existing white logo.
- Give the mark enough surrounding space to remain legible.
- Do not decorate the logo with additional borders, shadows, badges, or containers unless explicitly requested.

The dark header is an approved part of the design direction.

## 4. Core Visual Language

The design is built around a deliberately limited visual vocabulary:

- warm cream background
- near-black ink
- dusty coral/red accent
- pale blue accent
- thick black rules/borders
- uppercase display typography
- compact uppercase utility labels
- real portfolio photography
- restrained pill-shaped CTAs

The design should feel like a **modern commercial signwriting/design studio**, with subtle influence from printed ephemera and workshop graphics.

Avoid adding additional decorative systems unless there is a clear functional reason.

## 5. Colour System

```css
:root {
  --ink: #111;
  --cream: #f5f0e6;
  --white: #fff;
  --accent: #e86548;
  --sky: #a9d0df;
  --muted: #cbc3b6;
}
```

### Usage

**`--ink`**
Use for the header, footer, borders, display text, dark section backgrounds, and primary buttons.

**`--cream`**
Use as the primary page background and preferred light neutral instead of pure white.

**`--accent`**
Use selectively for enquiry/commercial emphasis, CTA blocks, selected hover states, and visual punctuation.

**`--sky`**
Use for the About section, occasional service hover states, small graphic accents, and stamp-like elements.

**`--white`**
Use primarily on dark or red surfaces.

Do not introduce unrelated new brand colours casually. Portfolio photography is already colourful.

## 6. Typography

Current type pairing:

- **Display:** `Archivo Black`
- **Body/UI:** `DM Sans`

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Archivo+Black&display=swap");
```

### Display typography

Archivo Black is used for major page headings, homepage hero, section headings, large CTA copy, and prominent numbers.

Typical treatment:

```css
font-family: "Archivo Black", "Arial Black", sans-serif;
text-transform: uppercase;
letter-spacing: -0.04em;
line-height: 0.88–0.97;
```

Do not use display typography for paragraphs.

### Body typography

DM Sans is used for paragraphs, navigation, buttons, labels, service descriptions, and form fields.

### Utility labels

```css
text-transform: uppercase;
letter-spacing: 0.11em;
font-size: 11px;
font-weight: 800;
```

Examples:

- SERVICES
- SELECTED WORK
- MEET THE ARTIST
- DIGITAL SERVICES
- HANDPAINTED WORK

## 7. Layout System

### Main shell

```css
.shell {
  max-width: 1500px;
  margin-inline: auto;
  padding-inline: 28px;
}
```

Mobile can reduce horizontal padding to roughly `15px`.

Do not arbitrarily constrain core content to a narrow editorial column. The portfolio benefits from width.

### Borders

A major visual device is the strong dark rule:

```css
border: 2px solid var(--ink);
```

Use this consistently for hero frames, service grids, portfolio cards, CTA blocks, and structured content areas.

Do not replace the border system with shadows.

### Corners

Most major content blocks should remain square.

Pill-shaped corners are primarily for buttons.

Avoid turning cards into conventional rounded UI cards.

## 8. Header

The approved header is **dark**, not cream.

### Desktop

Use:

- `--ink` background
- white SVG logo
- cream navigation text
- cream outline Shop button
- cream filled or otherwise strongly contrasting Enquire button

Navigation order:

1. Signs
2. Chalkboards
3. Digital Services
4. Branding / Illustration
5. Murals
6. About
7. Shop &nearr;
8. Enquire

Shop is external.

### Mobile

Do **not** simply hide desktop navigation with no replacement.

Mobile must use a proper menu control and navigation panel/menu with access to all service routes, About, Contact, and Shop.

Keep Enquire easy to reach.

## 9. Buttons

Base treatment:

```css
display: inline-flex;
align-items: center;
justify-content: center;
border: 2px solid var(--ink);
border-radius: 999px;
padding: 12px 16px;
font-size: 11px;
font-weight: 800;
text-transform: uppercase;
letter-spacing: 0.09em;
```

Approved variants:

- dark/primary
- coral accent
- dark outline on cream
- cream outline/cream fill in dark header contexts

Prefer concise active labels:

- Start a project →
- Make an enquiry →
- See the work ↓
- Explore digital services →
- About Lucky Shot →

Use arrows deliberately and consistently.

## 10. Homepage

Approved information hierarchy:

1. Dark global header
2. Hero
3. Category marquee
4. Three proof points
5. Services
6. Selected work
7. Digital Services band
8. About / Meet the Artist
9. Enquiry CTA
10. Dark footer

### Hero

Maintain the two-column desktop composition:

- copy left
- portfolio image right
- full framed border
- large uppercase display headline
- small studio descriptor
- two CTAs
- location/availability line
- blue circular stamp over image

The hero should feel bold and commercial, not agency-polished.

### Marquee

Use:

`Signs ★ Chalkboards ★ Murals ★ Branding ★ Illustration ★ Digital Design ★`

Keep it typographic and simple.

### Proof points

Three equal blocks communicate practical differentiators. They are commercial reassurance, not decorative statistics.

## 11. Services Section

Primary services:

1. Signs
2. Chalkboards
3. Digital Services
4. Branding + Illustration
5. Murals

Each service cell contains:

- number
- title
- short description
- arrow

Keep strong borders and selective blue/red hover fills.

Do not convert this into generic icon cards.

## 12. Portfolio Imagery

The portfolio is one of the site's most important elements.

### Rules

- Prefer real Lucky Shot work.
- Do not use invented or AI-generated portfolio projects.
- Preserve useful variation in image orientation.
- Avoid forcing every image into the same aspect ratio.
- Use object-fit cropping only when the composition still works.
- Keep imagery large enough to inspect.
- Let photography provide colour and texture.

### Service galleries

Do not reduce galleries to arbitrary two-image samples.

Current archive depth is approximately:

- Signs: 16 examples
- Chalkboards: 25 examples
- Branding / Illustration: 21 examples
- Murals: 8 examples

These counts may change as work is added or removed.

### Gallery composition

Prefer an editorial rhythm over a monotonous card grid:

- large landscape feature
- paired medium images
- portraits where appropriate
- full-row wides
- alternating sizes

Keep the overall grid coherent.

### Alt text

Use meaningful alt text. Replace generic numbered alt text with real project details when those details become available.

## 13. Service Pages

Routes:

- `/signs/`
- `/chalkboards/`
- `/digital-services/`
- `/branding-illustration/`
- `/murals/`

Craft/portfolio service pages should generally use:

1. service hero
2. concise explanation + CTA
3. supporting capability blocks
4. substantial archive gallery
5. shared enquiry CTA

### Copy tone

Keep it commercial and plainspoken.

Good:

> Custom handpainted signs, boards, windows and lettering made for real spaces and real businesses.

Avoid inflated agency-style prose.

## 14. Digital Services

Digital Services should remain indexable HTML, not a flattened price-list image.

Support:

- package label
- package title
- description
- inclusions
- enquiry CTA
- deliverables/use cases
- future FAQs

Current package labels:

- First Shot
- On the Mark
- Sure Shot

Final pricing, inclusions, package wording, and FAQs may still change.

The homepage Digital Services band should retain its strong dark treatment.

## 15. About

The About section should humanize the business.

Key principle:

**The personality comes from the work and the artist, not decorative website tricks.**

Homepage treatment:

- artist photo
- pale blue background
- oversized uppercase heading
- practical introduction
- About CTA

Avoid excessive personal-brand storytelling unless supplied by the client.

## 16. Contact / Enquiries

Contact is a primary conversion path.

Maintain obvious enquiry access from the header, hero, service pages, homepage CTA, and footer/contact page.

Current form structure:

- Name
- Email
- Business / organisation
- What do you need?
- Project details

Keep the form short.

Current displayed contact email:

`hello@luckyshotnz.com`

Verify before final launch if changed.

## 17. CTA Block

The shared coral CTA block is a recurring design element.

Use:

- `--accent` background
- white text
- dark border
- oversized Archivo Black heading
- white pill CTA

Example tone:

> Got a wall, window, sign or idea?

Reuse this pattern consistently.

## 18. Footer

Use a dark footer.

Typical content:

- Lucky Shot logo
- copyright
- Nelson, New Zealand
- Instagram
- Big Cartel Shop

Avoid an oversized corporate sitemap unless content growth genuinely requires it.

## 19. Responsive Design

Mobile is a first-class design target, not a scaled desktop fallback.

Priorities:

1. comfortable reading
2. portfolio visibility
3. easy navigation
4. clear enquiry path
5. sensible image crops
6. strong hierarchy

Expected collapsing behavior:

- hero: 2 columns → 1
- proof points: 3 → 1
- services: multi-column → 1 or carefully considered 2-column tablet state
- portfolio: editorial desktop grid → stacked/editorial mobile sequence
- pricing: 3 → 1
- About: side-by-side → stacked
- CTA: split → stacked

Do not use one universal mobile image height for all work.

The existing `700px` breakpoint is a starting point; add a tablet breakpoint when it improves composition.

## 20. Motion & Interaction

Keep motion subtle.

Appropriate:

- colour changes on service hover
- small image scale
- arrow movement
- marquee movement if accessible
- mobile-menu transitions
- modest reveal animation

Avoid:

- scroll-jacking
- heavy parallax
- large custom cursors
- excessive kinetic typography
- animations that delay content

Respect `prefers-reduced-motion`.

## 21. Accessibility

Maintain:

- semantic heading hierarchy
- meaningful links
- keyboard-accessible navigation
- visible focus states
- useful alt text
- sufficient contrast
- labelled controls
- accessible mobile menu state
- correct external-link handling

Do not remove focus outlines without an accessible replacement.

## 22. SEO & Content Architecture

Important service content must remain real HTML.

Especially preserve HTML for:

- service descriptions
- Digital Services packages
- prices
- inclusions
- FAQs
- About content
- location/service-area content
- enquiry information

Each page should have:

- unique title
- useful meta description
- one clear H1
- semantic H2/H3 hierarchy
- useful image alt text

Prefer Astro static rendering unless a dynamic feature actually requires client-side JavaScript.

## 23. Astro Implementation Principles

Prefer Astro-native/static implementation.

Use client-side JavaScript only where required, such as:

- mobile navigation
- optional gallery interactions
- lightweight motion
- form behavior

### Reuse

Shared patterns should be components, such as:

- `Header`
- `Footer`
- `ContactCTA`
- `ServiceGrid`
- `PortfolioImage`
- service hero/layout components
- package cards

Do not duplicate large blocks of nearly identical markup.

### Data-driven content

Keep portfolio lists, service definitions, navigation, and external URLs centralized where practical.

Do not hardcode the same URL across many templates.

## 24. External Links

Shop is hosted on Big Cartel and is **not** an internal Astro route.

Treat Big Cartel and Instagram as external destinations.

When opening new tabs, use appropriate `rel` attributes.

Replace the current placeholder Big Cartel URL before final launch.

## 25. Things Cursor Should NOT Do Without Explicit Approval

Do **not** automatically:

- replace Archivo Black or DM Sans
- change the cream/black/coral/blue palette
- make the header light
- redesign the logo
- add gradients
- add drop shadows to cards
- heavily round content cards
- introduce generic stock imagery
- replace portfolio photos with generated work
- reduce service galleries to a small arbitrary subset
- turn Digital Services pricing into an image
- change the site into a generic minimalist portfolio
- remove the commercial/enquiry emphasis
- redesign unrelated areas when one section needs changing
- add a framework/library for something Astro/CSS can handle simply
- remove intentional thick black borders
- treat mobile as a simple scaled-down desktop layout

Preserve the existing system unless the requested task explicitly changes it.

## 26. Guidance for New Components

Before creating a new visual component, check:

1. Can an existing pattern handle this?
2. Does it use the established palette?
3. Does it use the established typography?
4. Does it respect the border language?
5. Is content more important than decoration?
6. Does it work on mobile?
7. Is CTA behavior consistent?
8. Does it feel like Lucky Shot rather than generic web UI?

If several answers are no, reconsider the design.

## 27. Content Voice

The site voice should be:

- direct
- confident
- useful
- informal but professional
- lightly playful
- low on jargon

Established examples:

> Make your business impossible to miss.

> What can we make for you?

> Good design, without the agency fog.

> Seen around town.

> Got a wall, window, sign or idea?

Avoid corporate jargon, excessive superlatives, faux-poetic agency copy, and abstract mission statements.

## 28. Current Placeholder Status

Treat these as replaceable content/configuration rather than immutable design:

- final Big Cartel URL
- final Instagram/social URLs
- Digital Services prices
- exact Digital Services inclusions
- Digital Services FAQs
- some service copy
- some About copy
- final form endpoint/provider
- richer project names and alt text

Changing these should not require redesigning the site.

## 29. Definition of a Successful Change

A new feature or page should feel as if it belonged to the approved design from the beginning.

Before considering design work complete, check:

- desktop
- tablet
- mobile
- navigation
- spacing
- type hierarchy
- image crops
- hover/focus states
- CTA consistency
- accessibility
- SEO semantics

If a page technically works but visually feels like a different site, it is not finished.

## 30. Short Prompt for Cursor

Use this when useful:

> Follow `DESIGN.md` as the source of truth for visual and UX decisions. Preserve the current Lucky Shot Studio design system, component patterns, responsive behavior, typography, colour palette, border language, portfolio-first imagery, and commercial enquiry focus. Do not redesign unrelated areas. Reuse existing components and data structures where practical, and ensure all changes are intentionally designed for desktop, tablet, and mobile.
