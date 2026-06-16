"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
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
      const scale = 1 + Math.sin(t * Math.PI * 3) * 0.08;
      torusRef.current.scale.setScalar(scale);
    }

    camera.position.z = 6 - t * 2.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.8, 0.45, 180, 32, 2, 3]} />
        <meshPhongMaterial 
          color="#ffffff" 
          emissive="#111111" 
          shininess={90} 
          specular="#ffffff"
        />
      </mesh>

      {[ -3.5, 3.5 ].map((x, i) => (
        <mesh key={i} position={[x, Math.sin(i) * 1.5, 0]}>
          <sphereGeometry args={[0.6]} />
          <meshPhongMaterial color={i === 0 ? "#67e8f9" : "#a5b4fc"} />
        </mesh>
      ))}

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("demo");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.15;
      const end = windowHeight * 0.85;
      const current = windowHeight - rect.top;
      
      let newProgress = 0;
      if (current > start) {
        newProgress = Math.min(1, (current - start) / (end - start));
      }
      
      setProgress(Math.max(0, Math.min(1, newProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: "#000" }}
      gl={{ alpha: true, antialias: true }}
    >
      <Scene scrollProgress={progress} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={3.5} 
        maxDistance={11}
        enableRotate={true}
      />
    </Canvas>
  );
}
