# Sagar Dental Care

> A premium, high-performance web application serving as the digital storefront for a dental clinic with 27 years of clinical excellence. 

🌍 **Live Website:** [sagardentalcare.com](https://sagardentalcare.com)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Architecture & Technology Stack](#architecture--technology-stack)
- [Getting Started](#getting-started)
- [Performance & SEO](#performance--seo)
- [Author](#author)

---

## Project Overview

Sagar Dental Care is a comprehensive, production-ready web application built to deliver a seamless, app-like browsing experience. Designed with a strict focus on "Clinical Luxury," the application balances high-performance modern web technologies with a highly polished aesthetic.

This project was developed as a comprehensive architectural solution, demonstrating the integration of cutting-edge React frameworks, advanced animation libraries, and a scalable, token-based design system.

## Key Features

- **Dynamic Media Integration:** Immersive video backgrounds seamlessly integrated into page headers for an engaging first impression.
- **Advanced UI/UX Choreography:** 
  - Custom staggered mobile navigation systems.
  - Infinite marquee scrolling loops for partner logos and patient testimonials.
  - Parallax scrolling effects and interactive text-reveal animations.
- **Fluid Responsive Design:** A stringent mobile-first implementation ensuring pixel-perfect UI rendering across all device breakpoints.
- **Interactive Elements:** Click-to-copy clipboard functionality for contact information, integrated with accessible toast notifications.
- **Optimized Content Delivery:** Built on the Next.js App Router for statically generated pages, optimized asset loading, and superior Core Web Vitals.

## Architecture & Technology Stack

The application is built upon a modern, robust technology stack designed for scale, maintainability, and performance:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js (v14/v15+)](https://nextjs.org/) | App Router architecture for SSR/SSG and server components. |
| **Core UI** | [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) | Strongly typed, component-driven UI development. |
| **Styling** | CSS Modules | Vanilla Custom CSS Modules with a strict, token-based Global Design System. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) | Orchestrated page transitions, scroll-linked interactions, and timeline animations. |
| **Scroll Handling**| [Lenis](https://lenis.studiofreight.com/) | Liquid smooth scrolling implementation. |
| **Iconography** | [Lucide React](https://lucide.dev/) | Consistent, lightweight SVG icons. |

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local development environment:
- Node.js (v18.0.0 or higher)
- A package manager (npm, yarn, pnpm, or bun)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/sagar-dental-care.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd sagar-dental-care
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Performance & SEO

This project prioritizes search engine visibility and user experience metrics:
- **Semantic HTML5:** Enhances accessibility and machine readability.
- **Next.js Metadata API:** Dynamic generation of `title`, `meta` descriptions, and OpenGraph tags for rich social sharing.
- **Asset Optimization:** Automatic image optimization and lazy loading via `next/image`.
- **Z-Index Architecture:** A strict, variable-based z-index scale (`--z-base`, `--z-sticky`, `--z-overlay`) applied globally to prevent rendering conflicts and UI regressions.

## Author

**Tejas D. Jaiprakash**
- Artificial Intelligence & Machine Learning Engineering Student
- *Project Focus:* Bridging the gap between cutting-edge engineering and real-world business requirements through performant, scalable web solutions.

---
*This repository is maintained for portfolio and demonstration purposes. For inquiries, please review the contact information available on the live website.*
