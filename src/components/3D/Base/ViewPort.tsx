// Components/Viewport.tsx
import { useThemeStore } from "@/stores/theme";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "../Ground";

export const Viewport: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      shadows
      camera={{ position: [10, 10, 10], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <pointLight decay={0.4} intensity={Math.PI} />
      <Ground theme={theme} visible={true} />

      <OrbitControls makeDefault />
      {children}
    </Canvas>
  );
};
