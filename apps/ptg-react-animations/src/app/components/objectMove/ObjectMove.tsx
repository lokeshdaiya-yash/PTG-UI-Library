import './index.css';
import { Canvas } from '@react-three/fiber';
import Models from './AnimatedCartoon';
import { Suspense, useEffect, useState, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import Ground from './Ground';
import Model from './Scene';
function useKey(key: string, cb: any) {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    })


    useEffect(() => {
        function handle(event: any) {
            if (event.code === key) {
                callbackRef.current(event);

            }
        }
        document.addEventListener("keypress", handle);
        return () => document.removeEventListener("keypress", handle)
    }, [key])
}
const ObjectMove = () => {

    function handleRunning() {
        setAction("running")
    }
    useKey("KeyR", handleRunning);

    function handleJumping() {
        setAction("jumping")
    }
    useKey("KeyJ", handleJumping);

    function handleFalling() {
        setAction("falling")
    }
    useKey("KeyF", handleFalling);

    function handleIdeal() {
        setAction("ideal")
    }
    useKey("KeyI", handleIdeal);
    const [action, setAction] = useState("ideal");


    return (

        <Canvas >
            <ambientLight />
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            {/* <color args={[0,0,0]} attach="background"/> */}
            <pointLight intensity={1} position={[-1, 1, 3]} color="pink" />
            <pointLight intensity={1} position={[1, 2, 3]} color="blue" />
            <pointLight intensity={1} position={[-1, 3, -10]} color="yellow" />
            <Suspense fallback={null}>
                <Models action={action} />
                <Model position={[-1, 0, 3]} />
                <Ground action={action} />
            </Suspense>
            </Canvas>
    )
}

export default ObjectMove;