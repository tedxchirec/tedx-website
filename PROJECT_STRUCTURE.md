# Project Structure Documentation

This document outlines the organization and structure of the TEDxChirec website codebase.

## 🏗️ Overall Architecture

The project follows a modular, component-based architecture with clear separation of concerns:

```
tedx-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # Global styles and imports
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (contains home-specific logic)
│   │   ├── about/             # About page
│   │   │   └── page.tsx
│   │   ├── speakers/          # Speakers page
│   │   │   └── page.tsx
│   │   ├── schedule/          # Schedule page
│   │   │   └── page.tsx
│   │   └── tickets/           # Tickets page
│   │       └── page.tsx
│   ├── components/            # Reusable React components only
│   │   ├── index.ts          # Component exports
│   │   ├── layout/           # Layout components (navbar, footer)
│   │   └── ui/               # Reusable UI components
│   ├── lib/                   # Utility functions and constants
│   │   ├── constants.ts      # Site configuration and constants
│   │   └── utils.ts          # Helper functions
│   ├── styles/               # CSS and styling files
│   │   └── animations.css    # Custom animations
│   └── types/                # TypeScript type definitions
│       └── index.ts          # Common types and interfaces
├── public/                    # Static assets
└── config files              # ESLint, TypeScript, Tailwind, etc.
```

## 📁 Directory Breakdown

### `/src/app` - Next.js Pages
- **Purpose**: Contains all route-based pages using Next.js App Router
- **Structure**: Each directory represents a route, each contains page-specific logic
- **Guidelines**: Keep page logic in the page files, use components for reusable elements

### `/src/components` - Reusable React Components
- **Purpose**: Only truly reusable components that can be shared across pages
- **Organization**:
  - `layout/`: Navigation, footers, page wrappers - elements that appear on multiple pages
  - `ui/`: Generic, reusable UI elements (buttons, hero sections, cards, modals)
- **Guidelines**: 
  - Components must be reusable across multiple pages
  - One component per file
  - Use TypeScript interfaces
  - Accept `className` prop for styling flexibility

### `/src/lib` - Utilities and Configuration
- **Purpose**: Helper functions, constants, and shared logic
- **Files**:
  - `constants.ts`: Site configuration, navigation items, colors
  - `utils.ts`: Helper functions (formatting, DOM manipulation, etc.)

### `/src/styles` - Styling
- **Purpose**: CSS files and styling utilities
- **Files**:
  - `animations.css`: Custom CSS animations and keyframes

### `/src/types` - TypeScript Definitions
- **Purpose**: Shared TypeScript interfaces and types
- **Usage**: Import types across components for consistency

## 🎯 Key Benefits of This Structure

### 1. **Scalability**
- Easy to add new pages by creating new directories in `/app`
- Component organization by feature prevents bloated directories
- Clear separation allows multiple developers to work simultaneously

### 2. **Maintainability**
- Components are modular and reusable
- Consistent typing with TypeScript
- Clear naming conventions and organization

### 3. **Developer Experience**
- Barrel exports (`index.ts`) for clean imports
- Consistent component structure and props
- Easy to locate and modify specific features

### 4. **Collaboration**
- Each page/feature can be worked on independently
- Component isolation reduces merge conflicts
- Clear documentation and structure for new team members

## 🔧 Development Guidelines

### Adding New Pages
1. Create directory in `/src/app/[page-name]/`
2. Add `page.tsx` with the page component and page-specific logic
3. Use existing reusable components from `/src/components/`
4. Create new components in `/src/components/ui/` only if they'll be reused
5. Update navigation in `constants.ts` if needed

### Creating Components
1. Only create components that will be reused across multiple pages
2. Use TypeScript with proper interfaces
3. Include `className` prop for styling flexibility
4. Follow naming convention: `ComponentName.tsx`
5. Export from appropriate `index.ts` file

### Styling
1. Use Tailwind CSS classes for styling
2. Custom animations go in `/src/styles/animations.css`
3. Constants for colors/spacing in `/src/lib/constants.ts`

### State Management
- Start with React's built-in state (useState, useContext)
- Add Zustand or Redux Toolkit when global state is needed
- Keep component-specific state local

## 🚀 Future Enhancements

### Planned Additions
- **Components**: Speaker cards, schedule timeline, ticket purchase flow
- **Features**: Contact forms, newsletter signup, social media integration
- **Tooling**: Storybook for component documentation
- **Testing**: Jest and React Testing Library setup
- **Performance**: Image optimization and lazy loading

### Recommended Structure Expansions
```
src/
├── components/
│   ├── shared/           # Cross-page shared components
│   ├── forms/            # Form components and validation
│   └── sections/         # Reusable page sections
├── hooks/                # Custom React hooks
├── context/              # React Context providers
├── services/             # API calls and external services
└── utils/
    ├── api.ts           # API utilities
    ├── validation.ts    # Form validation helpers
    └── constants/       # Split constants by domain
```

## 📝 Component Example

```typescript
// src/components/speakers/SpeakerCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import type { Speaker } from '@/types';

interface SpeakerCardProps {
  speaker: Speaker;
  className?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  speaker, 
  className = '' 
}) => {
  return (
    <div className={`bg-gray-900 rounded-lg p-6 ${className}`}>
      {speaker.imageUrl && (
        <Image
          src={speaker.imageUrl}
          alt={speaker.name}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
      <p className="text-red-500 mb-2">{speaker.title}</p>
      <p className="text-gray-300 text-sm">{speaker.bio}</p>
    </div>
  );
};

export default SpeakerCard;
```

This structure provides a solid foundation for building a maintainable, scalable TEDx website that can grow with your needs and team.