import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

/* â”€â”€ Colour palette â”€â”€ */
const C = {
  perfume : '#c084fc',
  spray   : '#67e8f9',
  pot     : '#fb923c',
  green   : '#4ade80',
  yellow  : '#fbbf24',
  pink    : '#f472b6',
  blue    : '#60a5fa',
  violet  : '#a78bfa',
  teal    : '#34d399',
  gold    : '#fde68a',
};

/* â”€â”€ Perfume / spray bottle â”€â”€ */
function Bottle({ position, color, scale = 1, capColor = C.gold }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.19, 0.23, 0.72, 32]} />
        <meshPhysicalMaterial color={color} roughness={0.08} metalness={0.25} transparent opacity={0.88} />
      </mesh>
      <mesh castShadow position={[0, 0.48, 0]}>
        <cylinderGeometry args={[0.09, 0.15, 0.22, 16]} />
        <meshPhysicalMaterial color={color} roughness={0.08} metalness={0.25} />
      </mesh>
      <mesh castShadow position={[0, 0.67, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.13, 16]} />
        <meshStandardMaterial color={capColor} roughness={0.05} metalness={0.85} />
      </mesh>
      {/* label */}
      <mesh position={[0.01, 0, 0.24]}>
        <planeGeometry args={[0.32, 0.42]} />
        <meshStandardMaterial color="white" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* â”€â”€ Lidded box â”€â”€ */
function Box({ position, color, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[0.56, 0.46, 0.56]} />
        <meshStandardMaterial color={color} roughness={0.28} metalness={0.08} />
      </mesh>
      <mesh castShadow position={[0, 0.28, 0]}>
        <boxGeometry args={[0.59, 0.09, 0.59]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.12} />
      </mesh>
    </group>
  );
}

/* â”€â”€ Flower pot â”€â”€ */
function Pot({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.21, 0.15, 0.42, 32]} />
        <meshStandardMaterial color={C.pot} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.21, 0.21, 0.06, 32]} />
        <meshStandardMaterial color="#7c4c2c" roughness={1} />
      </mesh>
      <mesh castShadow position={[0, 0.33, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.38, 8]} />
        <meshStandardMaterial color={C.green} roughness={0.8} />
      </mesh>
      <mesh castShadow position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color={C.pink} roughness={0.5} />
      </mesh>
      {/* leaves */}
      {[-0.12, 0.12].map((ox, i) => (
        <mesh key={i} castShadow position={[ox, 0.42, 0.04]} rotation={[0.3, i === 0 ? -0.6 : 0.6, 0]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial color={C.green} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

/* â”€â”€ Gift box â”€â”€ */
function Gift({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[0.52, 0.46, 0.52]} />
        <meshStandardMaterial color="#ec4899" roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0, 0.28, 0]}>
        <boxGeometry args={[0.56, 0.1, 0.56]} />
        <meshStandardMaterial color="#db2777" roughness={0.3} />
      </mesh>
      {/* ribbon */}
      <mesh position={[0, 0.06, 0.27]}>
        <boxGeometry args={[0.07, 0.48, 0.02]} />
        <meshStandardMaterial color={C.gold} roughness={0.15} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.06, 0.27]}>
        <boxGeometry args={[0.52, 0.07, 0.02]} />
        <meshStandardMaterial color={C.gold} roughness={0.15} metalness={0.6} />
      </mesh>
    </group>
  );
}

/* â”€â”€ Toy car â”€â”€ */
function Car({ position, scale = 1 }) {
  const wheelPos = [[-0.19, 0.22], [0.19, 0.22], [-0.19, -0.22], [0.19, -0.22]];
  return (
    <group position={position} scale={scale}>
      {/* body */}
      <mesh castShadow>
        <boxGeometry args={[0.46, 0.26, 0.68]} />
        <meshStandardMaterial color={C.blue} roughness={0.3} metalness={0.2} />
      </mesh>
      {/* cabin */}
      <mesh castShadow position={[0, 0.22, -0.02]}>
        <boxGeometry args={[0.38, 0.2, 0.38]} />
        <meshStandardMaterial color={C.violet} roughness={0.25} metalness={0.15} />
      </mesh>
      {/* wheels */}
      {wheelPos.map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, -0.14, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.07, 18]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

/* â”€â”€ Shopping bag â”€â”€ */
function Bag({ position, color, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[0.46, 0.56, 0.2]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* handles */}
      {[-0.1, 0.1].map((ox, i) => (
        <mesh key={i} position={[ox, 0.38, 0]} rotation={[0, 0, i === 0 ? 0.22 : -0.22]}>
          <torusGeometry args={[0.12, 0.02, 8, 20, Math.PI]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/* â”€â”€ Main scene â”€â”€ */
function Scene({ mousePosition }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mousePosition.current.x * 0.14,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mousePosition.current.y * -0.07,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <pointLight position={[-4, 3, 2]} intensity={0.7} color="#c084fc" />
      <pointLight position={[4, -2, 3]} intensity={0.5} color="#67e8f9" />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.65}>
        <Bottle position={[0, 0.85, 0]} color={C.perfume} scale={1.1} />
      </Float>

      <Float speed={2.1} rotationIntensity={0.4} floatIntensity={0.8}>
        <Bottle position={[-1.15, 0.1, 0.3]} color={C.spray} scale={0.85} capColor="#e0f2fe" />
      </Float>

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Pot position={[1.15, 0.1, -0.2]} scale={1.0} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.75}>
        <Box position={[-0.75, -0.82, 0.4]} color={C.green} scale={0.88} />
      </Float>

      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <Box position={[0.85, -0.62, 0.25]} color={C.yellow} scale={0.82} />
      </Float>

      <Float speed={2.2} rotationIntensity={0.55} floatIntensity={0.9}>
        <Car position={[0.15, -0.1, -0.85]} scale={0.78} />
      </Float>

      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.7}>
        <Gift position={[-0.3, 0.05, 0.9]} scale={0.82} />
      </Float>

      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.5}>
        <Bag position={[1.42, 0.55, 0.1]} color={C.violet} scale={0.88} />
      </Float>

      <Float speed={1.9} rotationIntensity={0.5} floatIntensity={0.8}>
        <Bag position={[-1.42, -0.3, -0.3]} color={C.teal} scale={0.75} />
      </Float>

      {/* Sparkle spheres */}
      {[
        { pos: [0.5, 1.5, -0.5], color: C.gold,  r: 0.10 },
        { pos: [-0.6, 1.3, 0.6], color: C.pink,  r: 0.08 },
        { pos: [1.1, -1.4, -0.3], color: C.spray, r: 0.09 },
        { pos: [-1.3, -1.1, 0.7], color: C.yellow, r: 0.07 },
      ].map((s, i) => (
        <Float key={i} speed={2.5 + i * 0.4} floatIntensity={1.1}>
          <mesh position={s.pos}>
            <sphereGeometry args={[s.r, 16, 16]} />
            <meshStandardMaterial color={s.color} roughness={0.05} metalness={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function FloatingProducts3D({ mousePosition }) {
  return (
    <Canvas
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4.8]} fov={54} />
      <Scene mousePosition={mousePosition} />
    </Canvas>
  );
}

