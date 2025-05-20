import { useGLTF } from '@react-three/drei'
import React from 'react'
import { Mesh } from 'three';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {

    const targetref = useRef();
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(()=>{
        gsap.to(targetref.current.position,{
            y:targetref.current.position.y+0.5,
            duration:1,
            repeat:-1,
            yoyo:true
        })
    },[])
  return (
    <mesh {...props} ref={targetref} scale={1.5} rotation={[0,Math.PI/5,0]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Target