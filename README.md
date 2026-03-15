# Sagar Dental Care

<div align="center">
  <h3>Modern, Fast, and Highly Interactive Dental Clinic Website</h3>
  <p>A premium web experience built for Sagar Dental Care featuring cutting-edge animations, responsive design, and an intuitive user interface.</p>
  <p>🌍 <strong>Live Website: <a href="https://sagardentalcare.com">sagardentalcare.com</a></strong></p>
</div>

---

## 🚀 Overview

**Sagar Dental Care** is a comprehensive, production-ready web application built to serve as the digital storefront for a dental clinic with 27 years of excellence. Designed with a strict focus on "Clinical Luxury," the application balances high-performance modern web technologies with a highly polished aesthetic.

This project was built from the ground up as a real-world freelance/portfolio project. It leverages the latest features of **Next.js**, advanced animation libraries like **Framer Motion** and **GSAP**, and a fully custom CSS Modules architecture to deliver a seamless, app-like browsing experience.

## ✨ Key Features

- **Dynamic Hero Sections**: Immersive video backgrounds integrated seamlessly into page headers.
- **Complex UI Animations**:
  - Custom `StaggeredMenu` for mobile navigation with staggered list animations.
  - Infinite marquee scrolling loops for logos and patient testimonials.
  - Parallax scrolling effects (`ScrollFloat`) and text reveal animations (`SplitText`, `BlurText`).
  - Interactive "Spotlight" hover effects on feature cards.
- **Responsive Design**: A flawless mobile-first implementation ensuring perfect UI rendering across all device breakpoints.
- **Modern Interactions**: Click-to-copy clipboard functionality for contact information complete with animated toast notifications.
- **SEO & Performance Optimized**: Built on Next.js App Router with statically generated pages and optimized asset loading.

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js (v16+)](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) & [React (v19)](https://react.dev/)
- **Styling**: Vanilla Custom CSS Modules with a strict, token-based Global Design System (`globals.css`).
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🧠 Challenges & Solutions

Developing this application presented several unique UI/UX challenges that required creative engineering:

1. **Complex Z-Index Management**:
   - _Challenge_: Ensuring the mobile `StaggeredMenu` layered correctly over sticky page navigation elements (like the Treatments page category pills) without breaking DOM flow.
   - _Solution_: Engineered a strict, variable-based z-index scale (`--z-base`, `--z-sticky`, `--z-overlay`) applied globally.

2. **Liquid Smooth Animations**:
   - _Challenge_: Standard CSS transitions felt rigid for a premium clinic website.
   - _Solution_: Combined GSAP for intricate layout timelines (like the Staggered Menu opening sequence) and Framer Motion for scroll-linked orchestrations and component mounts.

3. **Responsive Media Constraints**:
   - _Challenge_: Maintaining the "Clinical Luxury" aesthetic on small viewports where complex elements like the floating Google Ratings widget and floating videos would cluster.
   - _Solution_: Applied aggressive `@media` query restructuring and utilized CSS `clamp()` functions to fluidly scale typography and layout widths.

## 💻 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sagar-dental-care.git
   ```

2. Navigate into the directory and install dependencies:

   ```bash
   cd sagar-dental-care
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 👨‍💻 Author

**Tejas D. Jaiprakash**

- Artificial Intelligence & Machine Learning Engineering Student
- Passionate about bridging the gap between cutting-edge tech and real-world business needs.

_This project was developed as a real-world deliverable, utilizing AI-assisted workflows to accelerate development, implement complex animation mathematics, and refine architectural decisions._
