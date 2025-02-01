import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface CubeProps extends MeshProps {
  cubeColor: string;
}

const Cube: React.FC<CubeProps> = ({ cubeColor, ...meshProps }) => {
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  useFrame((state, delta) => {
    if (!ref?.current) return;
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.5; // Added rotation on y-axis
  });

  return (
    <mesh
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      {...meshProps}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : cubeColor} />
    </mesh>
  );
};

export default Cube;
