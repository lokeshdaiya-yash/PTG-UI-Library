import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('assets/scene.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.15, 3.47, 1.29]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.12, 0.12, 0]}>
          <mesh geometry={nodes.BezierCurve001_0.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.BezierCurve001_1.geometry} material={materials['Page.001']} />
          <mesh geometry={nodes.BezierCurve001_2.geometry} material={materials['BookCover.001']} />
          <mesh geometry={nodes.BezierCurve001_3.geometry} material={materials['BookInlet.001']} />
          <mesh geometry={nodes.BezierCurve001_4.geometry} material={materials['Page2.001']} />
          <mesh geometry={nodes.BezierCurve001_5.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-3.43, -2.14, 1.43]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes['Canvas_-_Heavy_Splat_0'].geometry} material={materials['Artwork_-_Heavy_Splat.001']} />
        </group>
        <group scale={[3.49, 3.53, 1.37]}>
          <mesh geometry={nodes.Cube_0.geometry} material={materials['BookEdge.001']}

          />
          <mesh geometry={nodes.Cube_1.geometry} material={materials['Black_Wall.001']}

          />
        </group>
        <group position={[-2.26, -1.21, 0.58]} rotation={[-0.37, 0.69, 0.54]}>
          <mesh geometry={nodes.Cube000_0.geometry} material={materials['Cushion_Grey.001']} />
        </group>
        <mesh geometry={nodes.Cube001_0.geometry} material={materials['Ceiling.001']}
        />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials['Wood_Floor.001']} />
        <group scale={[1, 1, 0.63]}>
          <mesh geometry={nodes.Cube003_0.geometry} material={materials['Indoor_Wall.001']} />
        </group>
        <group position={[-2.09, -1.05, 0.58]} rotation={[-0.36, 0.73, 0.52]} scale={0.24}>
          <mesh geometry={nodes.Cube004_0.geometry} material={materials['Cushion_Grey.001']} />
        </group>
        <group position={[-2.22, 1.99, 0.57]} rotation={[0.53, 0.63, -0.79]} scale={0.24}>
          <mesh geometry={nodes.Cube006_0.geometry} material={materials['Cushion_Grey.001']} />
        </group>
        <group position={[-2.28, 2.21, 0.59]} rotation={[0.49, 0.62, -0.74]}>
          <mesh geometry={nodes.Cube007_0.geometry} material={materials['Cushion_Grey.001']} />
        </group>
        <group position={[0.01, 0.83, -0.01]} scale={[0.01, 0.68, 0.01]}>
          <mesh geometry={nodes.Cube008_0.geometry} material={materials['Material.001']} />
        </group>
        <group position={[-1.57, -1.92, 0.16]} rotation={[0, 1.57, 0]} scale={0.18}>
          <group position={[-0.97, -0.01, 0]} rotation={[0, -1.57, 0]} scale={0.8}>
            <mesh geometry={nodes.Cube054_0.geometry} material={materials['Material.009']} />
          </group>
          <mesh geometry={nodes.Cube055_0.geometry} material={materials['Metal_Table_Legs.001']} />
          <mesh geometry={nodes.Cube055_1.geometry} material={materials['Black_Plastic.001']} />
        </group>
        <group position={[-1.64, -1.75, 0.19]} rotation={[0, 1.57, 0]} scale={0.18}>
          <group position={[-1.12, -0.93, -0.91]} rotation={[0, -1.57, 0]}>
            <mesh geometry={nodes.Cube052_0.geometry} material={materials['Material.009']} />
          </group>
          <mesh geometry={nodes.Cube058_0.geometry} material={materials['Metal_Table_Legs.001']} />
          <mesh geometry={nodes.Cube058_1.geometry} material={materials['Black_Plastic.001']} />
        </group>
        <group position={[-3.37, -1.17, 2.67]} scale={0.01}>
          <mesh geometry={nodes.Cylinder_0.geometry} material={materials['Cylinder.001']} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Translucent_Blinds.001']} />
        </group>
        <group position={[-3.37, 3.15, 2.67]} scale={0.01}>
          <mesh geometry={nodes.Cylinder002_0.geometry} material={materials['Cylinder.001']} />
          <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Translucent_Blinds.001']} />
        </group>
        <group position={[-3.37, 0.12, 2.67]} scale={0.01}>
          <mesh geometry={nodes.Cylinder003_0.geometry} material={materials['Cylinder.001']} />
          <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Translucent_Blinds.001']} />
        </group>
        <group position={[-3.37, 1.85, 2.67]} scale={0.01}>
          <mesh geometry={nodes.Cylinder004_0.geometry} material={materials['Cylinder.001']} />
          <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Translucent_Blinds.001']} />
        </group>
        <group position={[-0.61, 0.32, 0]}>
          <group position={[-1.83, -1.9, 0.4]} rotation={[0, 0, 0.2]} scale={[0.01, 0.01, 0.05]}>
            <group position={[0, 0, 8.28]} rotation={[0, 0, 0.58]} scale={[26.86, 26.86, 6.55]}>
              <group position={[0, 0, -0.03]} scale={[0.02, 0.02, 0.93]}>
                <group position={[0, 0, 0.04]} rotation={[-0.64, 0, 0]} scale={[45.48, 42.85, 15.27]}>
                  <group scale={[0.02, 0.02, 1.07]}>
                    <group rotation={[0, 0, -0.28]} scale={[45.48, 45.48, 0.93]}>
                      <mesh geometry={nodes.decoration_globe_globe_0.geometry} material={materials['decoration_globe_globe.001']} />
                      <mesh geometry={nodes.decoration_globe_globe_1.geometry} material={materials['decoration_globe_chrome.001']} />
                    </group>
                    <mesh geometry={nodes.decoration_globe_pinpoles_0.geometry} material={materials['decoration_globe_chrome.001']} />
                  </group>
                  <mesh geometry={nodes.decoration_globe_arch001_0.geometry} material={materials['decoration_globe_chrome.001']} />
                </group>
                <mesh geometry={nodes.decoration_globe_pin_0.geometry} material={materials['decoration_globe_chrome.001']} />
              </group>
              <mesh geometry={nodes.decoration_globe_arch000_0.geometry} material={materials['decoration_globe_chrome.001']} />
            </group>
            <mesh geometry={nodes.decoration_globe_base_0.geometry} material={materials['decoration_globe_chrome.001']} />
          </group>
        </group>
        <group position={[-0.35, 0.64, 0.01]} rotation={[0, 0, -0.32]} scale={0.65}>
          <mesh geometry={nodes.GlassTop_0.geometry} material={materials['GCT_Glass.001']} />
          <mesh geometry={nodes.WoodSupport001_0.geometry} material={materials['GCT_Wood.001']} />
          <mesh geometry={nodes.WoodSupport002_0.geometry} material={materials['GCT_Wood.001']} />
        </group>
        <group position={[-1.53, -1.92, 0.35]} scale={0.48}>
          <group position={[-0.05, 0, 0.08]} rotation={[1.57, 0, 0]}>
            <group position={[0.02, 0, 0]}>
              <mesh geometry={nodes.grass_decoration_blade_001001_0.geometry} material={materials['Material.007']} />
            </group>
            <group position={[0.03, 0, 0]}>
              <mesh geometry={nodes.grass_decoration_blade_001002_0.geometry} material={materials['Material.007']} />
            </group>
            <group position={[0.05, 0, 0]}>
              <mesh geometry={nodes.grass_decoration_blade_001003_0.geometry} material={materials['Material.007']} />
            </group>
            <group position={[0.06, 0, 0]}>
              <mesh geometry={nodes.grass_decoration_blade_001004_0.geometry} material={materials['Material.007']} />
            </group>
            <group position={[0.08, 0, 0]}>
              <mesh geometry={nodes.grass_decoration_blade_001005_0.geometry} material={materials['Material.007']} />
            </group>
            <group position={[0.09, 0, 0]}>
              <mesh geometry={nodes.grass_decoration_blade_001006_0.geometry} material={materials['Material.007']} />
            </group>
            <mesh geometry={nodes.grass_decoration_blade_001_0.geometry} material={materials['Material.007']} />
          </group>
          <mesh geometry={nodes.grass_decoration_dirt_0.geometry} material={materials['grass_decoration_dirt_001.001']} />
          <mesh geometry={nodes.grass_decoration_vase_0.geometry} material={materials['grass_decoration_ceramic_001.001']} />
        </group>
        <group position={[-0.68, -0.88, 0.26]} rotation={[-0.3, 0.72, 0.59]}>
          <mesh geometry={nodes.Plane_0.geometry} material={materials['Blankey.001']} />
        </group>
        <group position={[-1.89, 1.22, 0.43]} rotation={[0.46, 1.4, -0.55]} scale={0.76}>
          <mesh geometry={nodes.Plane001_0.geometry} material={materials['Blankey.001']} />
        </group>
        <group position={[-0.72, 3.46, 0]}>
          <mesh geometry={nodes.Plane004_0.geometry} material={materials['Material.014']} />
        </group>
        <group position={[-0.82, 3.36, 0.99]} rotation={[Math.PI, 0, 3]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane005_0.geometry} material={materials['BookCover_Paradise.001']} />
          <mesh geometry={nodes.Plane005_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane005_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.83, 3.42, 0.93]} rotation={[-Math.PI, 0, -2.8]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane007_0.geometry} material={materials['BookCover_Interior.001']} />
          <mesh geometry={nodes.Plane007_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane007_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.04, 3.38, 0.91]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane008_0.geometry} material={materials['BookCover_Colors.001']} />
          <mesh geometry={nodes.Plane008_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane008_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.02, 3.42, 0.91]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane015_0.geometry} material={materials['BookCover_StayingTrue.001']} />
          <mesh geometry={nodes.Plane015_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-1.03, 3.35, 0.18]} rotation={[0, 1.57, 0]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane018_0.geometry} material={materials['BookCover_Japanese.001']} />
          <mesh geometry={nodes.Plane018_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane018_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.98, 3.37, 0.18]} rotation={[0, 1.57, 0]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane019_0.geometry} material={materials['BookCoverArchitecture.001']} />
          <mesh geometry={nodes.Plane019_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane019_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.92, 3.37, 0.18]} rotation={[0, 1.57, 0]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane020_0.geometry} material={materials['BookCover_Interior.001']} />
          <mesh geometry={nodes.Plane020_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane020_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.04, 3.37, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane021_0.geometry} material={materials['BookCover_Compositing.001']} />
          <mesh geometry={nodes.Plane021_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane021_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.3, 3.41, 0.65]} rotation={[-Math.PI, 0, 3.08]}>
          <mesh geometry={nodes.Plane022_0.geometry} material={materials['BookCover_Cycles.001']} />
          <mesh geometry={nodes.Plane022_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane022_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.32, 3.41, 0.62]} rotation={[-Math.PI, 0, -2.87]}>
          <mesh geometry={nodes.Plane023_0.geometry} material={materials['BookCover_SpaceTravel.001']} />
          <mesh geometry={nodes.Plane023_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane023_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.31, 3.41, 0.59]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh geometry={nodes.Plane024_0.geometry} material={materials['BookCover_Compositing.001']} />
          <mesh geometry={nodes.Plane024_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane024_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.34, 3.41, 0.57]} rotation={[-Math.PI, 0, 3]}>
          <mesh geometry={nodes.Plane025_0.geometry} material={materials['BookCover_Frozen.001']} />
          <mesh geometry={nodes.Plane025_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane025_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.59, 3.39, 0.56]} rotation={[-Math.PI, 1.23, -Math.PI]}>
          <mesh geometry={nodes.Plane026_0.geometry} material={materials['BookCover_Compositing.001']} />
          <mesh geometry={nodes.Plane026_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane026_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.02, 3.42, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane027_0.geometry} material={materials['BookCover_Manual.001']} />
          <mesh geometry={nodes.Plane027_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-1, 3.43, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane028_0.geometry} material={materials['BookCover_Competition.001']} />
          <mesh geometry={nodes.Plane028_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-0.98, 3.38, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane029_0.geometry} material={materials['BookCover_Colors.001']} />
          <mesh geometry={nodes.Plane029_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane029_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.87, 3.33, 0.18]} rotation={[0, 1.57, 0]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane030_0.geometry} material={materials['LeatherBook.001']} />
          <mesh geometry={nodes.Plane030_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane030_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.4, 3.36, 0.55]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane031_0.geometry} material={materials['BookCover_Cycles.001']} />
          <mesh geometry={nodes.Plane031_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane031_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.42, 3.42, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane032_0.geometry} material={materials['BookCover_Manual.001']} />
          <mesh geometry={nodes.Plane032_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-0.45, 3.37, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane033_0.geometry} material={materials['BookCover_Cycles.001']} />
          <mesh geometry={nodes.Plane033_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane033_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.47, 3.42, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane034_0.geometry} material={materials['BookCover_Fear.001']} />
          <mesh geometry={nodes.Plane034_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-0.65, 3.4, 0.57]} rotation={[-Math.PI, 1.14, -Math.PI]}>
          <mesh geometry={nodes.Plane035_0.geometry} material={materials['BookCover_Colors.001']} />
          <mesh geometry={nodes.Plane035_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane035_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.76, 3.4, 0.57]} rotation={[-Math.PI, 0.86, -Math.PI]}>
          <mesh geometry={nodes.Plane036_0.geometry} material={materials['BookCover_Frozen.001']} />
          <mesh geometry={nodes.Plane036_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane036_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.4, 3.39, 1.3]} rotation={[-Math.PI, 0, -2.96]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane037_0.geometry} material={materials['BookCover_Japanese.001']} />
          <mesh geometry={nodes.Plane037_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane037_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.19, 3.39, 0.19]} rotation={[-Math.PI, 1.04, -Math.PI]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane038_0.geometry} material={materials['BookCover_Japanese.001']} />
          <mesh geometry={nodes.Plane038_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane038_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.44, 3.42, 0.18]} rotation={[-Math.PI, 1.42, -Math.PI]}>
          <mesh geometry={nodes.Plane039_0.geometry} material={materials['BookCover_StayingTrue.001']} />
          <mesh geometry={nodes.Plane039_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-0.5, 3.42, 0.18]} rotation={[-Math.PI, 1.29, -Math.PI]}>
          <mesh geometry={nodes.Plane040_0.geometry} material={materials['BookCover_Competition.001']} />
          <mesh geometry={nodes.Plane040_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-0.54, 3.42, 0.19]} rotation={[0, 0.58, 0]}>
          <mesh geometry={nodes.Plane041_0.geometry} material={materials['BookCover_Compositing.001']} />
          <mesh geometry={nodes.Plane041_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane041_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.6, 3.42, 0.19]} rotation={[0, 0.61, 0]}>
          <mesh geometry={nodes.Plane042_0.geometry} material={materials['BookCover_Colors.001']} />
          <mesh geometry={nodes.Plane042_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane042_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.14, 3.55, 0.21]} rotation={[-Math.PI, 0, -0.2]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane043_0.geometry} material={materials['BookCover_Interior.001']} />
          <mesh geometry={nodes.Plane043_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane043_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.11, 3.42, 0.91]} rotation={[0, 1.57, 0]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane044_0.geometry} material={materials['BookCover_Japanese.001']} />
          <mesh geometry={nodes.Plane044_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane044_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.37, 3.37, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane045_0.geometry} material={materials['BookCover_Colors.001']} />
          <mesh geometry={nodes.Plane045_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane045_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.35, 3.41, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane046_0.geometry} material={materials['BookCover_StayingTrue.001']} />
          <mesh geometry={nodes.Plane046_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-1.4, 3.41, 0.56]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane047_0.geometry} material={materials['BookCover_Competition.001']} />
          <mesh geometry={nodes.Plane047_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-1.32, 3.33, 0.57]} rotation={[Math.PI / 2, 1.36, -Math.PI / 2]}>
          <mesh geometry={nodes.Plane048_0.geometry} material={materials['BookCover_Compositing.001']} />
          <mesh geometry={nodes.Plane048_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane048_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1, 3.34, 0.91]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane049_0.geometry} material={materials['BookCover_Compositing.001']} />
          <mesh geometry={nodes.Plane049_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane049_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.96, 3.39, 1.29]} rotation={[-Math.PI, 0.85, -Math.PI]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane050_0.geometry} material={materials['BookCover_Japanese.001']} />
          <mesh geometry={nodes.Plane050_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane050_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.99, 3.41, 1.27]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane051_0.geometry} material={materials['BookCover_Fear.001']} />
          <mesh geometry={nodes.Plane051_1.geometry} material={materials['BookEdge.001']} />
        </group>
        <group position={[-1.04, 3.35, 1.27]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane052_0.geometry} material={materials['BookCover_Cycles.001']} />
          <mesh geometry={nodes.Plane052_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane052_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-1.02, 3.35, 1.27]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes.Plane053_0.geometry} material={materials['BookCover_Frozen.001']} />
          <mesh geometry={nodes.Plane053_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane053_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.8, 3.35, 1.4]} rotation={[-Math.PI, 0, -3.1]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane055_0.geometry} material={materials['BookCover_Japanese.001']} />
          <mesh geometry={nodes.Plane055_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane055_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.81, 3.35, 1.3]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane056_0.geometry} material={materials['BookCover_Lighting.001']} />
          <mesh geometry={nodes.Plane056_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane056_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-0.81, 3.35, 1.35]} rotation={[-Math.PI, 0, 3.07]} scale={[1, 1, 0.8]}>
          <mesh geometry={nodes.Plane057_0.geometry} material={materials['BookCoverArchitecture.001']} />
          <mesh geometry={nodes.Plane057_1.geometry} material={materials['BookEdge.001']} />
          <mesh geometry={nodes.Plane057_2.geometry} material={materials['Stripy_Edge.001']} />
        </group>
        <group position={[-2.29, 3.31, 0]}>
          <group position={[0.07, 0.03, 0.4]} rotation={[-0.65, 0.02, -1.59]} scale={0.04}>
            <mesh geometry={nodes.Swiss_Cheese_LeafA002_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[0.01, -0.05, 0.45]} rotation={[0.17, 0.63, 2.86]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafA003_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.09, -0.03, 1.17]} rotation={[0.21, 0.62, 2.79]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafA004_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.15, 0.01, 1.4]} rotation={[0.61, -0.23, 1.26]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafA005_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.13, 0, 1.49]} rotation={[0.55, -0.37, 1.03]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafA006_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.01, -0.05, 0.56]} rotation={[0.64, 0, 2.87]} scale={0.04}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB000_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.11, -0.04, 0.37]} rotation={[0, 0, 0.47]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB002_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.07, -0.14, 0.56]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={-0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB004_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.23, -0.2, 0.7]} rotation={[0, 0, 1]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB005_0.geometry} material={materials['Swiss_Cheese_LeafB.001']} />
          </group>
          <group position={[-0.05, 0.04, 0.73]} rotation={[-0.64, 0.06, -0.35]} scale={0.04}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB006_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[0.15, 0.17, 0.7]} rotation={[0.11, -0.15, -2.22]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB007_0.geometry} material={materials['Swiss_Cheese_LeafB.001']} />
          </group>
          <group position={[0.01, 0.14, 0.73]} rotation={[-Math.PI, 0, -1.47]} scale={-0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB008_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.06, -0.01, 0.93]} rotation={[-0.01, 0.02, -0.31]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB009_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.16, 0.22, 1.34]} rotation={[0.18, 0.03, -1.15]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB010_0.geometry} material={materials['Swiss_Cheese_LeafB.001']} />
          </group>
          <group position={[-0.05, -0.02, 1.1]} rotation={[0.34, 0.56, -2.43]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB011_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[0.01, -0.04, 1.26]} rotation={[-Math.PI, 0, 0.49]} scale={-0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB012_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.29, -0.02, 1.38]} rotation={[0.29, -1.03, -2.6]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB013_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[-0.01, -0.17, 1.2]} rotation={[-0.19, 0.18, 1.86]} scale={0.07}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB014_0.geometry} material={materials['Swiss_Cheese_LeafB.001']} />
          </group>
          <group position={[-0.25, 0.09, 1.28]} rotation={[-0.23, -0.11, 3.06]} scale={0.07}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB015_0.geometry} material={materials['Swiss_Cheese_LeafB.001']} />
          </group>
          <group position={[0.13, -0.03, 0.33]} rotation={[-0.26, 0.15, 2.34]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB016_0.geometry} material={materials['Swiss_Cheese_LeafB.001']} />
          </group>
          <group position={[-0.08, 0.03, 1]} rotation={[-3, 0.15, -2.11]} scale={-0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB017_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[0, -0.02, 0.73]} rotation={[0.83, -0.13, 2.02]} scale={0.04}>
            <mesh geometry={nodes.Swiss_Cheese_LeafB018_0.geometry} material={materials['Swiss_Cheese_LeafA.001']} />
          </group>
          <group position={[0, 0.1, 0.9]} rotation={[0, 0, -1.67]} scale={0.04}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD002_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.08, -0.01, 1.06]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={-0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD003_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.02, 0.01, 0.59]} rotation={[Math.PI, 0, -2.3]} scale={-0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD004_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.04, 0.01, 0.54]} rotation={[-Math.PI, 0, 2.81]} scale={-0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD005_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.05, -0.02, 0.93]} rotation={[0, 0, 2.48]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD006_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.08, 0.01, 1.26]} rotation={[-Math.PI, 0, 2.91]} scale={-0.07}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD007_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.14, -0.03, 1.37]} rotation={[0.05, -0.15, 1.99]} scale={0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD008_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.14, -0.03, 0.93]} rotation={[0, 0, 0.75]} scale={0.05}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD009_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.06, -0.03, 1.01]} rotation={[Math.PI, 0, -0.95]} scale={-0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD010_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[-0.12, 0.04, 1.61]} rotation={[2.59, 0.11, 0.65]} scale={-0.06}>
            <mesh geometry={nodes.Swiss_Cheese_LeafD011_0.geometry} material={materials['Swiss_Cheese_LeafC.001']} />
          </group>
          <group position={[0, -0.01, 0.22]}>
            <mesh geometry={nodes.Swiss_Cheese_Plant_Dirt_0.geometry} material={materials['Swiss_Cheese_Plant_Dirt.001']} />
          </group>
          <group position={[0, -0.01, 0.17]}>
            <mesh geometry={nodes.Swiss_Cheese_Plant_Pot_0.geometry} material={materials['Swiss_Cheese_Plant_Pot.001']} />
          </group>
          <group position={[-0.01, 0, 0.05]}>
            <mesh geometry={nodes.Swiss_Cheese_Plant_Stalk_0.geometry} material={materials['Swiss_Cheese_Plant_Stalk.001']} />
          </group>
        </group>
        <group position={[-0.34, 0.65, 0]}>
          <group position={[0, 0, 0.01]}>
            <mesh geometry={nodes.rug_furry_brown_0.geometry} material={materials['rug_furry_brown_undermat.001']} />
          </group>
        </group>
        <group position={[-2.17, 1.9, 0]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[-1.41, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_back_0.geometry} material={materials['triple_sofa_fabric.001']} material-color={"#8d9191"} />
          </group>
          <group position={[-2.81, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_backcushions_0.geometry} material={materials['triple_sofa_fabric.001']} />
          </group>
          <group position={[-2.81, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_chaise_0.geometry} material={materials['triple_sofa_fabric.001']} />
          </group>
          <group position={[-2.81, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_chaisebase_0.geometry} material={materials['triple_sofa_fabric.001']} />
          </group>
          <group position={[-1.41, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_chorddetail_0.geometry} material={materials['Material.011']} />
          </group>
          <group position={[0.58, -0.61, 0]}>
            <group position={[0, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot001_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot001_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-1.89, 0, 0]}>
              <mesh geometry={nodes.triple_sofa_foot002_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot002_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-1.89, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot003_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot003_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-2.08, 0, 0]}>
              <mesh geometry={nodes.triple_sofa_foot004_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot004_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-2.08, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot005_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot005_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-2.83, 0, 0]}>
              <mesh geometry={nodes.triple_sofa_foot006_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot006_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-2.83, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot007_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot007_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-3.01, -1.13, 0]}>
              <mesh geometry={nodes.triple_sofa_foot008_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot008_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-3.01, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot009_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot009_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-3.78, -1.13, 0]}>
              <mesh geometry={nodes.triple_sofa_foot010_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot010_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-3.78, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot011_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot011_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-3.99, 0, 0]}>
              <mesh geometry={nodes.triple_sofa_foot012_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot012_1.geometry} material={materials['Material.013']} />
            </group>
            <group position={[-3.99, 1.08, 0]}>
              <mesh geometry={nodes.triple_sofa_foot013_0.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.triple_sofa_foot013_1.geometry} material={materials['Material.013']} />
            </group>
            <mesh geometry={nodes.triple_sofa_foot000_0.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.triple_sofa_foot000_1.geometry} material={materials['Material.013']} />
          </group>
          <group position={[-1.41, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_pillows_0.geometry} material={materials['triple_sofa_fabric.001']} />
          </group>
          <group position={[-0.01, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_seats_0.geometry} material={materials['triple_sofa_fabric.001']} />
            <mesh geometry={nodes.triple_sofa_seats_0001.geometry} material={materials['triple_sofa_fabric.001']} />
          </group>
          <group position={[-1.41, 0, 0]}>
            <mesh geometry={nodes.triple_sofa_sides_0.geometry} material={materials['triple_sofa_fabric.001']} />
          </group>
          <mesh geometry={nodes.triple_sofa_base_0.geometry} material={materials['triple_sofa_fabric.001']} />
        </group>
        <group position={[-3.42, 0.99, 0.03]} rotation={[0, 0, -Math.PI / 2]} scale={[1.03, 1, 1]}>
          <mesh geometry={nodes.Window002_0.geometry} material={materials['material.001']} />
          <mesh geometry={nodes.Window002_1.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window002_2.geometry} material={materials['Glass.001']} />
          <mesh geometry={nodes.Window002_3.geometry} material={materials['Marble.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/scene.glb')
