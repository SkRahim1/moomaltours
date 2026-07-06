# Moomal Tours - Luxury Portal Documentation
### Client & Administrator Guide

Welcome to the official documentation for the **Moomal Tours** web portal. This document details the high-performance architecture, curated features, visual styling systems, and SEO standards built to position Moomal Tours as Jaisalmer's premier luxury desert expedition specialist.

---

## 1. High-Performance SPA Architecture & Routing

The portal is engineered as a **Single Page Application (SPA)** utilizing a custom client-side hash routing system in [App.jsx](file:///C:/Renvix/products/Moomaltours/src/App.jsx). 

### Key Architectural Strengths:
* **Instant Transitions**: Eliminates page refreshes. Transitioning between pages or detail slides happens instantly, resulting in zero friction for users.
* **Bookmarkable Clean URLs**: Implements hash-based paths (e.g., `#/packages/honeymoon`, `#/experiences/dune-bashing`, `#/build-your-tour`) allowing visitors to bookmark, share, and refresh specific views directly.
* **Scroll Management**: The router automatically scrolls the window to the top (`window.scrollTo(0, 0)`) on page transitions. When a local anchor (like `#itineraries`) is selected, it intercept-routes the user back to the homepage and scrolls smoothly down to the targeted block.

---

## 2. Interactive Custom Trip Builder (Wizard)

Designed to optimize luxury leads, the **Custom Trip Builder** ([BuildTourWizard.jsx](file:///C:/Renvix/products/Moomaltours/src/components/BuildTourWizard.jsx)) lets users tailor their ideal desert itinerary:
* **Multi-Step Funnel**: Users select travel dates, group size, accommodation preferences (Luxury Swiss Tents vs. Premium AC Cottages), preferred travel vibes, and individual desert activities.
* **Live Blueprint Summary**: A digital receipt sidebar dynamically compiles their choices as they navigate the wizard.
* **Direct Lead Generation**: Upon completion, the wizard packages the user's custom selections into an organized, pre-formatted WhatsApp text and opens WhatsApp directly to send the query.

---

## 3. Curated Experience Hubs & Detailed Landing Pages

The portal features dedicated hub views that expand into beautiful, immersive detail templates:
1. **Tour Packages Hub** (`#/packages`):
   * Curated custom itineraries for **Couples**, **Honeymoons**, **Families**, and **Groups / Friends**.
   * Outlines a complete **3-Day Jaisalmer Itinerary** (Day 1: Arrival & Haveli Sightseeing, Day 2: Sam Sand Dunes Caravan Safari & Cultural Camp Fire, Day 3: Desert Sunrise & Departure).
2. **Desert Experiences Hub** (`#/experiences`):
   * Highlights **18 signature desert activities** (e.g., Private Candlelight Dunes Dinner, Parasailing, Drone Cinematic Videography, Heritage Food Walks).
   * Detailed slides show inclusions, durations, and direct booking CTA links.
3. **Royal Desert Experience** (`#/signature-experience`):
   * Showcase page for the flagship VIP overnight dune stay, complete with private musician recitals, Kalbelia dancer performances, and dedicated chefs.
4. **Travel Blog Hub** (`#/blog`):
   * An educational system loaded with local travel tips, camping advice, and itineraries.

---

## 4. Search Engine Optimization (SEO) & Schema Suite

Automatically optimized to capture search crawler indexability and high-intent organic keywords:

### Dynamic Metadata & Title Management:
A custom metadata controller runs on route changes:
* **Dynamic Titles**: Page headers shift automatically (e.g., `Couple Package Jaisalmer | Luxury 3-Day Itinerary | Moomal Tours`).
* **Compelling Meta Descriptions**: Injects custom description tags to match targeted search results and optimize click-through rates.

### JSON-LD Structured Schema Markup:
Injects machine-readable metadata scripts directly into the `<head>` of the document upon navigation:
* **AggregateOffer / Product**: Applied to Tour Packages, specifying price ranges and currencies.
* **TouristTrip / Event**: Applied to Desert Experiences to maximize visibility in search engines.
* **LocalBusiness Schema**: Injected on the Contact page, registering office coordinates, phone helplines, support emails, and operating licenses.

### Search Crawling Assets:
* **`sitemap.xml`**: Pre-loaded in the public directory to map out all active hash routing links for Google and Bing search indexers.

---

## 5. Modern Luxury Branding & Visual Design System

The visual theme is defined in [index.css](file:///C:/Renvix/products/Moomaltours/src/index.css) to enforce a high-end, premium aesthetic:
* **Harmonious Color Palette**:
  * Primary Accent: Sand Gold (`#C5A059`)
  * Secondary Contrast: Dark Charcoal (`#1C1A17`)
  * Coral Action Highlight: (`#FF4B3A` / `#E83F2F`)
  * Neutral Ground: Warm Cream (`#FCFBF9`)
* **Elegant Serif Typography**: Uses modern typography pairings (Playfair Display and Outfit) from Google Fonts instead of default browser lettering.
* **Micro-Animations**:
  * **Link Underlines**: Desktop menu links feature sliding golden underlines (`::after` anchors) that expand smoothly on hover.
  * **WhatsApp Floating Button**: An infinite wiggling scale-and-rotate animation (`whatsapp-waving`) draws eyes to the booking widget without cluttering screen space. It automatically pauses on hover.

---

## 6. Mobile-First Optimization & Responsiveness

With over 85% of luxury bookings originating on mobile devices, the portal is fully optimized for mobile:
* **Compact Slide-In Menu Portal**: A custom full-screen slide menu drawer styled with sequential animation delays (`transition-delay`) that slide and fade links in one by one.
* **Concierge Desk Widget**: Integrates direct-dial phone and WhatsApp buttons into the footer of the mobile menu.
* **Overlap Protection**: All layout sections use responsive grid definitions (`grid-template-columns: repeat(auto-fill, ...)`), flexible line-wrapping, and automatic button-stacking (`flex-direction: column-reverse`) on viewports under 580px to prevent clipping.

---

## 7. Developer & Maintenance Commands

The application is built on Vite, React, and Lucide-React. It compiles down to highly compressed vanilla assets.

### Start Local Development Server:
```powershell
npm run dev
```

### Build Production Bundle:
```powershell
npm run build
```
*(Outputs highly optimized HTML, JS, and CSS files to the `dist/` directory, ready to be uploaded to any static web hosting provider like Firebase, Netlify, or AWS S3).*
