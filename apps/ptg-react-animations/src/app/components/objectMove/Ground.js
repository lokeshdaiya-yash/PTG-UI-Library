import React,  { useEffect } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import {LinearEncoding, TextureLoader , RepeatWrapping} from "three";
import Roughness1 from './textures/terrain-roughness.jpg';
import tile1 from './textures/tile-texture.jpg';
function Ground({action}) {
  const [roughness,normal]= useLoader(TextureLoader, [Roughness1,tile1]);
  useEffect(()=>{
    
    [normal,roughness].forEach((t)=>{
        t.wrapS=RepeatWrapping;
        t.wrapT=RepeatWrapping;
        t.repeat.set(5,5)
    });
    normal.encoding=LinearEncoding;
})
  
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
        <planeGeometry args={[50, 50]} />
         <meshPhongMaterial color="#fffff" />

     
        <MeshReflectorMaterial
          envMapIntensity={0}
          normalMap={normal}
          normalScale={[0.15,0.15]}
          roughnessMap={roughness}
          dithering={true}
           color={[0.015, 0.015, 0.015]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}
        />
      </mesh>
  );
}

export default Ground;
