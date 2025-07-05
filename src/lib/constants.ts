// Site configuration
export const SITE_CONFIG = {
  name: 'TEDxChirec',
  title: 'TEDxChirec - Fail Forward',
  description: 'Ideas that challenge our perception of reality.',
  url: 'https://tedxchirec.com', // Update with actual domain
  ogImage: '/og-image.jpg', // Add OG image to public folder
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Tickets', href: '/tickets' },
];

// Theme colors
export const COLORS = {
  primary: {
    red: '#EF4444', // red-500
    darkRed: '#DC2626', // red-600
  },
  neutral: {
    black: '#000000',
    darkGray: '#1F1F1F',
    gray: '#6B7280',
    lightGray: '#D1D5DB',
    white: '#FFFFFF',
  },
} as const;

// Animation durations
export const ANIMATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
