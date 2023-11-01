// import React, { useRef, useEffect, Suspense } from "react";
// import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
// import { useEffect } from "react/cjs/react.production.min";

import React, { Suspense, useEffect, useRef, useState } from 'react';

import { useFrame, useThree } from '@react-three/fiber';

import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

import { useInput } from '../hooks/useInput';

import * as THREE from 'three';

// let direction = {
//     'forward': any,
//     'backward': any,
//     'left': any,
//     'right': any
// }

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3(0, 1, 0);

const directionOffset = ({ forward, backward, left, right }) => {
  var directionOffset = 0;

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

export default function Suit(props) {
  const { forward, backward, left, right, jump, shift, openDoor } = useInput();

  //   const group = useRef();
  //   const { nodes, materials, animations } = useGLTF("/miAvator_new.glb");
  //   const { actions } = useAnimations(animations, group);

  const group = useRef();
  const time = useRef(0);
  //@ts-ignore
  const { nodes, materials, animations, scene } = useGLTF(
    './assets/miAvator_new.glb'
  );
  const { actions, names } = useAnimations(animations, group);
  console.log('names', names);
  //   useEffect(() =>{
  //     actions[names[2]].reset().fadeIn(0.5).play();
  //   }, []);

  scene.scale.set(0.5, 0.5, 0.5);

  scene.traverse((object) => {
    //@ts-ignore
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  const currentAction = useRef('');
  //@ts-ignore
  const controlsRef = useRef < typeof OrbitControls > '';
  const camera = useThree((state) => state.camera);

  //to update the camera position
  const updateCameraTarget = (moveX, moveZ) => {
    //move camera
    camera.position.x += moveX;
    camera.position.z += moveZ;

    //update camera target
    cameraTarget.x = scene.position.x;
    cameraTarget.y = scene.position.y + 2;
    cameraTarget.z = scene.position.z;
    //@ts-ignore
    if (controlsRef.current) {
      //@ts-ignore
      controlsRef.current.target = cameraTarget;
    }
  };

  useEffect(() => {
    let action = '';

    if (forward) {
      action = 'Walk';

      console.log('action walk updated', action);
      if (shift) {
        action = 'Run';
      }
    } else if (jump) {
      action = 'GestureDanceTwist';
    } else if (backward) {
      action = 'WalkBackward';
    } else if (left) {
      action = 'Turn';
    } else if (right) {
      action = 'Turn';
    } else {
      action = 'Idle';

      console.log('action idle updated', action);
    }

    if (currentAction.current != action) {
      console.log('currentAction.current', currentAction.current);
      console.log('action', action);
      const nextActionToPlay = actions[action];
      console.log('nextActionToPlay', nextActionToPlay);
      const current = actions[currentAction.current];
      console.log('current', current);
      current?.fadeOut(0.5);
      nextActionToPlay?.reset().fadeIn(0.5).play();
      currentAction.current = action;
      // action.Walk.play()
    }
  }, [forward, backward, left, right, jump, shift, openDoor, actions]);

  useFrame((state, delta) => {
    if (currentAction.current == 'Walk' || currentAction.current == 'Run') {
      camera.position.x -= 0.01;
      // allCalculations()
      // let anagleYCameraDirection = Math.atan2(
      //     camera.position.x - scene.position.x,

      //     camera.position.z - scene.position.z
      // )
    }
  });

  const allCalculations = () => {
    //calculate towards  camera  direction

    let anagleYCameraDirection = Math.atan2(
      camera.position.x - scene.position.x,

      camera.position.z - scene.position.z
    ); //diagonal  movement  angle  offset

    let newDirectionOffset = directionOffset({
      forward,
      backward,
      left,
      right,
    });

    //rotate  model  direction

    rotateQuaternion.setFromAxisAngle(
      rotateAngle,
      anagleYCameraDirection + newDirectionOffset
    );

    scene.quaternion.rotateTowards(rotateQuaternion, 0.2);

    //calculate  direction

    camera.getWorldDirection(walkDirection);
    walkDirection.y = 0;
    walkDirection.normalize();
    walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

    const velocity = currentAction.current == 'Run' ? 10 : 5;

    const moveX = walkDirection.x * velocity * 0.015;

    const moveZ = walkDirection.z * velocity * 0.015;

    scene.position.x += moveX;

    scene.position.z += moveZ;
    updateCameraTarget(moveX, moveZ);
  };

  useFrame((state, delta) => {
    let pos = scene.position;

    time.current += delta * 0.0001;

    let newX = pos.x - time.current;

    let newZ = pos.z - time.current;

    //  automate  the  walk  till  door

    const automateTheWalk = () => {
      pos.set(newX, pos.y, newZ);
    };
  });
  return (
    <group ref={group} {...props} dispose={null}>
      {' '}
      {/*  <group  name="Scene">  */}
      <Suspense fallback={null}>
        {/* <ambientLight intensity={0.2} /> */}
        <OrbitControls />
        <group name="Scene">
          <group name="skeleton_#7" rotation={[-Math.PI, 0.06, -Math.PI]}>
            <primitive object={nodes.Root} />
            <group name="msm_top_No7">
              <skinnedMesh
                name="msm_top_No7_1"
                geometry={nodes.msm_top_No7_1.geometry}
                material={materials.Skin_MTL}
                skeleton={nodes.msm_top_No7_1.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_2"
                geometry={nodes.msm_top_No7_2.geometry}
                material={materials.Shirt_MTL}
                skeleton={nodes.msm_top_No7_2.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_3"
                geometry={nodes.msm_top_No7_3.geometry}
                material={materials.Jacket_MTL}
                skeleton={nodes.msm_top_No7_3.skeleton}
              />
              {/* <skinnedMesh
              name="msm_top_No7_4"
              geometry={nodes.msm_top_No7_4.geometry}
              material={materials.Hair_MTL}
              skeleton={nodes.msm_top_No7_4.skeleton}
            /> */}
              <skinnedMesh
                name="msm_top_No7_5"
                geometry={nodes.msm_top_No7_5.geometry}
                material={materials.Collar_MTL}
                skeleton={nodes.msm_top_No7_5.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_6"
                geometry={nodes.msm_top_No7_6.geometry}
                material={materials.Pants_MTL}
                skeleton={nodes.msm_top_No7_6.skeleton}
              />
              {/* <skinnedMesh
              name="msm_top_No7_7"
              geometry={nodes.msm_top_No7_7.geometry}
              material={materials.FacialHair_MTL}
              skeleton={nodes.msm_top_No7_7.skeleton}
            /> */}
              <skinnedMesh
                name="msm_top_No7_8"
                geometry={nodes.msm_top_No7_8.geometry}
                material={materials.Sweater_MTL}
                skeleton={nodes.msm_top_No7_8.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_9"
                geometry={nodes.msm_top_No7_9.geometry}
                material={materials.Hoodie_MTL}
                skeleton={nodes.msm_top_No7_9.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_10"
                geometry={nodes.msm_top_No7_10.geometry}
                material={materials.SweatshirtSecondary_MTL}
                skeleton={nodes.msm_top_No7_10.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_11"
                geometry={nodes.msm_top_No7_11.geometry}
                material={materials.Braces_MTL}
                skeleton={nodes.msm_top_No7_11.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_12"
                geometry={nodes.msm_top_No7_12.geometry}
                material={materials.Jeans_Pockets_MTL}
                skeleton={nodes.msm_top_No7_12.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_13"
                geometry={nodes.msm_top_No7_13.geometry}
                material={materials.Socks_MTL}
                skeleton={nodes.msm_top_No7_13.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_14"
                geometry={nodes.msm_top_No7_14.geometry}
                material={materials.Shoes_MTL}
                skeleton={nodes.msm_top_No7_14.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_15"
                geometry={nodes.msm_top_No7_15.geometry}
                material={materials.lambert1}
                skeleton={nodes.msm_top_No7_15.skeleton}
              />
              {/* <skinnedMesh
              name="msm_top_No7_16"
              geometry={nodes.msm_top_No7_16.geometry}
              material={materials.AccessoryA_MTL}
              skeleton={nodes.msm_top_No7_16.skeleton}
            /> */}
              <skinnedMesh
                name="msm_top_No7_17"
                geometry={nodes.msm_top_No7_17.geometry}
                material={materials.AccessoryB_MTL}
                skeleton={nodes.msm_top_No7_17.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_18"
                geometry={nodes.msm_top_No7_18.geometry}
                material={materials.GlassRim_MTL}
                skeleton={nodes.msm_top_No7_18.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_19"
                geometry={nodes.msm_top_No7_19.geometry}
                material={materials.Glass_MTL}
                skeleton={nodes.msm_top_No7_19.skeleton}
              />
              <skinnedMesh
                name="msm_top_No7_20"
                geometry={nodes.msm_top_No7_20.geometry}
                material={materials.xiaomi_phone_MTL}
                skeleton={nodes.msm_top_No7_20.skeleton}
              />
            </group>
          </group>
        </group>
      </Suspense>
    </group>
  );
}

useGLTF.preload('/assets/miAvator_new.glb');
