# Vitality Design System Customizations

This document outlines all the customizations applied to the shadcn/ui component library to align with the Vitality design system.

## Component Source Priority

### Always Use shadcn/ui Components First

**CRITICAL**: When building UI, always prioritize using existing shadcn/ui components over creating custom implementations.

#### Before Creating Custom Components

1. **Check shadcn/ui documentation** at https://ui.shadcn.com/docs/components for available components
2. **Search the components/ui directory** to see what's already installed
3. **Install missing shadcn components** using the CLI rather than building from scratch
4. **Only create custom components** when shadcn/ui doesn't provide the needed functionality

#### Why Prioritize shadcn/ui

- **Consistency**: All components follow the same design patterns and styling
- **Accessibility**: Built on Radix UI primitives with WCAG compliance
- **Maintenance**: Centralized updates and bug fixes
- **Customization**: Easy to modify through Tailwind classes and CVA variants
- **Best Practices**: Battle-tested patterns and implementations

#### Component Installation Process

When you need a component that isn't in the showcase:

1. Visit https://ui.shadcn.com/docs/components/[component-name]
2. Copy the component code from the documentation
3. Create the file in `src/components/ui/[component-name].tsx`
4. Ensure all dependencies are in package.json (Radix UI primitives, icons, etc.)
5. Apply Vitality design system customizations if needed

#### Available shadcn/ui Components

Common components from shadcn/ui library include:

- Accordion, Alert, Alert Dialog, Avatar, Badge, Breadcrumb
- Button, Calendar, Card, Checkbox, Collapsible, Command
- Context Menu, Dialog, Dropdown Menu, Form, Hover Card
- Input, Label, Menubar, Navigation Menu, Popover, Progress
- Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton
- Slider, Switch, Table, Tabs, Textarea, Toast, Toggle
- Toggle Group, Tooltip, and more

#### When Custom Components Are Appropriate

Create custom components only when:

- The functionality doesn't exist in shadcn/ui
- You need to compose multiple shadcn components into a reusable pattern
- The custom component wraps shadcn components with specific business logic
- You're building domain-specific components (e.g., specialized data visualizations)

#### Extending shadcn Components

Prefer extending shadcn components over creating alternatives:

```tsx
// Good: Extending Button component
import { Button } from "@/components/ui/button";

export function IconButton({ icon, ...props }) {
  return (
    <Button variant="ghost" size="icon" {...props}>
      {icon}
    </Button>
  );
}

// Bad: Creating custom button from scratch
export function CustomButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded bg-blue-500">
      {children}
    </button>
  );
}
```

## Typography

### Font Family

- **System Font Stack** applied globally to `body` element
- Provides native-looking text across all platforms

## Color System

### Primary Color

- **Cyan**: `HSL(187, 100%, 28%)`
- Applied to primary actions, links, and focus states

### Background Color

- **Light Gray**: `HSL(291, 2%, 99%)`
- Provides subtle off-white background

### Focus Ring

- Uses **primary color** (cyan) for all focus states
- Applied to all input elements and interactive components

## Spacing Scale

Custom CSS variables for consistent spacing:

```css
--spacing-xs: 2px
--spacing-sm: 4px
--spacing-md: 8px
--spacing-lg: 16px
--spacing-xl: 24px
--spacing-xxl: 32px
```

## Border Radius

- **Default**: `8px` (`0.5rem`)
- Applied consistently across all components

## Button Customizations

### Sizing & Spacing

- **Horizontal padding**: Large (`px-4` for default, `px-3` for sm, `px-8` for lg)
- **Vertical padding**: Small (`py-1` for default, `py-0.5` for sm, `py-1.5` for lg)
- **Line height**: `1.85em`
- **Height**: No fixed heights set (removed `h-10`, `h-9`, `h-11`)

### Interaction States

- **Active state**: `transform: translateY(0.5px)` when pressed
- Creates subtle pressed-down effect

## Layout

### Component Showcase

- **Grid layout**: Responsive grid system
  - Mobile: 1 column
  - Medium screens: 2 columns
  - Large screens: 3 columns
- **Gap**: `8` (2rem)

### Content Wrapping

- **Cards**: `overflow-hidden` to contain content
- **Card content**: `break-words` for long text wrapping
- **Flex containers**: `flex-wrap` enabled for responsive content flow

## Implementation Notes

### CSS Variables (in `src/index.css`)

```css
:root {
  --primary: 187 100% 28%;
  --primary-foreground: 0 0% 100%;
  --background: 291 2% 99%;
  --ring: 187 100% 28%;
  --radius: 0.5rem;
  --spacing-xs: 2px;
  --spacing-sm: 4px;
  --spacing-md: 8px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-xxl: 32px;
}
```

### Button Component (in `src/components/ui/button.tsx`)

- Base classes include: `leading-[1.85em]`, `active:translate-y-[0.5px]`
- Size variants adjusted for custom padding
- No fixed height constraints

### Card Component (in `src/components/ui/card.tsx`)

- Root Card: `overflow-hidden` added
- CardContent: `break-words` added

## Design Principles

1. **Minimal custom styling** - Leverage Tailwind utilities and shadcn patterns
2. **Consistent spacing** - Use spacing scale for all spacing values
3. **Responsive by default** - Mobile-first approach with responsive breakpoints
4. **Accessible** - Maintain focus indicators and interactive states
5. **System-native feel** - System fonts and subtle styling choices
