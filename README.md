<div align="center">

# 🦷 Sagar Dental Care — Website

**A premium, animation-rich web experience for a dental clinic with 27+ years of excellence.**

Built with **Next.js 16** · **TypeScript** · **React 19** · **Framer Motion** · **GSAP**

[![Live](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)](https://sagardentalcare.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)]()
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)]()

</div>

---

## About the Project

Sagar Dental Care is a fully custom, production-grade website built for a real dental clinic based in India. The goal was to create a digital presence that matches the clinic's reputation — **27 years of trusted patient care** — with a web experience that feels premium, fast, and modern.

This isn't a template. Every component, animation, and layout decision was engineered from scratch with a **"Clinical Luxury"** design philosophy: clean enough to feel trustworthy, polished enough to feel high-end.

🌍 **Live Website → [sagardentalcare.com](https://sagardentalcare.com)**

---

## What Makes This Different

Most clinic websites look the same — stock photos, generic layouts, zero personality. This project pushes in the opposite direction:

- **Cinematic Hero Sections** — Immersive video backgrounds integrated into page headers, not just slapped on top.
- **Staggered Mobile Menu** — A custom-built `StaggeredMenu` component with orchestrated GSAP timelines for the open/close sequence.
- **Infinite Marquee Loops** — Smooth, performant scrolling loops for patient testimonials and partner logos.
- **Scroll-Linked Animations** — Parallax effects (`ScrollFloat`), text reveals (`SplitText`, `BlurText`), and viewport-triggered orchestrations via Framer Motion.
- **Spotlight Hover Effects** — Interactive light-follow effects on feature cards.
- **Micro-Interactions** — Click-to-copy clipboard for contact info with animated toast notifications.
- **Butter-Smooth Scrolling** — Powered by Lenis for that native-app feel.

---

## Tech Stack

| Layer             | Technology                                             |
| ----------------- | ------------------------------------------------------ |
| **Framework**     | Next.js 16+ (App Router)                               |
| **Language**      | TypeScript                                             |
| **UI Library**    | React 19                                               |
| **Styling**       | Vanilla CSS Modules + Token-based Global Design System |
| **Animation**     | Framer Motion + GSAP                                   |
| **Smooth Scroll** | Lenis                                                  |
| **Icons**         | Lucide React                                           |
| **Linting**       | ESLint                                                 |

---

## Architecture Decisions

A few engineering problems worth highlighting:

**Z-Index Wars** — The mobile staggered menu needed to layer correctly over sticky navigation elements (like category pills on the Treatments page) without breaking DOM flow. Solved with a strict, variable-based z-index scale (`--z-base`, `--z-sticky`, `--z-overlay`) applied globally through CSS custom properties.

**Animation Layering** — Standard CSS transitions felt flat for a premium brand. The solution was a dual-engine approach: GSAP handles intricate layout timelines (menu sequences, complex choreography), while Framer Motion owns scroll-linked orchestrations and component mount/unmount transitions.

**Responsive "Clinical Luxury"** — Maintaining the high-end aesthetic on small viewports where floating widgets and video elements would cluster. Addressed with aggressive `@media` query restructuring and CSS `clamp()` functions for fluid typography and layout scaling.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Run Locally

```bash
# Clone the repo
git clone https://github.com/Tejas-dj/Sagar_Dental_Care_website.git

# Navigate into the project
cd Sagar_Dental_Care_website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Project Structure

```
Sagar_Dental_Care_website/
├── src/              # Application source code (components, pages, styles)
├── public/           # Static assets
├── images/           # Image assets
├── docs/             # Project documentation
├── next.config.ts    # Next.js configuration
├── tsconfig.json     # TypeScript configuration
├── eslint.config.mjs # ESLint configuration
└── package.json      # Dependencies & scripts
```

---

## Codebase Composition

```
TypeScript  ██████████████████░░░░░░░░  65.1%
CSS         █████████░░░░░░░░░░░░░░░░░  33.5%
Python      ░░░░░░░░░░░░░░░░░░░░░░░░░   1.2%
JavaScript  ░░░░░░░░░░░░░░░░░░░░░░░░░   0.2%
```

---

## Roadmap

- [x] Core pages and layout system
- [x] Animation framework (Framer Motion + GSAP)
- [x] Mobile-first responsive design
- [x] Custom staggered navigation menu
- [x] Scroll-linked animations and parallax
- [x] Final content integration
- [x] Performance audit and Lighthouse optimization
- [x] Production deployment

---

## Author

**Tejas D. Jaiprakash**

AI & Machine Learning Engineering Student · BMSCE Bengaluru

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tejas-d-jaiprakash-084319356/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Tejas-dj)

---

<div align="center">

_Built from scratch as a real-world project — not a tutorial, not a template._

</div>
