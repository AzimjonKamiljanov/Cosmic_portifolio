"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./3d/Scene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-neon-cyan text-sm md:text-base font-mono tracking-widest uppercase mb-4 opacity-80">
            Welcome to my universe
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="block text-white">Azimjon</span>
          <span className="block neon-text text-neon-cyan">Kamiljanov</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 font-light"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-base text-gray-500 mb-10 max-w-lg mx-auto"
        >
          Crafting digital experiences that are out of this world. Building
          scalable applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-cyan/90 transition-all duration-200 animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 transition-all duration-200 glow-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neon-cyan/40 flex justify-center pt-2">
          <div className="w-1 h-3 bg-neon-cyan rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
