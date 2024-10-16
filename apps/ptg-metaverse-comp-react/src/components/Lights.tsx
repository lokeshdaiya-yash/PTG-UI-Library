// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const lightRef:any = useRef<THREE.DirectionalLight>();
   
    // useHelper(lightRef, DirectionalLightHelper, 5, "red");
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight 
            ref={lightRef}
                position={[0, 10, 10]}
                castShadow 
                shadow-mapSize-height={1000}
                shadow-mapSize-width={1000}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                />
                <hemisphereLight args={["#7cdbe6", "#5e9c49", 0.7]} />
        </>
    )
};

export default Lights;

