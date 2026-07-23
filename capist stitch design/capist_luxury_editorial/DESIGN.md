---
name: Capist Luxury Editorial
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
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#006d3d'
  on-secondary: '#ffffff'
  secondary-container: '#97f3b5'
  on-secondary-container: '#047240'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#9af6b8'
  secondary-fixed-dim: '#7ed99e'
  on-secondary-fixed: '#00210f'
  on-secondary-fixed-variant: '#00522d'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 54px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  price-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-xl: 120px
  stack-md: 64px
  stack-sm: 32px
---

## Brand & Style

This design system embodies the intersection of high-fashion editorial aesthetics and high-performance streetwear. The personality is confident, modern, and clinical in its precision. Drawing heavily from **Minimalism** and **High-Contrast Editorial** styles, the system prioritizes negative space and monochromatic dominance to allow the product photography to serve as the primary visual driver. 

The emotional response is one of exclusivity and "quiet luxury." The interface acts as a silent gallery frame—unobtrusive yet sophisticated. Key characteristics include razor-sharp alignments, a restricted color palette, and a focus on high-contrast typography that commands attention without being loud.

## Colors

The palette is rooted in a high-contrast monochromatic base to ensure the premium nature of the brand remains timeless. 

- **Pure White (#FFFFFF)**: Used for the primary canvas to maximize light and provide an airy, editorial feel.
- **Deep Black (#111111)**: Utilized for primary typography, icons, and high-impact structural elements like primary buttons.
- **Premium Green (#2E8B57)**: A sophisticated accent used sparingly for micro-interactions, stock status indicators, or "Add to Cart" confirmations to provide a hint of "sport-luxe" heritage.
- **Neutrals**: Light Gray (#F7F7F7) is reserved for subtle section backgrounds (e.g., product feature lists), while Border Gray (#EAEAEA) defines the rigid, fine-lined grid structure.

## Typography

The typography system is a study in contrast. **Bodoni Moda** provides the editorial "Vogue-esque" authority for headlines, utilizing its high-contrast strokes to signal luxury. This is balanced by **Inter**, a neutral, systematic sans-serif that ensures absolute clarity for functional elements, product descriptions, and pricing.

**Key Rules:**
- **Headlines**: Use tight letter-spacing for large display sizes to maintain a compact, premium look.
- **Labels**: Small utility text (e.g., "SKU," "COLOR") must always be uppercase with increased letter spacing (+0.1em) for better legibility at small sizes.
- **Scale**: Drastic size differences between headlines and body text should be used to create clear entry points for the eye.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** system for desktop, centered within a 1440px container. It utilizes a 12-column structure with generous 24px gutters.

**Editorial Rhythms:**
- **Vertical Air**: Use `stack-xl` (120px) to separate major sections (e.g., Hero to Featured Collection). This creates a "slow-scroll" experience characteristic of luxury brands.
- **Mobile Reflow**: On mobile, the 12-column grid collapses to 4 columns. Margins reduce to 20px. Horizontal scrolling "carousels" are preferred for product thumbnails on mobile to keep the vertical height manageable.
- **Alignment**: Text content should often be offset or "hanging" from the grid to create dynamic, magazine-like layouts.

## Elevation & Depth

This design system avoids traditional drop shadows to maintain its high-fashion, flat-editorial look. Instead of shadows, depth is communicated through:

- **Tonal Layering**: Using #F7F7F7 against #FFFFFF to distinguish between the background and a product card or secondary container.
- **Fine Outlines**: Elements like input fields and product cards use a 1px solid border (#EAEAEA). 
- **Glassmorphism (Navigation)**: The sticky header is a special case—using a `backdrop-filter: blur(20px)` with a semi-transparent white background (rgba(255, 255, 255, 0.8)) to provide a modern, airy transition as users scroll past high-resolution imagery.

## Shapes

The shape language is architectural and sharp. To avoid an overly aggressive look while remaining premium, a "Soft" setting is used for interactive elements, but with a strict cap.

- **Primary Radius**: 4px (`rounded-sm`). This applies to buttons, input fields, and tags.
- **Product Imagery**: Should remain at 0px (sharp) to mimic the look of physical printed media and maintain a serious, fashion-forward tone.
- **Icons**: Use linear, 1.5px stroke-weight icons with sharp caps and joins.

## Components

### Buttons
- **Primary**: Solid #111111 background, #FFFFFF text. Rectangular with 4px radius. 16px padding (top/bottom) and 32px (left/right). High-contrast hover state (slight opacity shift to 0.9).
- **Secondary**: Ghost style. 1px #111111 border, #111111 text.
- **Tertiary (Text)**: All-caps, underlined on hover, with a trailing arrow icon.

### Cards
- **Product Card**: No border, no shadow. The image fills the container width. Typography below is left-aligned. Use a subtle zoom-in transition (1.05x) on the image when the card is hovered.

### Form Elements
- **Input Fields**: 1px #EAEAEA bottom-border only for a "boutique" look, or a full 1px border with 4px radius. Labels should be small and all-caps above the field.

### Navigation
- **Sticky Header**: Transparent on hero, transitioning to blurred white on scroll. Navigation links are Inter 14px Medium, uppercase.

### UI Micro-components
- **Stock Indicators**: Small circle in Premium Green (#2E8B57) for "In Stock."
- **Size Selectors**: Square boxes with 1px border. Selected state is a solid #111111 fill with white text.