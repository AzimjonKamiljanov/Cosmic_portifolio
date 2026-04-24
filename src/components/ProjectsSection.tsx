"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { projects } from "@/store/portfolioStore";
import { usePortfolioStore } from "@/store/portfolioStore";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const setSelectedProject = usePortfolioStore((state) => state.setSelectedProject);
  const setModalOpen = usePortfolioStore((state) => state.setModalOpen);

  return (
    <section id="projects" className="relative py-10 px-6">
      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">
            Solar System
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            My <span className="neon-text text-neon-cyan">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore the 3D solar system above — click on a planet to discover
            each project, or browse below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass rounded-xl p-6 cursor-pointer"
              style={{
                borderColor: `${project.color}33`,
                boxShadow: `0 0 20px ${project.color}11`,
              }}
              onClick={() => {
                setSelectedProject(project);
                setModalOpen(true);
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${project.color}, ${project.color}44)`,
                    boxShadow: `0 0 15px ${project.color}66`,
                  }}
                />
                <h3
                  className="text-lg font-bold"
                  style={{ color: project.color }}
                >
                  {project.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      background: `${project.color}22`,
                      color: project.color,
                      border: `1px solid ${project.color}44`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
