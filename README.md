# Trabahanap (Prototype)

Trabahanap is a friendly, modern job‑matching prototype that helps jobseekers find roles that fit their skills, goals, and lifestyle, and enables employers to reach relevant candidates.

> Important: This repository is a working prototype. Features, design, content, and data structures are subject to change and will be modified if and when the application moves toward a public launch.

## Features
- Animated, responsive landing page with engaging hero section
- Stats and impact highlights
- App showcase section with product previews
- Timeline of how the platform works
- Testimonial carousel
- Dark/light theme toggle
- Client-side routing for `Home`, `About`, `Jobs`, and `Contacts`

## Tech Stack
- React (with React Router)
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- ESLint (project linting)

## Getting Started
Prerequisites: Node.js (LTS recommended) and npm.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Project Structure (high level)
- `src/` – App source code
  - `components/` – Page components (`Home`, `About`, `Jobs`, `Contacts`) and feature sections (e.g., `home/`)
  - `reusable/` – Shared UI (e.g., `Navbar`, `Footer`, `Button`)
  - `assets/` – Images and static assets
- `public/` – Static public assets
- `dist/` – Production build output (after `npm run build`)

## Routes
- `/` – Home
- `/about` – About
- `/jobs` – Jobs
- `/contacts` – Contacts

## Prototype Disclaimer
This project is an early‑stage prototype intended for demonstration and exploration. It may include placeholder content and non‑final implementations. Scope, architecture, and UI/UX are expected to evolve and will be modified if the application proceeds to launch.

## License
All rights reserved. This codebase is not licensed for public reuse unless explicitly stated otherwise.
