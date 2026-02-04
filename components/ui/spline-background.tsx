"use client";

import Spline from "@splinetool/react-spline";

interface SplineBackgroundProps {
  scene: string;
  className?: string;
}

/**
 * Spline 3D 배경 컴포넌트 (Client Component)
 */
export function SplineBackground({ scene, className }: SplineBackgroundProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Spline 
        scene={scene} 
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
