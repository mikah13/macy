import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Ground from "./components/3D/Ground";
import { Room } from "./components/3D/Room";
import { useThemeStore } from "./stores/theme";

function App() {
  const { roomColor, roomSize, wallThickness } = useControls("Room Settings", {
    roomColor: { r: 200, b: 200, g: 106, a: 1 },
    roomSize: 4,
    wallThickness: 0.1,
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
          <spotLight position={[2, 5, 2]} angle={0.3} penumbra={1} castShadow />
          <pointLight decay={0.4} intensity={Math.PI} />
          <Room
            thickness={wallThickness}
            height={roomSize}
            width={roomSize}
            color={`rgb(${roomColor.r},${roomColor.g},${roomColor.b},${roomColor.a})`}
          />
        </Canvas>
      </div>
    </>
  );
}

export default App;
