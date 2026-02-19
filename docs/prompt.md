# Role: Act as a Senior Frontend Architect and Award-Winning UI/UX Designer.

**Project: Create a complete, multi-page website structure for a dental clinic named "Sagar Dental Care".**

## Core Objectives:

### Visual Language:
 The design must be "Medical Modern" — highly trustworthy and clean, but with an immersive, creative edge. Use smooth micro-interactions, subtle animations, and high-end typography to distinguish it from generic templates.

### Responsiveness: 
The site must be fully responsive. It should not just "shrink" for mobile; it should adapt the UX (e.g., changing complex navigation bars to optimized mobile drawers).

### SEO & Performance: 
Use semantic HTML5, proper meta tags structure, and fast-loading practices.



## Functional Requirements:

### Tech Stack: 
refer to websitestack.md file for the tech stack.



## DESIGN GUIDELINES

### Colour palette:
USE WHAT U FELL WILL FIT THE THEME THE BEST 

### Ideas
1. Global Layout (app/layout.tsx & app/template.tsx)
Layout: Setup the html and body tags, font optimization (next/font), and the Navbar and Footer.
Template: Implement AnimatePresence here to handle page transitions. Wrap children in a motion.div that fades in (opacity: 0 -> 1) and slides up slightly (y: 20 -> 0).
Navbar (Sticky Glassmorphism):
Behavior: Transparent at the top of the page (scrollY = 0). Becomes bg-glass (frosted white) with a subtle shadow (shadow-sm) when scrolled down. Use a custom hook useScrollPosition to track this.
Links: to the other pages
Mobile: Hamburger menu that opens a full-screen AnimatePresence overlay with staggered link entrance.

2. Homepage (app/page.tsx)
Hero Section:
Background: Full-screen video loop (muted, plays inline). Placeholder: Use a gray div with text "Video Placeholder" if assets aren't available, but write the code for the <video> tag.
Foreground: Headline "The Future of Your Oral Health and Smile." Subhead with fade-up animation.
Trust Signal: A floating widget in the bottom-right corner showing "Google Rating: 4.9 ★.
Services Carousel (Mobile-First Strategy):
Desktop: A 3-column Grid (grid-cols-3 gap-8).
Mobile: A horizontal scroll-snap carousel. Use Tailwind classes: flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-4 p-4.
Cards: Glassmorphism effect. Hover effect lifts the card (y: -10) and reveals a gold border.

Tech Showcase (Parallax):
Use useScroll and useTransform from Framer Motion.
As the user scrolls, an image of a "bright white smile" should slowly scale up, accompanied by text explaining the benefits of a great smile or have some quote about a perfect smile.

3. Interactive Modules (Complex Components)
    A. The "Before/After" Slider (components/interactive/BeforeAfter.tsx)
        Props: beforeImage (string), afterImage (string).

        Implementation:
        Two absolute positioned images.
        Top image is masked using clip-path or a wrapper div with variable width.

        A central "Handle" bar that is draggable along the X-axis using Framer Motion's drag="x".

        Update the width of the top image based on the handle's position using useMotionValue and useTransform.

    

4. Text Reveal Animation (components/ui/TextReveal.tsx)
Create a reusable component that accepts a text string.

Split the text into words.

Use IntersectionObserver (via whileInView).

Stagger the entrance of each word by 0.05s so the sentence "flows" onto the screen like a typewriter or spoken word.



# WEBSITE STRUCTURE

### **Project: Sagar Dental Care — Site Architecture**

#### **1. GLOBAL LAYOUT** (`app/layout.tsx`)

* **Navigation (`components/layout/Navbar.tsx`):**
* **Desktop:** Logo (Left), Links (Center) with glasmorphishm sticky nav bar with links to the other pages.
* **Mobile:** Glassmorphism Bottom Bar or Hamburger Menu (as per your specific idea) with staggered animation entrance.


* **Footer (`components/layout/Footer.tsx`):**
* Quick Links, Social Icons, Location Map (Grayscale until hovered), Copyright.


