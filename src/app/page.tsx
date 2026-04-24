import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ProjectModal from "@/components/ProjectModal";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <About />
      <Skills />
      <Contact />
      <ProjectModal />

      <footer className="py-8 text-center border-t border-neon-cyan/10">
        <p className="text-gray-600 text-sm">
          © 2024 Azimjon Kamiljanov. Built with Next.js &amp; Three.js ⚡
        </p>
      </footer>
    </main>
  );
}
