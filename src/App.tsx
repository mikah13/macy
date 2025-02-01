import { useControls } from "leva";
import { Viewport } from "./components/3D/Base/ViewPort";
import { Room } from "./components/3D/Room";

function App() {
  const { roomColor, roomSize, wallThickness } = useControls("Room Settings", {
    roomColor: { r: 200, b: 200, g: 106, a: 1 },
    roomSize: 4,
    wallThickness: 0.1,
  });

  return (
    <>
      <div className="relative h-screen w-full">
        <Viewport>
          <Room
            thickness={wallThickness}
            height={roomSize}
            width={roomSize}
            color={`rgb(${roomColor.r},${roomColor.g},${roomColor.b},${roomColor.a})`}
          />
        </Viewport>
      </div>
    </>
  );
}

export default App;
