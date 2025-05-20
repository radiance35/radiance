import { useFrame } from '@react-three/fiber';
import React from 'react'
import { useRef } from 'react';
import { easing } from 'maath';
import Target from './Target';

const RoomCamera = ({children,isMobile}) => {
    const cameraref = useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position,[0,0,20],0.25,delta)

        if(!isMobile){
            easing.dampE(cameraref.current.rotation,[-state.pointer.y/3,state.pointer.x/5,0],0.25,delta)
        }
    })
  return (
    <group ref={cameraref} scale={1.09}>{children}</group>
  )
}

export default RoomCamera