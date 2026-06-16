"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

interface SceneProps {
  scrollProgress: number;
}

function Scene({ scrollProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const { camera } = useThree();

  useFrame((state) => {
    const t = scrollProgress;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * Math.PI * 1.5 + state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(t * Math.PI) * 0.4;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * Math.PI * 2 + state.clock.elapsedTime * 0.3;
      torusRef.current.rotation.y = t * Math.PI * 1.2;
      // Subtle scale pulse based on scroll
      const scale = 1 + Math.sin(t * Math.PI * 3) * 0.08;
      torusRef.current.scale.setScalar(scale);
    }

    // Camera dolly based on scroll
    camera.position.z = 6 - t * 2.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Central Torus Knot - represents complex frontend architecture */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.8, 0.45, 180, 32, 2, 3]} />
        <meshPhongMaterial 
          color="#ffffff" 
          emissive="#111111" 
          shininess={90} 
          specular="#ffffff"
        />
      </mesh>

      {/* Orbiting accent spheres */}
      {[ -3.5, 3.5 ].map((x, i) => (
        <mesh key={i} position={[x, Math.sin(i) * 1.5, 0]}>
          <sphereGeometry args={[0.6]} />
          <meshPhongMaterial color={i === 0 ? "#67e8f9" : "#a5b4fc"} />
        </mesh>
      ))}

      {/* Subtle wireframe sphere */}
      <mesh>
        <sphereGeometry args={[4.5]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.06} />
      </mesh>

      <Stars radius={120} depth={40} count={300} factor={3} fade speed={0.4} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#67e8f9" />
    </group>
  );
}

export function InteractiveDemo() {
  const { scrollYProgress } = useScroll({
    target: { current: null }, // will be relative to viewport
    offset: ["start end", "end start"],
  });

  // We use a simple state approach for demo stability
  // In production you could use the scrollProgress directly
  const progressRef = useRef(0);

  // Update progress on scroll (simplified for component)
  if (typeof window !== "undefined") {
    // This is a lightweight way; real implementation can use useTransform
    window.addEventListener("scroll", () => {
      const section = document.getElementById("demo");
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
        progressRef.current = progress;
      }
    }, { passive: true });
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: "#000" }}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
    >
      <Scene scrollProgress={progressRef.current} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={3} 
        maxDistance={12}
        enableRotate={true}
      />
    </Canvas>
  );
}
