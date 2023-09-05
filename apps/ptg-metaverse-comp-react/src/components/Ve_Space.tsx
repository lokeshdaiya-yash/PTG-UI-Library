import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
const  Ve_Space = () => {
 //@ts-ignore
  const { nodes, materials } = useGLTF(
    './assets/ve_space_048.0e4c3ace1211fc6c9bf3b1ca631abbf6bae866a7.glb'
  );
  return (
    <> <group>
      <ambientLight intensity={0.2} />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hub03_content_screen.geometry}
        material={materials.lambert1}
        position={[-21.05, 1.22, -4.21]}
        rotation={[0, -0.05, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hub02_content_screen.geometry}
        material={materials.lambert1}
        position={[-14.21, -0.53, -28.26]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hub04_content_screen.geometry}
        material={materials.lambert1}
        position={[5.17, 4.18, -38.25]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_floor_LM01_1.geometry}
        material={materials.concrete_tiles_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_floor_LM01_2.geometry}
        material={materials.reflective_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_floor_LM01_3.geometry}
        material={materials.wood_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_floor_LM01_4.geometry}
        material={materials.blue_wall_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_floor_LM01_5.geometry}
        material={materials.blue_court_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_walls_LM02_1.geometry}
        material={materials.ceiling_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_walls_LM02_2.geometry}
        material={materials.blue_wall_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_walls_LM02_3.geometry}
        material={materials.concrete_tiles_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_walls_LM02_4.geometry}
        material={materials.wood_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_walls_LM02_5.geometry}
        material={materials.reflective_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_deco_LM05_1.geometry}
        material={materials.reflective_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_deco_LM05_2.geometry}
        material={materials.rough_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_deco_LM05_3.geometry}
        material={materials.concrete_tiles_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_deco_LM05_4.geometry}
        material={materials.wood_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light_rings.geometry}
        material={materials.glow_white_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_foliage_LM04.geometry}
        material={materials.foliage_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_outdoor_LM03_1.geometry}
        material={materials.reflective_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_outdoor_LM03_2.geometry}
        material={materials.concrete_tiles_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_outdoor_LM03_3.geometry}
        material={materials.rough_atlas_mat}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ve_space_outdoor_LM03_4.geometry}
        material={materials.wood_mat}
      />
    </group></>
   

    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.ve_space_outdoor_LM03_5.geometry}
    //     material={materials.blue_wall_mat}
    //   />

    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.ve_space_outdoor_LM03_6.geometry}
    //     material={materials.poster_mat}
    //   />

    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.wall_collision_mesh.geometry}
    //     material={materials.lambert1}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.ground_collision_mesh.geometry}
    //     material={materials.lambert1}
    //   />
  );
}

useGLTF.preload('/assets/ve_space_048.0e4c3ace1211fc6c9bf3b1ca631abbf6bae866a7.glb');

export default Ve_Space;
