"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", icon: "⚛️", color: "#61DAFB", level: 95 },
  { name: "Next.js", icon: "▲", color: "#ffffff", level: 90 },
  { name: "TypeScript", icon: "TS", color: "#3178C6", level: 88 },
  { name: "Node.js", icon: "🟢", color: "#339933", level: 85 },
  { name: "Python", icon: "🐍", color: "#3776AB", level: 80 },
  { name: "Three.js", icon: "🎲", color: "#000000", level: 75 },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", level: 82 },
  { name: "Docker", icon: "🐋", color: "#2496ED", level: 78 },
  { name: "GraphQL", icon: "◈", color: "#E10098", level: 76 },
  { name: "AWS", icon: "☁️", color: "#FF9900", level: 72 },
  { name: "Git", icon: "🔧", color: "#F05032", level: 92 },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4", level: 93 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-space/30 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            My <span className="neon-text text-neon-cyan">Cosmic</span> Toolkit
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-4 cursor-default"
              style={{
                borderColor: `${skill.color}33`,
                boxShadow: `0 0 20px ${skill.color}11`,
              }}
            >
              <div className="text-3xl mb-3 text-center">{skill.icon}</div>
              <div className="text-white font-semibold text-sm text-center mb-3">
                {skill.name}
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.07 + 0.3 }}
                  className="h-1.5 rounded-full"
                  style={{ background: skill.color }}
                />
              </div>
              <div
                className="text-xs text-right mt-1"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
