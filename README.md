# Sakender Portfolio — Next.js + TypeScript + Tailwind

## Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS

## Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm run start
```

## Structure
```
app/
  layout.tsx       # root layout, metadata/SEO
  page.tsx          # composes all sections
  globals.css        # tailwind + fade-up animation
components/
  Navbar.tsx          # sticky nav, mobile toggle
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  Research.tsx        # Research / Publications
  Contact.tsx
  Footer.tsx
  FadeUp.tsx           # reusable scroll-reveal wrapper
lib/
  data.ts              # typed content (skills, projects, publications, experience)
```

## Before deploying
Update the placeholder links in `components/Contact.tsx`:
- Email
- GitHub URL
- LinkedIn URL

And `metadataBase` in `app/layout.tsx` to your real domain.
