"use client";

import { useRef } from "react";
import * as THREE from "three";
import Planet from "./Planet";
import { projects } from "@/store/portfolioStore";

const orbitData = [
  { radius: 8, speed: 0.4, size: 1.0, offset: 0 },
  { radius: 12, speed: 0.3, size: 1.4, offset: 1.2 },
  { radius: 16, speed: 0.22, size: 1.8, offset: 2.5 },
  { radius: 20, speed: 0.17, size: 1.5, offset: 4.0 },
  { radius: 24, speed: 0.13, size: 2.0, offset: 5.5 },
];

export default function PlanetSystem() {
  const orbitRingsRef = useRef<THREE.Group>(null);

  return (
    <group ref={orbitRingsRef}>
      {orbitData.map((orbit, index) => (
        <group key={index}>
          {/* Orbit ring */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[orbit.radius - 0.02, orbit.radius + 0.02, 128]} />
            <meshBasicMaterial
              color="#3B82F6"
              transparent
              opacity={0.15}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
          <Planet
            key={projects[index].id}
            project={projects[index]}
            orbitRadius={orbit.radius}
            orbitSpeed={orbit.speed}
            orbitOffset={orbit.offset}
            size={orbit.size}
          />
        </group>
      ))}
      {/* Central Black Hole */}
      <group>
        {/* Event Horizon (Pure Black) */}
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Accretion Disk (Glowing Ring) */}
        <mesh rotation={[-Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[2.8, 5.0, 64]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>

        <mesh rotation={[-Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[3.0, 4.5, 64]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={1.5}
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Light emitted from the accretion disk */}
      <pointLight position={[0, 0, 0]} color="#8B5CF6" intensity={2} distance={60} />
      <pointLight position={[0, 2, 0]} color="#3B82F6" intensity={1} distance={40} />
      <pointLight position={[0, -2, 0]} color="#3B82F6" intensity={1} distance={40} />
    </group>
  );
}
