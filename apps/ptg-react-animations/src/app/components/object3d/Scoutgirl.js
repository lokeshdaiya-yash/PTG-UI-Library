/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function Model({ action }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    'assets/scoutgirl.glb'
  );
  const { actions } = useAnimations(animations, group);
  const previousAction = usePrevious(action);
  console.log(actions);
  var count = 0;
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].stop();
    }
    actions[action].play();
  }, [action, actions]);
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="GirlScout"
            geometry={nodes.GirlScout.geometry}
            material={materials.GirlScoutZombie_Material}
            skeleton={nodes.GirlScout.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scoutgirl.glb');

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}