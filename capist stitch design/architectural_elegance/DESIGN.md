---
name: Architectural Elegance
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#3f493f'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#555f6f'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f3'
  on-secondary-container: '#596373'
  tertiary: '#97344a'
  on-tertiary: '#ffffff'
  tertiary-container: '#b64c62'
  on-tertiary-container: '#fff1f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#ffd9dd'
  tertiary-fixed-dim: '#ffb2bd'
  on-tertiary-fixed: '#400013'
  on-tertiary-fixed-variant: '#81233b'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
This design system is built on the principles of luxury editorial and architectural precision. The aesthetic is defined by intentional whitespace, high-contrast typography, and a "less but better" philosophy. It targets a discerning audience that values heritage, craftsmanship, and quiet sophistication.

The design movement is a hybrid of **Modern Minimalism** and **Editorial Luxury**. It utilizes the structural clarity of a gallery layout combined with the typographic weight of a high-end fashion masthead. The emotional response should be one of calm, authority, and timelessness.

## Colors
The palette is rooted in a "Forest & Stone" concept. **Premium Forest Green** serves as the single point of focused interaction, used sparingly to denote importance and luxury. 

**Deep Charcoal** is used for all primary text and headings to ensure maximum legibility and a classic ink-on-paper feel. The background strategy utilizes **Pure White** for primary content surfaces and an **Ultra-light Warm Gray** for structural separation, such as sidebars or section breaks, maintaining a soft, approachable warmth without compromising the minimalist core.

## Typography
The typographic scale emphasizes dramatic contrast between display and body text. **Bodoni Moda** provides a high-contrast, vertical stress that evokes editorial authority. Large headlines should use negative letter-spacing to feel tight and custom-set.

**Plus Jakarta Sans** is selected for body copy to provide a friendly yet professional counter-balance to the formal serif. Use `label-caps` for eyebrows and overlines to add an architectural, disciplined feel to the layout.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mimic the intentionality of a printed magazine. Content is centered within a 1280px container.

On desktop, use generous 64px outer margins to create a "frame" around the content, reinforcing the gallery aesthetic. Spacing between major sections should be expansive (typically 120px+), while internal component spacing should adhere to a strict 8px baseline grid. Vertical rhythm is critical; elements should feel aligned to a structural spine.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Tonal Layers** and **Low-contrast Outlines**. Depth is communicated through the strategic use of the warm gray background (#F9F9F9) against the pure white (#FFFFFF) containers.

Where physical separation is required, use a 1px solid border in a very light tint of the neutral color (e.g., #E5E7EB). Interactive elements like cards do not lift on hover; instead, they should utilize subtle color shifts or hairline border weight changes to maintain a flat, architectural plane.

## Shapes
In keeping with the architectural and editorial theme, the shape language is **Sharp**. Right angles convey precision, discipline, and high-end construction. 

Avoid rounded corners on buttons, inputs, and image containers. Circular elements are reserved strictly for functional iconography or avatars to provide a singular point of organic contrast against the rigid, rectangular grid.

## Components
- **Buttons:** Primary buttons are solid Deep Charcoal with White text, sharp corners. Ghost buttons use a 1px Forest Green border with Forest Green text for secondary actions.
- **Input Fields:** Bottom-border only or 1px full-frame charcoal borders. Labels should always use the `label-caps` style positioned above the field.
- **Cards:** No shadows. Use a subtle #F9F9F9 background fill or a 1px hairline border. Images within cards should always be full-bleed to the top and sides.
- **Lists:** Use wide spacing between items with a 1px horizontal divider. The Forest Green should be used for bullets or active-state indicators.
- **Chips/Tags:** Small, rectangular boxes with `label-caps` text and a light gray background. No rounding.
- **Navigation:** Top-tier navigation should be centered with high tracking (letter-spacing) on links. Use the Forest Green for a 2px underline on the active state.