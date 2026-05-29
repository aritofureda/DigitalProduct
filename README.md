<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/No_Backend-10b981?style=for-the-badge&logo=checkmarx&logoColor=white" alt="No Backend" />
<img src="https://img.shields.io/badge/No_Database-10b981?style=for-the-badge&logo=checkmarx&logoColor=white" alt="No Database" />

<br/>
<br/>

<h1>DigitalFlow — Landing Page</h1>

<p>A clean, minimal SaaS landing page. Frontend only — no backend, no database, no build step.</p>

<a href="#demo">View Demo</a> · <a href="#features">Features</a> · <a href="#structure">File Structure</a> · <a href="#getting-started">Getting Started</a>

</div>

---

## Overview

**DigitalFlow** is a fully static, production-quality landing page for a SaaS digital product platform. It is built with plain HTML, Tailwind CSS (via CDN), and vanilla JavaScript — no frameworks, no build tools, no server required.

> **This is a pure frontend project.** There is no backend server, no API, no database, and no authentication system. All content is hardcoded. Links and buttons are placeholder `href="#"` anchors.

---

## Demo

Open `index.html` directly in any modern browser — no local server needed.

```bash
# macOS
open digitalflow/index.html

# Linux
xdg-open digitalflow/index.html

# Windows
start digitalflow/index.html
```

Or serve it with any static file server:

```bash
# Python
python3 -m http.server 3000 --directory digitalflow

# Node.js (npx)
npx serve digitalflow
```

Then visit `http://localhost:3000`.

---

## Pages & Sections

The single `index.html` file contains the following sections in order:

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navigation** | Floating frosted-glass nav with logo, links, and mobile hamburger menu |
| 2 | **Hero** | Centered headline + split layout with product screenshot and animated stat cards |
| 3 | **Features** | 6-card grid showcasing platform capabilities with SVG icons |
| 4 | **Social Proof** | Logo strip, animated user count, and 3 testimonial cards |
| 5 | **Pricing** | 3-tier pricing (Free / Pro / Enterprise) with feature lists |
| 6 | **FAQ** | Accordion with 5 common questions |
| 7 | **CTA Banner** | Re-engagement call-to-action section |
| 8 | **Footer** | 4-column links, copyright, and social icons |

---

## File Structure

```
digitalflow/
├── index.html          # Main HTML — all markup and page structure
├── css/
│   └── style.css       # Custom styles: animations, glassmorphism, counters, FAQ
└── js/
    └── main.js         # Vanilla JS: counter animation, fade-up, FAQ, mobile nav
```

### Why separate files?

| File | Responsibility |
|------|---------------|
| `index.html` | Structure and content only — no inline styles or scripts |
| `css/style.css` | All custom CSS that Tailwind cannot handle: scroll animations, CSS custom properties, transition effects |
| `js/main.js` | All interactivity: IntersectionObserver, animated counters, FAQ accordion, mobile nav toggle |

---

## Tech Stack

| Technology | Usage | Version |
|-----------|-------|---------|
| **HTML5** | Page structure and semantics | — |
| **Tailwind CSS** | Utility-first styling | CDN (latest) |
| **Vanilla JavaScript** | Animations and interactivity | ES2020+ |
| **Google Fonts** | Plus Jakarta Sans typeface | CDN |
| **Unsplash** | Placeholder images | Remote URL |

> No npm, no webpack, no React, no build step. Drop the folder anywhere and open `index.html`.

---

## Animations

All animations are scroll-triggered via `IntersectionObserver` and respect `prefers-reduced-motion`.

| Animation | Trigger | Detail |
|-----------|---------|--------|
| **Number counters** | On scroll into view | Counts from `0` to target using `easeOutCubic` via `requestAnimationFrame` |
| **Stat bar fill** | On scroll into view | CSS width transitions from `0%` to target percentage |
| **Fade-up reveal** | On scroll into view | Sections fade in with upward translate |
| **Staggered cards** | On scroll into view | Feature cards offset with `.delay-1` / `.delay-2` classes |
| **Card hover lift** | On hover | `-4px translateY` + emerald drop shadow |
| **FAQ accordion** | On click | Smooth `max-height` expand/collapse |

---

## Design System

| Token | Value |
|-------|-------|
| **Font** | Plus Jakarta Sans (300–800) |
| **Primary color** | `#10b981` (Emerald 500) |
| **Text color** | `#0f172a` (Slate 900) |
| **Muted text** | `#475569` (Slate 600) |
| **Background** | `#ffffff` |
| **Border** | `#e2e8f0` (Slate 200) |
| **Border radius** | `1rem` (cards), `0.75rem` (buttons) |
| **Transition** | `200ms ease-out` |

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | Full |
| Firefox 88+ | Full |
| Safari 14+ | Full (with `-webkit-backdrop-filter` fallback) |
| Edge 90+ | Full |
| IE 11 | Not supported |

---

## Accessibility

- All SVG icons include `aria-hidden="true"`
- Images include descriptive `alt` text
- Interactive elements have visible focus states
- `prefers-reduced-motion` media query respected — all animations disabled when set
- Mobile nav button includes `aria-expanded` and `aria-controls` attributes
- Star ratings include `aria-label` for screen readers
- Color contrast meets WCAG 2.1 AA minimum (4.5:1) for all text

---

## Customization

### Change brand name

Search and replace `DigitalFlow` in `index.html`.

### Change accent color

In `index.html`, update the Tailwind config block:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#10b981', // replace with your color
          600: '#059669',
        }
      }
    }
  }
}
```

### Change counter targets

Each counter element uses `data-*` attributes:

```html
<span class="counter-num"
  data-target="50"        <!-- numeric target -->
  data-suffix="k+"        <!-- text appended after number -->
  data-duration="1800">   <!-- animation duration in ms -->
  0k+
</span>
```

### Change images

Replace the `src` URLs on `<img>` tags. All images currently use Unsplash remote URLs. For production, download and host locally.

---

## License

MIT — free to use, modify, and distribute.

---

<div align="center">
  <sub>Built with HTML · Tailwind CSS · Vanilla JS · No backend · No database</sub>
</div>
