# 🌌 Cosmic Portfolio - Azimjon Kamiljanov

A stunning cosmic/space-themed portfolio website built with Next.js, Three.js, and Framer Motion.

## ✨ Features

- 🪐 **Interactive 3D Solar System** — Five orbital planets representing projects, built with React Three Fiber
- ⭐ **5000+ Star Particles** — Dynamic starfield with depth parallax
- 🚀 **Smooth Animations** — Framer Motion page transitions and GSAP effects
- 🎨 **Cosmic Design** — Pure black background with neon cyan, electric blue, and purple accents
- 📱 **Fully Responsive** — Works on all screen sizes
- ⚡ **Next.js** — App Router, TypeScript, optimized performance

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Framework (App Router) |
| TypeScript | Type Safety |
| React Three Fiber | 3D Rendering |
| Three.js | 3D Graphics Engine |
| @react-three/drei | Three.js Helpers |
| Framer Motion | React Animations |
| GSAP | Advanced Animations |
| Zustand | State Management |
| Tailwind CSS | Styling |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/AzimjonKamiljanov/Cosmic_portifolio.git
cd Cosmic_portifolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📦 Build

```bash
npm run build
npm start
```

## 🌐 Deploy on Vercel

The easiest way to deploy:

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy with zero configuration

Or use the CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx     # Three.js Canvas
│   │   ├── Starfield.tsx # Star particles
│   │   ├── Planet.tsx    # Interactive planets
│   │   ├── PlanetSystem.tsx # Orbital system
│   │   └── ParticleSystem.tsx # Cosmic dust
│   ├── Navigation.tsx    # Fixed navbar
│   ├── Hero.tsx          # Hero section
│   ├── ProjectsSection.tsx # Projects grid
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills cards
│   ├── Contact.tsx       # Contact form
│   └── ProjectModal.tsx  # Project overlay
├── store/
│   └── portfolioStore.ts # Zustand state
└── styles/
    └── globals.css       # Global styles
```

## 📄 License

MIT License - feel free to use for your own portfolio!