* **Floating Elements:**
* **Scroll-to-Top:** Appears after 100vh scroll.

---

#### **2. HOME PAGE** (`app/page.tsx`)

* **Hero Section:**
* *Component:* Full-screen Video Background (muted, looping happy patients/clinic ambience).
* *Content:* "The Future of Your Oral Health." + Subhead + CTA ("Visit Us").


* **Trust Signals:**
* *Component:* Floating "Google Rating" Widget (4.9 ★) with slight bounce animation.


* **Introduction:**
* *Animation:* `TextReveal.tsx` component for the mission statement: "Dentistry redefined with precision and care."


* **Services Overview (The "Carousel"):**
* *Mobile:* Horizontal scroll-snap.
* *Desktop:* 3-column Grid with hover-lift and border colour reveal.


* **Smile Showcase (Parallax):**
* *Interaction:* Scroll-triggered scaling image of a perfect smile.
* *Content:* Focus on "Pain-free dentistry" and "Modern Tech."


* **Testimonial Slider:**
* *Design:* 2 rows of Glass cards sliding horizontally in opposite directions.


* **Final CTA:** "Ready to smile?" with a magnetic button effect.

---

#### **3. ABOUT US** (`app/about/page.tsx`)

**Part A: The Institution (Clinic Focus)**

* **Hero Section:**
* *Visual:* Static, cinematic wide shot of the clinic reception or exterior with a sophisticated dark overlay (`bg-black/40`).
* *Typography:* "Excellence in Every Smile."


* **Our Philosophy (The "Why"):**
* *Layout:* A clean row of 3 Core Values (e.g., "Compassion," "Advanced Tech," "Integrity").
* *Interaction:* Use `TextReveal.tsx` to animate the headings as the user scrolls down.

**Part B: Meet The Team (Scroll Section) refer to doctors.md** 

* *Transition:* A subtle section divider or background color shift (e.g., from white to a very light medical grey/blue) to signal a change in focus.


* **1. The Visionary (Dr. Sagar - Lead Doctor):**
* *Component:* `MainDoctorCard.tsx`
* *Layout:* Full-Width Horizontal Card (`w-full flex-row`).
* *Visuals:* Large, professional portrait (cutout or environmental shot).
* *Content:* Name in Huge Typography, Credentials in Accent color ("MDS - Prosthodontist"), Bio (4-5 lines), and an SVG Signature animation.


* **2. The Specialists (The Associates):**
* *Component:* `AssociateTeamGrid.tsx`
* *Layout:* 2x2 Grid (Mobile: 1 col, Tablet: 2x2).
* *Card Interaction:* **"The Information Reveal"**
    * *Default State:* High-quality portrait. Name/Degree visible in a bottom frosted glass bar.
    * *Hover State:* Image scales (1.05), dark gradient slides up, and a short specialty description fades in above the Name.
* *Tech:* `framer-motion` with `layoutId` or `whileHover` for buttery smooth transitions.


---

#### **4. TREATMENTS / SERVICES** (`app/treatments/page.tsx`)

* **Hero Section:**
    * **Visual:** Minimalist, typography-driven hero. "Comprehensive Care" in large, tracking-tight font.
    * **Interaction:** A subtle background particle effect (using `canvas` or a lightweight library) that responds to mouse movement, simulating "cleanliness" or "flow."
    * **Search/Filter:** A "Search Treatments" bar that instantly filters the cards below (e.g., typing "root" highlights Root Canal).

* **Layout Architecture:**
    * **Split Layout (Desktop):**
        * **Left (20%):** Sticky Vertical Navigation (Table of Contents).
        * **Right (80%):** The Scrollable Content Area (Categories + Cards).
    * **Mobile:** Sticky horizontal "Pill" scroll bar at the top (e.g., [General] [Cosmetic] [Restorative] [Surgical]).

---

**THE IMMERSIVE CATEGORY SECTIONS**
*Structure:* [Category Title] -> [Description] -> [Staggered Grid of Cards]

