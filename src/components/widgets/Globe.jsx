import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { TextureLoader } from 'three';

function loadEarthTexture() {
  const textureLoader = new TextureLoader();
  return textureLoader.load('src/assets/images/earth-dark.jpg');
}

function Sphere() {
  const earthTexture = loadEarthTexture();
  const sphereRef = useRef();

  useFrame(() => {

    sphereRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

function Globe() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" intensity={1} position={[1, 2, 3]} />

      <Sphere />
    </Canvas>
  );
}

export default Globe;
