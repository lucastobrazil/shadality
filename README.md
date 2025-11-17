# Shadality

A component library built with shadcn/ui and customized for the Vitality design system.

## Features

- Built on top of shadcn/ui components
- Customized with Vitality design tokens:
  - **Primary Color**: Cyan (HSL 187, 100%, 28%)
  - **Background**: Light Gray (HSL 291, 2%, 99%)
  - **Border Radius**: 8px
  - **System Font Stack** for native look
  - Custom spacing scale
- Responsive 3-column grid layout
- Fully accessible components built on Radix UI primitives

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
pnpm dev
```

### Build

```bash
# Build for production
npm run build
# or
pnpm build
```

## Components

The library includes the following components:

- **Button** - Multiple variants (default, secondary, destructive, outline, ghost, link)
- **Input** - Text input field
- **Textarea** - Multi-line text input
- **Checkbox** - Multiple selection
- **Radio Group** - Single selection
- **Switch** - Toggle control
- **Select** - Dropdown selection
- **Slider** - Range selection
- **Progress** - Progress indicator
- **Badge** - Status and category labels
- **Tabs** - Content organization
- **Separator** - Visual divider
- **Toast** - Notifications
- **Card** - Content container

## Design Customizations

All components follow the Vitality design system:

- **Active Button State**: Subtle 0.5px translateY on press
- **Button Sizing**: Custom padding with no fixed heights
- **Button Line Height**: 1.85em for optimal text spacing
- **Focus Rings**: Cyan color matching primary
- **Content Wrapping**: Flex-wrap enabled for responsive behavior

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- shadcn/ui

## License

MIT
