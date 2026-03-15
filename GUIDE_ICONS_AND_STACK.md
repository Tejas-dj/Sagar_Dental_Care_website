# Project Guide: Icons & Tech Stack

## 1. Where are the icons stored?
The icons are imported from the **`lucide-react`** library (e.g., `import { Sparkles } from 'lucide-react'`). 
They are not stored as image files in your project.

## 2. How to add custom icons?
**Option A: Create a React Component (Recommended)**
1. Create a file in `src/components/icons/` (e.g., `MyIcon.tsx`).
2. Paste this template:
   ```tsx
   import React from 'react';
   export const MyIcon = ({ size = 24, className, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
       {/* PASTE SVG PATH HERE */}
     </svg>
   );
   ```
3. Use it: `<MyIcon size={40} />`.

**Option B: Image Files**
1. Save `.svg` or `.png` in `public/`.
2. Use `<Image src="/icon.png" ... />`.

## 3. Technology Stack (For React Bits)
- **Framework**: Next.js 15+ (App Router)
- **Language**: **TypeScript** (`.tsx`)
- **Styling**: **CSS Modules** (`.module.css`)
  - ⚠️ **Tailwind is NOT enabled.** Use standard CSS.
  - If copying React Bits code, choose the **CSS** option.

**Existing Icons:** See `src/data/treatments.tsx` for usage examples.
