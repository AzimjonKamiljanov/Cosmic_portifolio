"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "15+" },
    { label: "Happy Clients", value: "10+" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-space/50 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Exploring the{" "}
            <span className="neon-text text-neon-cyan">Digital Universe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-neon-cyan/20 to-cosmic-purple/20 border border-neon-cyan/30 flex items-center justify-center glow-border">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-cyan/30 to-electric-blue/30 flex items-center justify-center">
                  <span className="text-7xl">👨‍🚀</span>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-neon-cyan rounded-full animate-ping" />
              <div className="absolute bottom-10 right-16 w-2 h-2 bg-cosmic-purple rounded-full animate-ping delay-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hi! I&apos;m <span className="text-neon-cyan font-semibold">Azimjon Kamiljanov</span>,
              a passionate Full Stack Developer who loves crafting exceptional
              digital experiences. Like an astronaut exploring space, I navigate
              through complex codebases to build stellar applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I specialize in React, Next.js, Node.js, and modern web
              technologies. My mission is to transform ideas into high-performance
              applications that are both beautiful and functional.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-black text-neon-cyan neon-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
