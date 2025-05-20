import React, { useCallback, useRef } from 'react'
import { Center, useTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Rings = ({ position = [0, 0, 0] }) => {
  const ringRefs = useRef([])

  const addToRefs = useCallback((mesh) => {
    if (mesh && !ringRefs.current.includes(mesh)) {
      ringRefs.current.push(mesh)
    }
  }, [])

  const texture = useTexture('textures/rings.png')

  useGSAP(() => {
    if (ringRefs.current.length === 0) return

    gsap.timeline({ repeat: -1, repeatDelay: 0.5 }).to(
      ringRefs.current.map((r) => r.rotation),
      {
        y: `+=${Math.PI * 2}`,
        x: `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      }
    )
  }, [position])

  return (
    <group scale={0.5} position={[-8,5,1]}>
      <Center>
        {Array.from({ length: 4 }).map((_, index) => (
          <mesh
            key={index}
            ref={addToRefs}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
          >
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </Center>
    </group>
  )
}

export default Rings
