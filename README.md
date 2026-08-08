# NexKripa IT INDIA

A responsive, animated multi-page digital agency website built from scratch in Next.js, inspired by the interaction patterns of the reference agency website shared by the client.

## Pages
- Home
- About
- Portfolio
- Services
- Clientele
- Contact / 3-step project enquiry wizard

## Features
- Responsive desktop, tablet and mobile layouts
- Sticky glass navigation
- Full-screen animated mobile menu
- Motion for React reveal animations
- Animated hero shapes and cursor glow
- Infinite scrolling marquee
- Interactive statement rows and service cards
- Responsive portfolio grid
- Multi-step service selection / enquiry flow
- Reduced-motion accessibility support

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Before production
The project enquiry form is currently a front-end demo. Connect the submit handler in `app/contact/page.js` to EmailJS, Formspree, Resend, or your own API route.

Replace concept portfolio entries and clientele placeholders with verified NexKripa work and testimonials as they become available.

## Runtime
Use a current Node.js 20+ release. The project is pinned to Next.js 16.2.11 (Active LTS security patch line as of July 2026).

## Home hero update (video-reference style)
The home page now starts with a full-screen cinematic monochrome slider inspired by the supplied reference video:
- Auto-rotating YES! WE ARE LOUD / AMAZING / DARING / BOLD / CREATORS headlines
- Red/pink accent word
- Glitch-strip transition between slides
- Film grain and dark cinematic overlays
- Minimal home navigation (NexKripa branding + hamburger)
- Responsive desktop/tablet/mobile treatment

### Replace the placeholder hero art
For the best brand result, replace `public/hero/scene-1.jpg` through `scene-5.jpg` with your own NexKripa team, office, project, or event images. Keep the same names and preferably use 16:9 images at 1600x900 or larger.
