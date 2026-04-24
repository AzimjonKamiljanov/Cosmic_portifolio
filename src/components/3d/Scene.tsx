"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Starfield from "./Starfield";
import PlanetSystem from "./PlanetSystem";
import ParticleSystem from "./ParticleSystem";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 5, 30], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066FF" />

      <Starfield />
      <ParticleSystem />
      <PlanetSystem />

      <OrbitControls
        enablePan={false}
        minDistance={15}
        maxDistance={60}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  );
}
