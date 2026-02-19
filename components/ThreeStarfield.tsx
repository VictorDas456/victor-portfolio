"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ThreeStarfield() {
  return (
    <div className="fixed inset-0 -z-40">
      <Canvas>
        {/* Real 3D Stars */}
        <Stars
          radius={120}
          depth={60}
          count={4000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
