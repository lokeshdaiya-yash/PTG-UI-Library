import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Models({ action }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/animatedCartoon.glb')
  const { actions } = useAnimations(animations, group)
  const previousAction = usePrevious(action)
useEffect(()=> {
  if(previousAction){
    actions[previousAction].fadeOut(.4);
    actions[previousAction].stop();
  }

  actions[action].play()
  actions[action].fadeIn(.2);
}, [action, actions, previousAction]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Boy_01_Meshes" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.BoyHips} />
          <skinnedMesh name="Boy01_Hair_Geo" geometry={nodes.Boy01_Hair_Geo.geometry} material={materials.Boy01_Hair_MAT} skeleton={nodes.Boy01_Hair_Geo.skeleton} />
          <skinnedMesh name="Boy01_Hands_Geo" geometry={nodes.Boy01_Hands_Geo.geometry} material={materials.Boy01_Hands_MAT} skeleton={nodes.Boy01_Hands_Geo.skeleton} />
          <skinnedMesh name="Boy01_Head_Geo" geometry={nodes.Boy01_Head_Geo.geometry} material={materials.Boy01_Head_MAT} skeleton={nodes.Boy01_Head_Geo.skeleton} />
          <skinnedMesh name="Boy01_LowerBody_Geo" geometry={nodes.Boy01_LowerBody_Geo.geometry} material={materials.Boy01_LowerBody_MAT} skeleton={nodes.Boy01_LowerBody_Geo.skeleton} />
          <skinnedMesh name="Boy01_Scarf_Geo" geometry={nodes.Boy01_Scarf_Geo.geometry} material={materials.Boy01_Scarf_MAT} skeleton={nodes.Boy01_Scarf_Geo.skeleton} />
          <skinnedMesh name="Boy01_Shoes_Geo" geometry={nodes.Boy01_Shoes_Geo.geometry} material={materials.Boy01_Shoes_MAT} skeleton={nodes.Boy01_Shoes_Geo.skeleton} />
          <skinnedMesh name="Boy01_UpperBody_Geo" geometry={nodes.Boy01_UpperBody_Geo.geometry} material={materials.Boy01_UpperBody_MAT} skeleton={nodes.Boy01_UpperBody_Geo.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/animatedCartoon.glb')

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
