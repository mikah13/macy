import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Ground from "./components/3D/Ground";
import { Room } from "./components/3D/Room";
import { useThemeStore } from "./stores/theme";
import { Button } from "./components/ui/button";

function App() {
  const { roomColor } = useControls("Room Settings", {
    roomColor: { options: ["orange", "blue", "red", "green", "purple"] },
  });
  const { theme } = useThemeStore();
  return (
    <>
      <div className="relative h-screen w-full">
        <Canvas
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          shadows
          camera={{ position: [10, 10, 10], fov: 50 }}
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
          <Room color={roomColor} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
