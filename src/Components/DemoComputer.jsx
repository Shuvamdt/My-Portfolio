import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";

const DemoComputer = (props) => {
  const { nodes, materials } = useGLTF(
    "/models/sci_-_fi_computer_game_ready.glb"
  );
  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.006}>
        <group
          position={[0, 128.869, 312.193]}
          rotation={[-1.469, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group
          position={[0, 481.812, -82.657]}
          rotation={[-0.229, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          >
            <meshBasicMaterial map={txt} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group
          position={[0, 100, -94.762]}
          rotation={[0, Math.PI / 2, 0]}
          scale={123.801}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group>
      </group>
    </group>
  );
};
useGLTF.preload("/models/sci_-_fi_computer_game_ready.glb");
export default DemoComputer;
