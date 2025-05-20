
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

function ReactL(props) {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group scale={0.03} position={[8,8,0]} dispose={null} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[8.99, 8.99, 2.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactL;