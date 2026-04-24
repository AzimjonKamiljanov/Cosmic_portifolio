"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputClasses =
    "w-full bg-black/60 border border-neon-cyan/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/60 focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-dark-space/50" />

      <div className="relative z-10 max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Send a{" "}
            <span className="neon-text text-neon-cyan">Transmission</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClasses}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-2 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className={`${inputClasses} resize-none`}
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={`w-full py-4 rounded-lg font-bold text-base transition-all duration-200 ${
              status === "sent"
                ? "bg-green-500 text-white"
                : status === "sending"
                ? "bg-neon-cyan/50 text-black cursor-wait"
                : "bg-neon-cyan text-black hover:bg-neon-cyan/90 animate-pulse-glow"
            }`}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" ? { scale: 0.98 } : {}}
          >
            {status === "sending"
              ? "Transmitting..."
              : status === "sent"
              ? "✓ Message Sent!"
              : "Launch Message 🚀"}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center gap-8 flex-wrap"
        >
          {[
            { label: "GitHub", href: "https://github.com", icon: "🔗" },
            { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
            { label: "Email", href: "mailto:hello@example.com", icon: "📧" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <span>{link.icon}</span>
              <span className="text-sm">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
