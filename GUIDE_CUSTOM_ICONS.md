# How to Use Custom Icons

## 1. Where are the current icons stored?
The current icons (e.g., `Sparkles`, `Anchor`, `Ruler`) are **not image files** stored in your project folders. 
- They are imported from a library called **`lucide-react`** (inside `node_modules`).
- You use them like React components: `<Sparkles size={24} />`.

## 2. How can I add my own custom icons?
Yes, you can add custom SVG icons! The best way is to create a React component for each icon so it matches the style of the Lucide icons.

### Step 1: Get your SVG code
Open your SVG file in a text editor (or copy from Figma/Illustrator) and get the `<svg>...</svg>` code.

### Step 2: Create a component file
Create a new file, e.g., `src/components/icons/MyCustomIcon.tsx`:

```tsx
import React from 'react';

// This interface allows you to pass className, style, etc. to your icon
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MyCustomIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      {/* PASTE YOUR SVG PATHS HERE */}
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
};
```

### Step 3: Use it in your page
Now import and use it just like the others:

```tsx
import { MyCustomIcon } from '@/components/icons/MyCustomIcon';

// Inside your component:
<MyCustomIcon size={40} className="text-teal-500" />
```

### Alternative: Using Image Files (PNG/JPG/SVG)
If you prefer using files:
1. Save your icon image (e.g., `tooth-icon.png`) in the `public/` folder.
2. Use the Next.js `Image` component:

```tsx
import Image from 'next/image';

<Image 
  src="/tooth-icon.png" 
  alt="Tooth Icon" 
  width={40} 
  height={40} 
/>
```
*Note: This method is harder to style with CSS colors (e.g., changing color on hover).*
