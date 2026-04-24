"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { usePortfolioStore, Project } from "@/store/portfolioStore";

interface PlanetProps {
  project: Project;
  orbitRadius: number;
  orbitSpeed: number;
  orbitOffset: number;
  size: number;
}

export default function Planet({
  project,
  orbitRadius,
  orbitSpeed,
  orbitOffset,
  size,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // ⚡ Bolt Optimization: Use individual selectors to prevent all planets from re-rendering
  // when any store state changes (like hoveredPlanet)
  const setSelectedProject = usePortfolioStore((state) => state.setSelectedProject);
  const setModalOpen = usePortfolioStore((state) => state.setModalOpen);
  const setHoveredPlanet = usePortfolioStore((state) => state.setHoveredPlanet);

  const targetScale = useRef(1);
  const currentScale = useRef(1);

  useFrame((_, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    const time = Date.now() * 0.001;
    const angle = time * orbitSpeed + orbitOffset;

    groupRef.current.position.x = Math.cos(angle) * orbitRadius;
    groupRef.current.position.z = Math.sin(angle) * orbitRadius;

    meshRef.current.rotation.y += delta * 0.3;

    targetScale.current = hovered ? 1.3 : 1;
    currentScale.current = THREE.MathUtils.lerp(
      currentScale.current,
      targetScale.current,
      delta * 5
    );
    meshRef.current.scale.setScalar(currentScale.current);
  });

  const handleClick = () => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handlePointerOver = () => {
    setHovered(true);
    setHoveredPlanet(project.id);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    setHoveredPlanet(null);
    document.body.style.cursor = "default";
  };

  const color = new THREE.Color(project.color);
  const texture = useTexture(project.textureUrl);

  return (
    <group ref={groupRef}>
      <pointLight
        position={[0, 0, 0]}
        color={project.color}
        intensity={hovered ? 1.5 : 0.5}
        distance={10}
      />
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.05}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      {hovered && (
        <Html center distanceFactor={10} style={{ pointerEvents: "none" }}>
          <div
            style={{
              background: "rgba(0,0,0,0.8)",
              border: `1px solid ${project.color}`,
              borderRadius: "8px",
              padding: "8px 12px",
              color: project.color,
              fontSize: "14px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              boxShadow: `0 0 20px ${project.color}66`,
              transform: "translateY(-60px)",
            }}
          >
            {project.name}
          </div>
        </Html>
      )}
    </group>
  );
}
