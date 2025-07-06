# Image Asset Management Guide

## 📁 Directory Structure

```
public/images/
├── about/              # About section images
├── speakers/           # Speaker photos and bios
├── venue/              # Venue and event photos
├── sponsors/           # Sponsor logos
├── icons/              # Custom icons and graphics
└── og/                 # Open Graph and social media images
```

## 🖼️ Image Guidelines

### File Naming Convention
- Use kebab-case: `speaker-john-doe.jpg`
- Include descriptive names: `venue-main-auditorium.jpg`
- Add size suffix if multiple sizes: `logo-large.png`, `logo-small.png`

### Recommended Formats & Sizes
- **Hero images**: 1920x1080px (16:9), WebP/JPEG
- **Speaker photos**: 400x400px (1:1), WebP/JPEG
- **Venue photos**: 1200x800px (3:2), WebP/JPEG
- **Logos**: SVG preferred, PNG fallback
- **Icons**: 24x24px, 32x32px, 48x48px (SVG)

### Optimization
- Compress images before uploading
- Use WebP format when possible
- Provide multiple sizes for responsive design
- Add alt text for accessibility

## 🚀 Usage in Components

### Basic Image Usage
```tsx
import Image from 'next/image';

// Static image
<Image
  src="/images/venue/main-hall.jpg"
  alt="TEDxChirec main auditorium"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Responsive Images
```tsx
<Image
  src="/images/speakers/john-doe.jpg"
  alt="John Doe - AI Researcher"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 📦 Free Image Hosting Options

### 1. Next.js Public Folder (Recommended)
- ✅ **Best for**: Static assets, logos, icons
- ✅ **Pros**: No external dependencies, optimized by Next.js
- ❌ **Cons**: Increases bundle size for large images

### 2. GitHub Repository
- ✅ **Best for**: Open source projects, backup storage
- ✅ **Pros**: Version controlled, free, reliable
- ❌ **Cons**: Not optimized for image delivery

### 3. Cloudinary (Free Tier)
- ✅ **Best for**: Dynamic image optimization
- ✅ **Pros**: Automatic optimization, transformations, CDN
- ❌ **Cons**: 25GB monthly limit on free tier

### 4. Vercel Image Optimization
- ✅ **Best for**: Images in public folder
- ✅ **Pros**: Automatic WebP conversion, responsive images
- ❌ **Cons**: Limited on free tier

## 📋 Current Image Needs

### Priority 1 (Immediate)
- [ ] TEDx venue photo (main auditorium)
- [ ] Event atmosphere photos
- [ ] TEDxChirec logo variations

### Priority 2 (Soon)
- [ ] Speaker headshots
- [ ] Sponsor logos
- [ ] Social media graphics

### Priority 3 (Later)
- [ ] Event photography from previous years
- [ ] Behind-the-scenes content
- [ ] Team photos

## 🔧 Implementation Notes

1. **Current Setup**: Using placeholder with instructions to add real images
2. **Next Steps**: Add your venue image to `/public/images/venue/`
3. **Component**: Uncomment the `<Image>` component in `AboutSection.tsx`
4. **Optimization**: Next.js will automatically optimize images served from `/public`

## 💡 Pro Tips

- Use `next/image` component for automatic optimization
- Add `priority` prop for above-the-fold images
- Use `placeholder="blur"` with `blurDataURL` for better UX
- Consider lazy loading for images below the fold
- Always provide meaningful alt text for accessibility
