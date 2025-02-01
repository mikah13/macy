import React from "react";

interface RoomProps {
  width?: number;
  height?: number;
  thickness?: number;
  color?: string;
}

export const Room: React.FC<RoomProps> = ({
  width = 5,
  height = 5,
  thickness = 0.2,
  color = "#d16993",
}) => {
  return (
    <>
      {/*  Right */}
      <mesh position={[0, (height - thickness) / 2, (-width + thickness) / 2]}>
        <boxGeometry args={[width, height, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Left Wall */}
      <mesh
        position={[(-width + thickness) / 2, (height - thickness) / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[width, height, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width, width, thickness]} />
        <meshStandardMaterial color={color} opacity={0.6} />
      </mesh>
    </>
  );
};
