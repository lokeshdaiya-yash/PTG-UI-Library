
import * as THREE from "three";
import React, {Suspense} from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Google_Logo_01_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["01_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export default function Google_Logo(props) {
  const { nodes, materials } = useGLTF("../assets/google_logo.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {/* <Suspense fallback={null}> */}
          <ambientLight intensity={0.2} />
              <OrbitControls />
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="Google_LogoFBX" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Google_Logo" rotation={[1.6e-7, 0, 0]}>
            <group
              name="Object_4"
              position={[-4, 1.6, -22]}
              scale={[0.01, 0.01, 0.01]}
            >
              <mesh
                name="Google_Logo_01_-_Default_0"
                castShadow
                receiveShadow
                geometry={nodes["Google_Logo_01_-_Default_0"].geometry}
                material={materials["01_-_Default"]}
              />
            </group>
          </group>
        </group>
      </group>
      {/* </Suspense> */}
    </group>
  );
}

useGLTF.preload("./google_logo.glb");