* **1. General & Preventive Care** (ID: `#general`)
    * **Heading Animation:** "General Dentistry" fades in with a parallax background text watermark (e.g., huge faint "PREVENTION" text moving slowly behind the header).
    * **Cards:**
        * **Routine Dental Examination:** The foundation of oral health.
        * **Children Dental Care:** Specialized, gentle care for young smiles.

* **2. Cosmetic Dentistry** (ID: `#cosmetic`)
    * **Heading Animation:** Gradient Text Effect (Gold to Teal) to signify "Premium/Beauty."
    * **Cards:**
        * **Smile Designing:** AI-assisted digital smile makeovers.
        * **Ceramic Veneers:** Ultra-thin custom shells for a perfect aesthetic.
        * **Tooth Whitening:** Professional brightening solutions.
        * **Cosmetic Dentistry:** General aesthetic enhancements.

* **3. Restorative & Rehabilitation** (ID: `#restorative`)
    * **Heading Animation:** Strong, solid typography to signify "Structure & Strength."
    * **Cards:**
        * **Full Mouth Rehabilitation:** Complete restoration of function and aesthetics.
        * **Crowns & Bridges:** Restoring damaged or missing teeth.
        * **Dentures:** Modern, comfortable prosthetic solutions.

* **4. Surgical & Advanced Treatments** (ID: `#surgical`)
    * **Heading Animation:** Clean, precise lines animating in to signify "Precision."
    * **Cards:**
        * **Dental Implants:** The gold standard for replacing missing teeth.
        * **Root Canal Treatment:** Pain-free preservation of natural teeth.
        * **Periodontal Treatment:** Advanced gum care and surgery.
        * **Laser Treatment:** Minimally invasive soft tissue procedures (Added).

* **5. Orthodontics** (ID: `#ortho`)
    * **Heading Animation:** Animated curved lines straightening out.
    * **Cards:**
        * **Orthodontic Treatment:** Braces and aligners for teeth alignment.

---

**THE "HOLOGRAPHIC" SERVICE CARD COMPONENT**
* **Component:** `ServiceCard.tsx`
* **Visual Style:**
    * **Glassmorphism:** White frosted glass background (`backdrop-blur-md`, `bg-white/70`).
    * **Iconography:** Animated Line Icons (Lottie files) that play once on hover.
* **Interactions (The "Award-Winning" Feel):**
    * **Entrance:** As the user scrolls to a category, the cards inside do not appear all at once. They use a **staggered fade-up** effect (Card 1 appears, 100ms later Card 2, etc.).
    * **Hover State:**
        1.  The card lifts (`y: -8px`).
        2.  A soft "glow" shadow appears in the clinic's accent color (Teal/Blue).
        3.  A "Learn More" arrow icon slides in from the left.
    * **Click:** Use `LayoutGroup` from Framer Motion. The card does not just link away; it expands momentarily to fill the screen (transition) before routing to the specific treatment page.
* **SEO Strategy:**
    * Each card is an `<h2>` or `<h3>` for semantic structure.
    * Contains a 1-sentence plain text summary for crawlers.

* *Note:* Each service card links to a dynamic detail page (`app/treatments/[slug]/page.tsx`) for SEO dominance.

#### **4a. SERVICE DETAIL PAGE** (`app/treatments/[slug]/page.tsx`)

* *Template for individual treatments (e.g., /treatments/dental-implants).*
* **Content:** What is it? Procedure steps, Recovery time.

---

#### **5. SMILE GALLERY** (`app/gallery/page.tsx`)

* **Hero:** "Transformations."
* **Filterable Grid:**
* Tags: [All] [Implants] [Veneers] [Whitening].
* *Interaction:* Layout animation (Framer Motion `layout` prop) when filtering.


* **Featured Transformations:**
* Large implementation of `BeforeAfter.tsx` with patient testimonials attached to the specific case.



---

#### **7. CONTACT & BOOKING** (`app/contact/page.tsx`)

* **Split Layout:**
* **Left:** Contact Info, Interactive Google Map (Custom styled to match color palette), Parking info.

