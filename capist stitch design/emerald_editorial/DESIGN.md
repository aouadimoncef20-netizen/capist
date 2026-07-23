---
name: Emerald Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3f4941'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#6f7a70'
  outline-variant: '#becabe'
  surface-tint: '#006d3d'
  primary: '#006a3b'
  on-primary: '#ffffff'
  primary-container: '#268451'
  on-primary-container: '#f6fff4'
  inverse-primary: '#7ed99e'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5b5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#747575'
  on-tertiary-container: '#fdfcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9af6b8'
  primary-fixed-dim: '#7ed99e'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#00522d'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies a luxury editorial aesthetic, prioritizing clarity, breathing room, and a high-end tactile feel. The personality is sophisticated, calm, and intentional. It draws heavily from **Minimalism** with a focus on negative space, and **Corporate Modern** for its structural reliability.

The target audience consists of discerning users who value quality over quantity and appreciate a quiet, confident interface. The visual narrative relies on the interplay between stark White backgrounds and the richness of "Premium Green," creating a sense of exclusive craftsmanship. Visual noise is aggressively reduced to let content and premium accents drive the user experience.

## Colors

The palette is rooted in a white-dominant luxury aesthetic. 

- **Primary (Premium Green):** Used sparingly for high-impact brand moments, primary CTAs, and active states. It represents growth and prestige.
- **Secondary (Black):** Reserved for primary typography and heavy structural icons to ensure maximum legibility and a classic editorial feel.
- **Tertiary (Grey):** Used for subtle borders, dividers, and disabled states.
- **Supporting (Off-White):** Applied to secondary backgrounds, card containers, or section separators to provide depth without introducing color.

Maintain a high ratio of white space to color to ensure the Premium Green feels like a deliberate accent rather than a dominant wash.

## Typography

The typographic system relies on the high-contrast elegance of **Bodoni Moda** for all display and headline roles. This creates an immediate "magazine" feel. Headlines should use tight letter spacing to emphasize their geometric beauty.

For functional text—body copy, labels, and inputs—**Source Sans 3** provides a clean, neutral balance that ensures legibility across all devices. Use generous line heights for body text to maintain the airy, premium feel of the design system. Labels should frequently utilize uppercase styling with slight tracking for a disciplined, architectural appearance.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain the integrity of a structured editorial composition. On mobile, the system transitions to a fluid, single-column flow with generous side margins.

- **Desktop:** 12-column grid with a 1200px max-width.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins.

Spacing should be used to create clear groupings rather than relying on lines or borders. Prefer larger padding values (e.g., 64px or 80px) between major sections to emphasize the premium nature of the content.

## Elevation & Depth

To maintain the clean, editorial look, this design system avoids heavy shadows. Depth is communicated through:

1.  **Tonal Layers:** Using Off-White (#F9F9F9) surfaces against Pure White (#FFFFFF) backgrounds to define card areas and containers.
2.  **Low-Contrast Outlines:** Very thin (1px) borders in Grey (#DADADA) are used to define inputs and secondary containers.
3.  **Flat Hierarchy:** Most elements sit on the same optical plane. For rare moments of elevation (like modals), use a single, highly-diffused, 10% opacity black shadow with a 32px blur to suggest a soft lift without appearing "techy."

## Shapes

The shape language is **Sharp (0)**. To align with the classic Bodoni typography and the luxury editorial theme, all buttons, input fields, and card containers use 0px border radii. This produces a precise, architectural silhouette that feels more like a printed publication than a standard mobile app. 

Circles are permitted only for specific functional icons or profile avatars to provide a singular point of organic contrast.

## Components

- **Buttons:** Primary buttons are solid Premium Green (#2E8B57) with White text, sharp corners, and uppercase labels. Secondary buttons use a Black 1px border with no fill.
- **Inputs:** Text fields are defined by a bottom border only (1px Black) or a full Grey (#DADADA) outline with no background. Focus states shift the border to Premium Green.
- **Cards:** Cards are primarily background-less, defined by their content and generous padding. If a container is required, use the Off-White (#F9F9F9) tone with no border.
- **Chips:** Small, sharp-edged rectangles using an Off-White fill and Black text. For active states, use a Premium Green background.
- **Lists:** Separated by thin, full-width Grey dividers. Use ample vertical padding (24px+) between list items to maintain the editorial rhythm.
- **Checkboxes/Radios:** Square (sharp) geometry. When checked, the fill is Premium Green with a white checkmark/dot.