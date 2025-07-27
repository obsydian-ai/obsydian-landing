# Obsydian Unified Color System

## Overview
This document outlines the unified color system implemented across the Obsydian website to ensure consistency and professional branding.

## Color Palette

### Primary Colors (Blue-based)
- **Primary-50**: `#f0f8ff` - Very light blue
- **Primary-100**: `#e0f2fe` - Light blue
- **Primary-200**: `#bae6fd` - Soft blue
- **Primary-300**: `#7dd3fc` - Medium light blue
- **Primary-400**: `#38bdf8` - Medium blue
- **Primary-500**: `#0ea5e9` - Main brand blue
- **Primary-600**: `#0284c7` - Dark blue
- **Primary-700**: `#0369a1` - Darker blue
- **Primary-800**: `#075985` - Very dark blue
- **Primary-900**: `#0c4a6e` - Deep blue
- **Primary-950**: `#082f49` - Darkest blue

### Accent Colors (Purple-based)
- **Accent-50**: `#fef7ff` - Very light purple
- **Accent-100**: `#fdf2ff` - Light purple
- **Accent-200**: `#fae8ff` - Soft purple
- **Accent-300**: `#f5d0fe` - Medium light purple
- **Accent-400**: `#f0abfc` - Medium purple
- **Accent-500**: `#e879f9` - Main accent purple
- **Accent-600**: `#d946ef` - Dark purple
- **Accent-700**: `#c026d3` - Darker purple
- **Accent-800**: `#a21caf` - Very dark purple
- **Accent-900**: `#86198f` - Deep purple
- **Accent-950**: `#4c0449` - Darkest purple

### Success Colors (Green-based)
- **Success-50**: `#f0fdf4` - Very light green
- **Success-100**: `#dcfce7` - Light green
- **Success-200**: `#bbf7d0` - Soft green
- **Success-300**: `#86efac` - Medium light green
- **Success-400**: `#4ade80` - Medium green
- **Success-500**: `#22c55e` - Main success green
- **Success-600**: `#16a34a` - Dark green
- **Success-700**: `#15803d` - Darker green
- **Success-800**: `#166534` - Very dark green
- **Success-900**: `#14532d` - Deep green
- **Success-950**: `#052e16` - Darkest green

### Warning Colors (Amber-based)
- **Warning-50**: `#fffbeb` - Very light amber
- **Warning-100**: `#fef3c7` - Light amber
- **Warning-200**: `#fde68a` - Soft amber
- **Warning-300**: `#fcd34d` - Medium light amber
- **Warning-400**: `#fbbf24` - Medium amber
- **Warning-500**: `#f59e0b` - Main warning amber
- **Warning-600**: `#d97706` - Dark amber
- **Warning-700**: `#b45309` - Darker amber
- **Warning-800**: `#92400e` - Very dark amber
- **Warning-900**: `#78350f` - Deep amber
- **Warning-950**: `#451a03` - Darkest amber

### Neutral Colors (Gray-based)
- **Neutral-50**: `#fafafa` - Very light gray
- **Neutral-100**: `#f5f5f5` - Light gray
- **Neutral-200**: `#e5e5e5` - Soft gray
- **Neutral-300**: `#d4d4d4` - Medium light gray
- **Neutral-400**: `#a3a3a3` - Medium gray
- **Neutral-500**: `#737373` - Main neutral gray
- **Neutral-600**: `#525252` - Dark gray
- **Neutral-700**: `#404040` - Darker gray
- **Neutral-800**: `#262626` - Very dark gray
- **Neutral-900**: `#171717` - Deep gray
- **Neutral-950**: `#0a0a0a` - Darkest gray

## Usage Guidelines

### Primary Brand Elements
- **Main brand color**: `primary-500` (#0ea5e9)
- **Logo accent**: `primary-500` (#0ea5e9)
- **Primary buttons**: `primary-500` with hover states
- **Links**: `primary-600` with hover to `primary-700`

### Accent Elements
- **Secondary actions**: `accent-500` (#e879f9)
- **Highlighting**: `accent-400` (#f0abfc)
- **Interactive elements**: `accent-600` (#d946ef)

### Status Indicators
- **Success states**: `success-500` (#22c55e)
- **Warning states**: `warning-500` (#f59e0b)
- **Error states**: `destructive` (red variant)

### Text Colors
- **Primary text**: `neutral-900` (#171717)
- **Secondary text**: `neutral-600` (#525252)
- **Muted text**: `neutral-500` (#737373)
- **Light text on dark**: `white` or `neutral-100`

### Background Colors
- **Primary background**: `white`
- **Secondary background**: `neutral-50` (#fafafa)
- **Dark backgrounds**: `neutral-900` (#171717)
- **Card backgrounds**: `white` with subtle borders

## Gradient Patterns

### Primary Gradients
```css
.gradient-primary {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0ea5e9 50%, #0369a1 75%, #0ea5e9 100%);
  background-size: 300% 300%;
}
```

### Accent Gradients
```css
.gradient-accent {
  background: linear-gradient(135deg, #e879f9 0%, #d946ef 25%, #e879f9 50%, #c026d3 75%, #e879f9 100%);
  background-size: 300% 300%;
}
```

### Success Gradients
```css
.gradient-success {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 25%, #22c55e 50%, #15803d 75%, #22c55e 100%);
  background-size: 300% 300%;
}
```

### Warning Gradients
```css
.gradient-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 25%, #f59e0b 50%, #b45309 75%, #f59e0b 100%);
  background-size: 300% 300%;
}
```

## Animation Effects

### Shimmer Effects
```css
.shimmer-corporate {
  background: linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

.shimmer-accent {
  background: linear-gradient(90deg, transparent 0%, rgba(232, 121, 249, 0.1) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
```

### Border Effects
```css
.border-energy {
  background: linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.2) 25%, rgba(14, 165, 233, 0.6) 50%, rgba(14, 165, 233, 0.2) 75%, transparent 100%);
  background-size: 250% 100%;
  animation: border-flow 3s linear infinite;
}
```

## Implementation Notes

### Components Updated
1. **HeroSection**: Unified background gradients and button colors
2. **ProductFeatureSection**: Consistent feature card colors and icons
3. **ProjectsSection**: Unified project theme colors
4. **ProjectCard**: Consistent gradient mappings
5. **FooterNew**: Updated logo and link colors
6. **VentureStudioSection**: Unified decorative elements
7. **Navbar**: Consistent border and glow effects

### Key Changes Made
- Replaced various blue shades with unified `primary` colors
- Standardized accent colors to use `accent` palette
- Unified success/warning colors across components
- Replaced generic gray colors with `neutral` palette
- Updated all gradient patterns to use consistent color stops
- Standardized animation effects with unified color references

### Benefits
- **Consistency**: All components now use the same color system
- **Maintainability**: Easy to update colors globally
- **Brand Identity**: Strong, cohesive visual identity
- **Accessibility**: Proper contrast ratios maintained
- **Scalability**: Easy to extend with new components

## Future Considerations
- Consider adding dark mode variants
- Explore additional accent colors for specific use cases
- Maintain color contrast ratios for accessibility
- Document any new color additions in this system 