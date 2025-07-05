// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationProps extends BaseComponentProps {
  items?: NavigationItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

// Hero section types
export interface HeroSectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// Page layout types
export interface PageLayoutProps extends BaseComponentProps {
  showNavigation?: boolean;
  backgroundColor?: string;
}

// Event/Speaker types for future use
export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface EventSchedule {
  id: string;
  time: string;
  title: string;
  speaker?: Speaker;
  duration: number;
  description?: string;
}

// Theme types
export type ColorScheme = 'light' | 'dark';
export type AnimationSpeed = 'slow' | 'normal' | 'fast';
