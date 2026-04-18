import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import type { Group, Mesh } from 'three';

function TorusField() {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.11;
    group.current.rotation.y += delta * 0.16;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.15;
  });
  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1.05, 0.3, 200, 18]} />
        <meshStandardMaterial
          color="#050505"
          emissive="#ff2d95"
          emissiveIntensity={0.9}
          metalness={0.85}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
}

function FloatingOrb() {
  const mesh = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x -= delta * 0.12;
    mesh.current.rotation.z += delta * 0.09;
    const t = state.clock.elapsedTime;
    mesh.current.position.x = Math.sin(t * 0.45) * 1.55;
    mesh.current.position.y = Math.cos(t * 0.38) * 0.55;
  });
  return (
    <mesh ref={mesh} position={[-1.8, 0.4, -0.8]}>
      <icosahedronGeometry args={[0.42, 0]} />
      <meshStandardMaterial
        color="#fafafa"
        emissive="#ff69b4"
        emissiveIntensity={0.55}
        metalness={0.35}
        roughness={0.35}
        wireframe
      />
    </mesh>
  );
}

export function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 4.4], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.28} />
        <pointLight position={[5, 4, 7]} intensity={38} color="#ffe4ec" />
        <pointLight position={[-5, -3, 5]} intensity={24} color="#ff1493" />
        <Suspense fallback={null}>
          <TorusField />
          <FloatingOrb />
        </Suspense>
      </Canvas>
    </div>
  );
}
