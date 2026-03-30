import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

/* ── Single finger built from 3 segments ── */
const Finger = ({
  position,
  rotation = [0, 0, 0],
  curl,
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  curl: number;
  scale?: number;
}) => {
  const seg = [0.55, 0.45, 0.35].map((l) => l * scale);
  const r = 0.09 * scale;
  const angle = curl * 1.2;

  return (
    <group position={position} rotation={rotation as any}>
      {/* Metacarpal */}
      <group rotation={[angle * 0.3, 0, 0]}>
        <mesh position={[0, seg[0] / 2, 0]}>
          <capsuleGeometry args={[r, seg[0], 6, 12]} />
          <meshStandardMaterial color="#c0c4cc" metalness={0.7} roughness={0.25} />
        </mesh>
        {/* Joint */}
        <mesh position={[0, seg[0], 0]}>
          <sphereGeometry args={[r * 1.15, 12, 12]} />
          <meshStandardMaterial color="#8aa8d0" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Proximal */}
        <group position={[0, seg[0], 0]} rotation={[angle * 0.5, 0, 0]}>
          <mesh position={[0, seg[1] / 2, 0]}>
            <capsuleGeometry args={[r * 0.85, seg[1], 6, 12]} />
            <meshStandardMaterial color="#b0b5be" metalness={0.7} roughness={0.25} />
          </mesh>
          <mesh position={[0, seg[1], 0]}>
            <sphereGeometry args={[r * 0.95, 12, 12]} />
            <meshStandardMaterial color="#8aa8d0" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Distal */}
          <group position={[0, seg[1], 0]} rotation={[angle * 0.7, 0, 0]}>
            <mesh position={[0, seg[2] / 2, 0]}>
              <capsuleGeometry args={[r * 0.7, seg[2], 6, 12]} />
              <meshStandardMaterial color="#a0a5ae" metalness={0.7} roughness={0.25} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

/* ── Thumb ── */
const Thumb = ({ curl }: { curl: number }) => {
  const angle = curl * 0.8;
  const r = 0.1;

  return (
    <group position={[0.45, 0.1, 0.15]} rotation={[0.2, 0, -0.9]}>
      <group rotation={[angle * 0.3, 0, angle * 0.2]}>
        <mesh position={[0, 0.25, 0]}>
          <capsuleGeometry args={[r, 0.5, 6, 12]} />
          <meshStandardMaterial color="#c0c4cc" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[r * 1.1, 12, 12]} />
          <meshStandardMaterial color="#8aa8d0" metalness={0.8} roughness={0.2} />
        </mesh>
        <group position={[0, 0.5, 0]} rotation={[angle * 0.6, 0, 0]}>
          <mesh position={[0, 0.2, 0]}>
            <capsuleGeometry args={[r * 0.85, 0.35, 6, 12]} />
            <meshStandardMaterial color="#b0b5be" metalness={0.7} roughness={0.25} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

/* ── Full hand assembly ── */
const Hand = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [curl, setCurl] = useState(0);
  const [direction, setDirection] = useState(1);

  useFrame((_, delta) => {
    // Gentle auto-animation
    setCurl((prev) => {
      const next = prev + direction * delta * 0.4;
      if (next > 1) {
        setDirection(-1);
        return 1;
      }
      if (next < 0) {
        setDirection(1);
        return 0;
      }
      return next;
    });

    // Slow rotate
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const fingerPositions: [number, number, number][] = [
    [-0.28, 0.85, 0],
    [-0.09, 0.95, 0],
    [0.09, 0.92, 0],
    [0.27, 0.8, 0],
  ];

  const fingerRotations: [number, number, number][] = [
    [0, 0, 0.06],
    [0, 0, 0.02],
    [0, 0, -0.02],
    [0, 0, -0.08],
  ];

  const fingerScales = [0.85, 1, 0.95, 0.8];

  return (
    <group ref={groupRef} position={[0, -0.8, 0]} rotation={[0.3, 0, 0]}>
      {/* Palm */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.85, 0.8, 0.3]} />
        <meshStandardMaterial color="#d0d4dc" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Wrist connector */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.3, 12]} />
        <meshStandardMaterial color="#8aa8d0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Forearm segment */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.28, 0.3, 0.7, 12]} />
        <meshStandardMaterial color="#b8bcc5" metalness={0.65} roughness={0.3} />
      </mesh>

      {/* Fingers */}
      {fingerPositions.map((pos, i) => (
        <Finger
          key={i}
          position={pos}
          rotation={fingerRotations[i]}
          curl={curl}
          scale={fingerScales[i]}
        />
      ))}

      <Thumb curl={curl} />
    </group>
  );
};

const RoboticHand3D = () => (
  <div className="w-full h-full min-h-[550px] sm:min-h-[600px]">
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} />
      <Hand />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />
      <Environment preset="studio" />
    </Canvas>
  </div>
);

export default RoboticHand3D;
