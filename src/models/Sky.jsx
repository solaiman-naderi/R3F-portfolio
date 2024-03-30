import { useGLTF } from "@react-three/drei";
import React from "react";

import skyScene from "../assets/3d/sky.glb";
function Sky() {
  const skyModel = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={skyModel.scene} />
    </mesh>
  );
}

export default Sky;
