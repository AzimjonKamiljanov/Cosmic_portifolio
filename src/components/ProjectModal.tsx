"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/store/portfolioStore";

export default function ProjectModal() {
  const selectedProject = usePortfolioStore((state) => state.selectedProject);
  const isModalOpen = usePortfolioStore((state) => state.isModalOpen);
  const setModalOpen = usePortfolioStore((state) => state.setModalOpen);
  const setSelectedProject = usePortfolioStore((state) => state.setSelectedProject);

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <AnimatePresence>
      {isModalOpen && selectedProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg bg-black/90 rounded-2xl p-8 border pointer-events-auto"
              style={{
                borderColor: `${selectedProject.color}44`,
                boxShadow: `0 0 40px ${selectedProject.color}33, 0 0 80px ${selectedProject.color}11`,
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${selectedProject.color}, ${selectedProject.color}44)`,
                    boxShadow: `0 0 20px ${selectedProject.color}66`,
                  }}
                />
                <div>
                  <h3
                    className="text-2xl font-black"
                    style={{ color: selectedProject.color }}
                  >
                    {selectedProject.name}
                  </h3>
                  <p className="text-gray-500 text-sm">Project Details</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium text-black"
                      style={{ background: selectedProject.color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.github}
                  className="flex-1 py-3 text-center rounded-lg border font-semibold text-sm transition-all duration-200 hover:bg-white/5"
                  style={{
                    borderColor: `${selectedProject.color}66`,
                    color: selectedProject.color,
                  }}
                >
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  className="flex-1 py-3 text-center rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:opacity-90"
                  style={{ background: selectedProject.color }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
