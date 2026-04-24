import { create } from "zustand";

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  color: string;
  github: string;
  demo: string;
  textureUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "CosmicApp",
    description: "A full-stack web application with real-time features and collaborative tools",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#3B82F6", // Darker blue for cyber dark
    github: "#",
    demo: "#",
    textureUrl: "/textures/earth.jpg",
  },
  {
    id: 2,
    name: "NebulaCMS",
    description: "Content management system with headless architecture and GraphQL API",
    tech: ["Next.js", "PostgreSQL", "GraphQL"],
    color: "#DC2626", // Deep red for mars cyber dark
    github: "#",
    demo: "#",
    textureUrl: "/textures/mars.jpg",
  },
  {
    id: 3,
    name: "StarTrader",
    description: "Cryptocurrency trading dashboard with live data and analytics",
    tech: ["React", "WebSocket", "Chart.js"],
    color: "#D97706", // Deep orange for jupiter
    github: "#",
    demo: "#",
    textureUrl: "/textures/jupiter.jpg",
  },
  {
    id: 4,
    name: "GalaxyAI",
    description: "AI-powered image generation and editing tool using deep learning",
    tech: ["Python", "TensorFlow", "FastAPI"],
    color: "#8B5CF6", // Dark purple for venus cyber dark
    github: "#",
    demo: "#",
    textureUrl: "/textures/venus.jpg",
  },
  {
    id: 5,
    name: "OrbitChat",
    description: "Real-time chat application with video calling and screen sharing",
    tech: ["React", "WebRTC", "Socket.io"],
    color: "#059669", // Deep cyan/emerald for neptune cyber dark
    github: "#",
    demo: "#",
    textureUrl: "/textures/neptune.jpg",
  },
];

interface PortfolioStore {
  selectedProject: Project | null;
  isModalOpen: boolean;
  hoveredPlanet: number | null;
  setSelectedProject: (project: Project | null) => void;
  setModalOpen: (open: boolean) => void;
  setHoveredPlanet: (id: number | null) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  selectedProject: null,
  isModalOpen: false,
  hoveredPlanet: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  setModalOpen: (open) => set({ isModalOpen: open }),
  setHoveredPlanet: (id) => set({ hoveredPlanet: id }),
}));
