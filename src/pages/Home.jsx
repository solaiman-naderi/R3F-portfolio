import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { Loader } from "../components";
import Island from "../models/Island";
import Bird from "../models/Bird";
import Sky from "../models/Sky";
import Plane from "../models/Plane";

// <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"></div>
function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let planeScale, planePosition;

    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [0, -1.5, 0];
    } else {
      planeScale = [3, 3, 3];
      planePosition = [0, -4, -4];
    }

    return [planeScale, planePosition];
  };
  const [screenScale, screenPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [CurrentStage, setCurrentStage] = useState();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen relative ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            setCurrentStage={setCurrentStage}
            position={screenPosition}
            scale={screenScale}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            position={planePosition}
            scale={planeScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
