import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={6}            // Reduce this if needed for performance
      alphaTest={1}       // Adjust for better shadow blending
      scale={12}             // Increased to ensure full scene coverage
      rotation={[Math.PI / 2, 0, 0]} // Ensures shadows fall from the top
      position={[0, 0, -0.19]} // Adjusted for shadow visibility
    >
      <RandomizedLight 
        amount={9}            // Increased amount of lights for more coverage
        radius={9}            // Adjusted radius for wider light coverage
        intensity={5}       // Increased intensity for brighter lighting
        ambient={0.35}        // Adjusted ambient to fill dark areas
        position={[5, 5, -10]} // Positioned for optimal light spread
        bias={0.0001}         // Reduces shadow artifacts
      />
      <RandomizedLight 
        amount={5}            // Matching light count for consistency
        radius={6}            // Adjusted for symmetry and balance
        intensity={0.5}       // Increased for brighter effects
        ambient={0.45}        // Higher ambient to combat darkness
        position={[-5, 5, -9]} // Symmetrical positioning
        bias={0.0001}         // Consistency in shadow rendering
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
