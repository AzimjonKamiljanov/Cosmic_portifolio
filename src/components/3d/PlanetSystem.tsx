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
            <ringGeometry args={[orbit.radius - 0.05, orbit.radius + 0.05, 128]} />
            <meshBasicMaterial
              color="#00D4FF"
              transparent
              opacity={0.08}
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
      {/* Central star */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#FFF4E6"
          emissive="#FF6000"
          emissiveIntensity={2}
          roughness={1}
          metalness={0}
        />
      </mesh>
      <pointLight position={[0, 0, 0]} color="#FF8C00" intensity={3} distance={50} />
    </group>
  );
}
