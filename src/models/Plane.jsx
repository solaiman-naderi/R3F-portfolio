import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import planeScene from "../assets/3d/plane.glb";
function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      console.log(actions);
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props}>
      <primitive ref={ref} object={scene} />
    </mesh>
  );
}

export default Plane;
