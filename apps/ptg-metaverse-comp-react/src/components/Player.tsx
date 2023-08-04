import { useAnimations, OrbitControls, Box, BBAnchor, Html, Torus, Sphere, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useInput } from "../hooks/useInput";
import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";
// import { Physics, usePlane, useBox } from '@react-three/cannon'

interface direction {
    forward: any;
    backward: any;
    left: any;
    right: any;
}

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3(0,1,0);

const directionOffset = ({ forward, backward, left, right }: direction) => {
    let directionOffset = 0;
    if (forward) {
        if (left) {
            directionOffset = Math.PI / 4; //w+a 
        } else if (right) {
            directionOffset = -Math.PI / 4; //w+d 
        }
    } else if (backward) {
        if (left) {
            directionOffset = Math.PI / 4 + Math.PI / 2; //s+a 
        } else if (right) {
            directionOffset = -Math.PI / 4 - Math.PI / 2; //s+d 
        } else {
            directionOffset = Math.PI; //s
        }
    } else if (left) {
        directionOffset = Math.PI / 2; //a 
    } else if (right) {
        directionOffset = -Math.PI / 2; //d 
    }
    return directionOffset;
};


const Player = () => {
    // const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    const { forward, backward, left, right, jump, shift, openDoor } = useInput();
    const [ autoWalk, setAutoWalk ] = useState(false)
    const time = useRef(0);
    const showroomRef = useRef();
    const reactRef:any = useRef();
    const jsRef:any = useRef();
    const actorRef = useRef();
    const [ hidden, set ] = useState()
    const [ automateWalk, setAutomateWalk ] = useState(false)
    const [ isEnrolled, setIsEnrolled ] = useState(false)
    const [ crossedDoor, setCrossedDoor ] = useState(false)
    const [ showEnrollForm, setShowEnrollForm ] = useState(false)
    const [ inReactRadius, setinReactRadius ] = useState(false)
    const [ inJsRadius, setinJsRadius ] = useState(false)
    // Model
     const modelShowroom = useGLTF("./assets/ve_space_048.0e4c3ace1211fc6c9bf3b1ca631abbf6bae866a7.glb");
    modelShowroom.scene.position.set(+6,0,-5)
    modelShowroom.scene.scale.set(0.6,0.6,0.6)
    modelShowroom.scene.rotation.set(0,0.6,0)
    // console.log(modelShowroom,"Showroom")
    const modelProduct3 = useGLTF("./assets/react.glb");
    const modelProduct4 = useGLTF("./assets/javascript.glb");
    const modelProduct5 = useGLTF("./assets/amazon_logo.glb");
    const modelProduct6 = useGLTF("./assets/google_logo.glb");
    // const door = useGLTF("./models/objects/entry-door_with-sidelights.glb");
    // const door = useGLTF("./models/objects/scifi_door_animation_loops.glb");
    const door = useGLTF("./assets/sci-fi_door_loops.glb");
    useGLTF.preload("/gltf/sci-fi_door_loops.glb");

    const modelProduct1 = useGLTF("./assets/product_miair4_002.a0d751db5d52c6309e67d050ba9dbb64bbea1d0e.glb");
    const modelProduct2 = useGLTF("./assets/product_mibuds_003.832e811826fd0bbe95ac14522d3bd7a906bb8cac.glb");

    const model = useGLTF("./assets/miAvator_new.glb");
    const { actions } = useAnimations(model.animations, model.scene);
    
    const modelAuditorium = useGLTF("./assets/theater_cinema_auditorium.glb");

    // model.scene.rotation.y = 0
    model.scene.scale.set(0.5, 0.5, 0.5);
    model.scene.traverse((object:any) => {
        if (object.isMesh) {
            object.castShadow = true;
        }
    });
    const currentAction = useRef("");
    const controlsRef:any = useRef<typeof OrbitControls>();
    const camera = useThree((state) => state.camera);

    //to update the camera position
    const updateCameraTarget = (moveX: number, moveZ: number) => {
        //move camera
        camera.position.x += moveX;
        camera.position.z += moveZ;

        //update camera target
        cameraTarget.x = model.scene.position.x;
        cameraTarget.y = model.scene.position.y + 2;
        cameraTarget.z = model.scene.position.z;
        if (controlsRef.current) {
            controlsRef.current.target = cameraTarget;
        }

    }

    useEffect(() => {
        let action = "";
        let doorAction1 = "";
        console.log({autoWalk})
        if (forward || backward || left || right || autoWalk) {
            action = "Walk";
            if (shift) {
                action = "Run"
            }
        } else if (jump) {
            action = "GestureDanceTwist";
        } else {
            action = "Idel";
        }

        if (currentAction.current != action) {
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2);
            nextActionToPlay?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }

        if(!openDoor){
            doorAction1 = "DoorAnimationALL"
            // console.log(doorActions[doorAction1].play(),"doorActions");
        }

    }, [forward, backward, left, right, jump, shift, autoWalk]);

    useFrame((state, delta) => {
        if (currentAction.current == "Walk" || currentAction.current == "Run") {
            allCalculations()
        }
    });
    
    const allCalculations=()=>{

        //calculate towards camera direction
        let anagleYCameraDirection = Math.atan2(
            camera.position.x - model.scene.position.x,
            camera.position.z - model.scene.position.z,
        );

        //diagonal movement angle offset
        let newDirectionOffset = directionOffset({
            forward, backward, left, right
        });

        //rotate model direction
        rotateQuaternion.setFromAxisAngle(
            rotateAngle,
            anagleYCameraDirection + newDirectionOffset
        );
        model.scene.quaternion.rotateTowards(rotateQuaternion, 0.2);

        //calculate direction 
        camera.getWorldDirection(walkDirection);
        walkDirection.y = 0;
        walkDirection.normalize();
        walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

        const velocity = currentAction.current == "Running" ? 10 : 5;

        const moveX = walkDirection.x * velocity * 0.015;
        const moveZ = walkDirection.z * velocity * 0.015;
        model.scene.position.x += moveX;
        model.scene.position.z += moveZ;
        updateCameraTarget(moveX, moveZ);
    }

    // door.scene.children[0].children[0].children[0].rotation.set(0,0,-1.5)
    // console.log(door.scene.children[0].children[0].children[0])

    const handleEnrollSubmit = (e:any,courseEnrolled:string) => {
        e.preventDefault()
        // React case
        if (courseEnrolled === "React"){
            setIsEnrolled(true)
            setAutomateWalk(true)
            setAutoWalk(true)
        }
        // JS case
        else if (courseEnrolled === "Js"){
            setIsEnrolled(true)
        }
        
        // common case
        else if (model.scene.position.x == 0)
        setIsEnrolled(false)
        else
        {setIsEnrolled(false)}
        
        // model.scene.position.set(180,0,0)
        // updateCameraTarget(50,0);
        // allCalculations();
        // camera.getWorldDirection(walkDirection)
    }

    useFrame((state, delta) => {
            let pos = model.scene.position;
            time.current += delta * 0.0001;
            let newX = pos.x - (time.current);
            let newZ = pos.z - (time.current);

            // automate the walk till door
            const automateTheWalk = () => {
               pos.set(newX, pos.y, newZ )
            }
              
              if(isEnrolled){
                console.log(pos,"actor position");
                setAutomateWalk(true)
                // Reached the door
                let distbtwDoorActor =  calculateDistance(pos, door.scene.position)
                  if(distbtwDoorActor < 1 ) {
                    console.log(distbtwDoorActor,"near to door");
                    model.scene.position.set(40,0,-10)
                    model.scene.scale.set(4,4,4)
                    updateCameraTarget(40,0);
                    allCalculations();
                    camera.getWorldDirection(walkDirection)
                    setCrossedDoor(true)
                    setAutoWalk(false)
                    //   pos.set(0,0,0)
                    //   time.current = 0;
                    }

                    // let the actor walk till destination
                    // else if(Math.round(distbtwDoorActor) === 1 || automateWalk){
                    //     console.log(pos.x,"far to door");
                    //     automateWalk && setAutoWalk(true)
                    //     // model.scene.animations["Walk"].play(); 
                    //     // automateTheWalk()               
                    // }
                    
                }
                else{
                    setAutomateWalk(false)
                }
            });

    // On Exit Auditorium
    const handleExit = ()=>{
        setIsEnrolled(false)
        model.scene.position.set(0,0.6,0)
        updateCameraTarget(20,0);
        allCalculations();
        camera.getWorldDirection(walkDirection)
        setShowEnrollForm(false)
    }

    // CALCULATE DISTANCE FORMULA
    function calculateDistance(p1, p2) {
        let a = p2.x - p1.x;
        let b = p2.y - p1.y;
        let c = p2.z - p1.z;
        return Math.hypot(a, b, c);
    }


    useEffect(()=>{        
        let p2 = model.scene.position
        // React Radius; position : -11,0.8,-16
        let p1 = modelProduct3.scene.position
        let distance:any = calculateDistance(p1, p2);
        if(Math.round(distance) < 3){
        if(reactRef.current.name === "React"){
                    setinReactRadius(true)
                }
                //JS Radius
                if(jsRef.current.name === "Js"){
                    // setinJsRadius(true)
                }
                
            }
            else{
                setinJsRadius(false)
                setinReactRadius(false)
                setShowEnrollForm(false)
            }

        
    },[model.scene.position.x,model.scene.position.z])

    // Rotation Object
    // const time = useRef(0);
    // const [xRotSpeed] = useState(() => Math.random());
    // const [yRotSpeed] = useState(() => Math.random());
    // useFrame(
        // (state, delta) => {
        // time.current += delta * 0.005;
        // reactRef.current.rotation.x += delta * xRotSpeed;
        
        // if(Math.round(jsRef.current.position.y) >= -1 && Math.round(jsRef.current.position.y) <= 0 ){
        //     jsRef.current.position.y += delta * yRotSpeed;
        // }
        // else if(Math.round(jsRef.current.position.y) <= 0){
        //     jsRef.current.position.y -= delta * yRotSpeed;
        // }
        // },
        // [xRotSpeed, yRotSpeed]
    // );

    return (
        <>        
            <>value for {crossedDoor }</>
        
            <OrbitControls ref={controlsRef}/>

            <primitive object={model.scene} ref={actorRef} name="Actor" />
            <Physics colliders={false}>
            <RigidBody colliders="trimesh" type="fixed">
            {/* <mesh geometry={modelShowroom.nodes.ground_collision_mesh.geometry} dispose={null}>
                <meshPhysicalMaterial color="lightblue" transmission={1} thickness={1} roughness={0} />
            </mesh> */}
            <primitive object={modelShowroom.scene} name="Showroom" ref={showroomRef}/>
            </RigidBody>
            </Physics>

            {/* // Door */}
            { isEnrolled &&
            <primitive object={door.scene} position={[-16,0,-26]} rotation={[0,0.6,0]} scale={[1,1,1]}/> 
            } 


            {/* {isEnrolled && */}
            {crossedDoor &&
            <primitive object={modelAuditorium.scene} position={[130,-30,60]} scale={[0.10,0.10,0.10]} rotation={[0,-5.4,0]} name="Auditorium">
            <BBAnchor anchor={[0,1.99,0]} >
                <Html center occlude
                    //   onOcclude={set}
                    style={{
                        transition: 'all 0.5s',
                        opacity: hidden ? 0 : 1,
                    }}>
                <div className="auditorium"><h6>SCREEN</h6>
                <iframe width="820" height="400" src="https://www.youtube.com/embed/s2skans2dP4" title="React JS Explained In 10 Minutes"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                { <button className="exitBtn" onClick={handleExit}>Exit</button>}
                </div>
                </Html>
            </BBAnchor> 
             {/* <BBAnchor anchor={[1,3.5,1]}>
                <Html center>
                <div className="productDisplay cooler"><h6>Mi 3D Cooler</h6> <a href="#" target={"_blank"}>Buy now</a></div>
                </Html>
            </BBAnchor>  */}
            </primitive>
            }

            <primitive object={modelProduct1.scene} position={[-27,-0.6,-7]} rotation={[0,-5,0]} scale={[2,2,2]}>
            {/* <BBAnchor anchor={[1,3.5,1]}>
                <Html center>
                <div className="productDisplay cooler"><h6>Mi 3D Cooler</h6> <a href="#" target={"_blank"}>Buy now</a></div>
                </Html>
            </BBAnchor>  */}
            </primitive>
            <primitive object={modelProduct2.scene} position={[-27.5,-0.6,-12]} scale={[2.4,2.4,2.4]}>
            </primitive>

            {/* //REACT  */}
            <primitive object={modelProduct3.scene} position={[-11,0.8,-16]} scale={[3,3,3]} ref={reactRef} name="React">
            {/* { inReactRadius && */}
            <BBAnchor anchor={[0.4,1.2,0]}>
                <Html center>
                <div className="productDisplay react">
                    <div  style={{ display: inReactRadius ? "block": "none"}}>
                    <h6>React Course</h6> 
                    { !showEnrollForm ? 
                    <a onClick={()=>setShowEnrollForm(!showEnrollForm)}>Enroll Now</a>
                    :
                    <div className="enrollment-box">
                        <form>
                            <input type="text" id="name" name="name" placeholder="Enter name"/>
                            <input type="text" id="designation" name="designation" placeholder="Enter Designation"/>
                            <button type="submit" onClick={(e)=>handleEnrollSubmit(e,"React")}>Submit</button>
                        </form>
                    </div>
                    }
                    </div>
                </div>
                </Html>
            </BBAnchor>
            {/* } */}
            </primitive>

            {/* // Javascript */}
            <primitive object={modelProduct4.scene} position={[-13.5,0.50,-10]} scale={[3,3,3]} ref={jsRef} name="Js">
            <BBAnchor anchor={[1,2.5,4]}>
                <Html center>
                <div className="productDisplay js">
                <div  style={{ display: inJsRadius ? "block": "none"}}>
                    <h6>Javascript Course<span>10% Off</span> </h6>
                    { !showEnrollForm ? 
                    <a onClick={()=>setShowEnrollForm(!showEnrollForm)}>Enroll Now</a>
                    :
                    <div className="enrollment-box">
                        <form>
                            <input type="text" id="name" name="name" placeholder="Enter name"/>
                            <input type="text" id="designation" name="designation" placeholder="Enter Designation"/>
                            <button type="submit" onClick={(e)=>handleEnrollSubmit(e,"Js")}>Submit</button>
                        </form>
                    </div>
                    }
                </div>
                </div>
                </Html>
            </BBAnchor>
            </primitive>

            {/* // Amazon */}
            <primitive object={modelProduct5.scene} position={[-4,0.8,-12]} scale={[0.003,0.003,0.003]} name="Google"/>
            
            {/* // Google */}
            <primitive object={modelProduct6.scene} position={[-4,1.6,-22]} scale={[0.01,0.01,0.01]} name="Amazon"/>
          
        </>
    );
}

export default Player;