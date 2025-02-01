import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Cube from "./components/3D/Cube";
import Ground from "./components/3D/Ground";
import { useThemeStore } from "./stores/theme";
import { Button } from "./components/ui/button";
import { Room } from "./components/3D/Room";

function App() {
  const { cubeColor } = useControls("Cube", {
    cubeColor: { options: ["orange", "blue", "red", "green", "purple"] },
  });

  const { theme } = useThemeStore();
  return (
    <>
      <div className="relative h-screen w-full">
        <Canvas
          shadows
          camera={{ position: [0, 2, 2], fov: 75, near: 0.1, far: 5000 }}
        >
          <Ground theme={theme} visible={true} />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[5, 10, 5]}
            angle={0.3}
            penumbra={1}
            castShadow
          />
          <pointLight decay={0.4} intensity={Math.PI} />
          <Room />
        </Canvas>
      </div>
    </>
  );
}

export default App;
