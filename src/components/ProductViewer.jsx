import clsx from "clsx";
import useMacbookStore from "../store";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>Dê uma olhada mais de perto.</h2>

      <div className="controls">
        <p className="info-text">
          MacBook Pro {scale === 0.06 ? '14"' : '16"'} {color === "#adb5bd" ? "Prateado" : "Preto-espacial"}
        </p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active",
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active",
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14&quot;</p>
            </div>
            <div
              onClick={() => setScale(0.8)}
              className={clsx(
                scale === 0.8
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>16&quot;</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas id="canvas" camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
        <ambientLight intensity={1} />
        
        <MacbookModel14 scale={0.06} position={[0, 0, 0]}/>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
