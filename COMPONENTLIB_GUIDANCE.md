# Component Library Demo Page Guidelines

This document provides instructions for constructing and maintaining the component showcase demo page.

## Page Structure

### Layout Configuration

- Use a **3-column grid layout** (`grid grid-cols-3 gap-8`)
- Each component should be displayed in its own Card
- Cards should be arranged in the grid to showcase all available components

### Container Setup

```tsx
<div className="container mx-auto p-8">
  <h1 className="text-4xl font-bold mb-8">shadcn/ui Components</h1>

  <div className="grid grid-cols-3 gap-8">{/* Component cards go here */}</div>
</div>
```

## Card Structure

Each component demonstration should follow this pattern:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Component Name</CardTitle>
    <CardDescription>Brief description of the component</CardDescription>
  </CardHeader>
  <CardContent>{/* Component examples go here */}</CardContent>
</Card>
```

### Card Header Guidelines

- **CardTitle**: Use the component name without numbers or prefixes (e.g., "Button", not "1. Button")
- **CardDescription**: Provide a concise one-line description of the component's purpose

## Content Wrapping

### Flex Containers

- All flex containers within CardContent should include `flex-wrap` class
- Pattern: `className="flex flex-wrap gap-2"` or `className="flex flex-wrap items-center gap-2"`
- This ensures content wraps responsively within cards

### Text Content

- Cards automatically handle text wrapping with `break-words`
- Long words and content will wrap appropriately

## Component Showcase Examples

### Multi-variant Components

For components with multiple variants (like Buttons), show all variants:

```tsx
<CardContent className="flex flex-wrap gap-2">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</CardContent>
```

### Form Components

For form-related components, show typical usage with labels:

```tsx
<CardContent>
  <Label htmlFor="field-id">Label Text</Label>
  <Input id="field-id" placeholder="Placeholder text..." />
</CardContent>
```

### Interactive Components

For components requiring state management, define state in the App component:

```tsx
function App() {
  const [progress, setProgress] = useState(33)
  const [sliderValue, setSliderValue] = useState([50])
  // ... other state
```

### Complex Components

For complex components like Tabs, Accordion, or Dialog, show complete working examples:

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for tab 1</TabsContent>
  <TabsContent value="tab2">Content for tab 2</TabsContent>
</Tabs>
```

## Import Organization

### Group Imports by Component

Keep imports organized by component type:

```tsx
// State management
import { useState } from "react";

// Individual components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Multi-part components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icons
import { ChevronDown, X } from "lucide-react";
```

## Special Components

### Toast/Toaster

Toast requires additional setup:

1. Import both `useToast` hook and `Toaster` component
2. Initialize the toast hook in the component
3. Place `<Toaster />` at the end of the App return, outside the grid
4. Trigger toasts with button clicks

```tsx
function App() {
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-8">
      {/* ... grid content */}
      <Toaster />
    </div>
  );
}
```

### Provider Components

Components like Tooltip require providers:

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip content</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Adding New Components

When adding a new component to the showcase:

1. **Create the component file** in `src/components/ui/`
2. **Add the import** to App.tsx in appropriate section
3. **Create a Card** following the standard structure
4. **Add representative examples** showing key variants or use cases
5. **Add flex-wrap** to any flex containers
6. **Test responsive behavior** to ensure content wraps properly

## Component Categories

Organize components logically in the grid:

- **Form Controls**: Button, Input, Checkbox, Radio, Select, Switch, Slider, Textarea
- **Data Display**: Badge, Avatar, Progress, Table, Skeleton
- **Layout**: Card, Separator, Tabs, Accordion
- **Navigation**: Breadcrumb, Dropdown Menu
- **Feedback**: Dialog, Alert Dialog, Toast, Tooltip, Popover
- **Other**: Toggle

## Maintenance

### Keeping Components Updated

- When shadcn/ui components are updated, update the corresponding files
- Ensure all new variants are showcased
- Test all interactive examples work correctly

### Consistency Checks

- All CardTitles should be component names without numbers
- All flex containers should have flex-wrap
- All components should have meaningful descriptions
- Interactive examples should work without errors

## File Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── [component].tsx
│       └── ...
├── lib/
│   └── utils.ts
└── App.tsx
```

## Best Practices

1. **Show, Don't Tell**: Demonstrate functionality visually rather than with text
2. **Keep Examples Simple**: Focus on core functionality, not edge cases
3. **Consistent Spacing**: Use gap-2, gap-4, or gap-8 for spacing
4. **Responsive First**: Always consider how components appear at different screen sizes
5. **Accessible Examples**: Include proper labels, IDs, and ARIA attributes where needed
