# 🌌 Cosmic Portfolio

[![CI](https://github.com/AzimjonKamiljanov/Cosmic_portifolio/actions/workflows/ci.yml/badge.svg)](https://github.com/AzimjonKamiljanov/Cosmic_portifolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-v0.184.0-white?logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A stunning, flagship-grade portfolio showcasing modern web capabilities through an interactive 3D solar system. Built to demonstrate proficiency in 3D graphics, performance optimization, and modern React architecture.

[**Live Demo**](https://your-demo-link-here.vercel.app/) (Replace with actual link)

## ✨ Executive Highlights

- 🪐 **Interactive 3D Solar System:** Five dynamic orbital planets representing distinct projects, meticulously built with React Three Fiber.
- ⚡ **Optimized Performance:** Maintains silky 60+ FPS. Utilizes strict geometry and material memoization alongside rigorous disposal routines to prevent memory leaks and minimize draw calls.
- ⭐ **5000+ Star Particles:** A highly immersive starfield featuring dynamic depth parallax and calculated orbital rotations.
- 🚀 **Smooth Animations:** Framer Motion-powered page transitions paired with GSAP effects for fluid, cinematic UX.
- 📱 **Fully Responsive & Accessible:** Touched-optimized interactions for mobile, and enhanced keyboard accessibility for intuitive 3D scene navigation.
- 🛡️ **Production-Ready Standards:** Includes a comprehensive CI pipeline (GitHub Actions), strict TypeScript validation (no `any`), robust error boundaries, and comprehensive unit tests.

## 🛠️ Architecture & Tech Stack

The stack was chosen to provide maximum visual impact without sacrificing modern web standards or performance.

| Technology | Purpose | Rationale |
|---|---|---|
| **Next.js (App Router)** | Framework | Offers seamless SSR/SSG capabilities, built-in optimizations, and a robust routing system. |
| **TypeScript** | Type Safety | Enforces strict static typing, catching potential runtime errors early and vastly improving DX. |
| **React Three Fiber / Three.js** | 3D Graphics Engine | Declarative 3D rendering in React, allowing for complex, performant, and interactive space scenes. |
| **Framer Motion & GSAP** | Animations | Provides enterprise-grade spring animations and complex timelines for UI elements. |
| **Zustand** | State Management | A minimalist, highly performant state manager perfect for handling UI triggers across the 3D canvas and DOM. |
| **Tailwind CSS** | Styling | Utility-first CSS for rapid, maintainable, and responsive component styling. |
| **Vitest & Testing Library** | Unit Testing | Fast, modern testing framework for verifying core logic and state. |

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AzimjonKamiljanov/Cosmic_portifolio.git
   cd Cosmic_portifolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   ```bash
   cp .env.example .env.local
   ```
   *(Edit `.env.local` to include your specific configurations if needed)*

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📦 Build & CI/CD

To verify the production build locally:

```bash
npm run build
npm start
```

### Continuous Integration
This repository is configured with a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically runs on PRs and pushes to `main`. The pipeline enforces:
- ESLint checks
- Strict TypeScript type-checking
- Unit tests via Vitest

## 🌐 Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAzimjonKamiljanov%2FCosmic_portifolio)

Or deploy via CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Repository Structure

```
src/
├── app/                  # Next.js App Router (Layouts, Pages, Error Boundaries)
├── components/           # React Components
│   ├── 3d/               # Three.js / R3F Canvas Components (Highly Optimized)
│   └── ...               # UI Components (Hero, Nav, Modals, etc.)
├── store/                # Zustand State Management
├── styles/               # Global CSS & Tailwind Directives
└── __tests__/            # Unit Tests & Setup
```

## 📄 License

MIT License - feel free to draw inspiration for your own portfolio!
