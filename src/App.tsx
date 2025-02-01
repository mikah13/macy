import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Cube from "./components/3D/Cube";
import Ground from "./components/3D/Ground";
import { useThemeStore } from "./stores/theme";
import { Button } from "./components/ui/button";

function App() {
  const { cubeColor } = useControls("Cube", {
    cubeColor: { options: ["orange", "blue", "red", "green", "purple"] },
  });

  const { theme } = useThemeStore();
  return (
    <>
      <div className="relative h-screen w-full">
        <Canvas
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          flat
          shadows
          camera={{ position: [0, 0, 20], fov: 25 }}
          linear={false}
        >
          <Ground theme={theme} visible={true} />
          <OrbitControls />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Cube position={[-1.2, 0, 0]} cubeColor={cubeColor} />
          <Cube position={[1.2, 0, 0]} cubeColor={cubeColor} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
