"use client";

import { useRef, useMemo, useEffect } from "react";
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

  // Memoize geometries and materials for the black hole
  const blackHoleGeo = useMemo(() => new THREE.SphereGeometry(2.5, 32, 32), []);
  const blackHoleMat = useMemo(() => new THREE.MeshBasicMaterial({ color: "#000000" }), []);

  const accretionDisk1Geo = useMemo(() => new THREE.RingGeometry(2.8, 5.0, 64), []);
  const accretionDisk1Mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#8B5CF6",
    emissive: "#8B5CF6",
    emissiveIntensity: 2,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide,
    depthWrite: false
  }), []);

  const accretionDisk2Geo = useMemo(() => new THREE.RingGeometry(3.0, 4.5, 64), []);
  const accretionDisk2Mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#3B82F6",
    emissive: "#3B82F6",
    emissiveIntensity: 1.5,
    transparent: true,
    opacity: 0.6,
    side: THREE.DoubleSide,
    depthWrite: false
  }), []);

  useEffect(() => {
    return () => {
      blackHoleGeo.dispose();
      blackHoleMat.dispose();
      accretionDisk1Geo.dispose();
      accretionDisk1Mat.dispose();
      accretionDisk2Geo.dispose();
      accretionDisk2Mat.dispose();
    };
  }, [blackHoleGeo, blackHoleMat, accretionDisk1Geo, accretionDisk1Mat, accretionDisk2Geo, accretionDisk2Mat]);

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
        <mesh geometry={blackHoleGeo} material={blackHoleMat} />

        {/* Accretion Disk (Glowing Ring) */}
        <mesh
          rotation={[-Math.PI / 2.5, 0, 0]}
          geometry={accretionDisk1Geo}
          material={accretionDisk1Mat}
        />

        <mesh
          rotation={[-Math.PI / 2.2, 0, 0]}
          geometry={accretionDisk2Geo}
          material={accretionDisk2Mat}
        />
      </group>

      {/* Light emitted from the accretion disk */}
      <pointLight position={[0, 0, 0]} color="#8B5CF6" intensity={2} distance={60} />
      <pointLight position={[0, 2, 0]} color="#3B82F6" intensity={1} distance={40} />
      <pointLight position={[0, -2, 0]} color="#3B82F6" intensity={1} distance={40} />
    </group>
  );
}
