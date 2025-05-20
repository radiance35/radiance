import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { AmbientLight } from 'three'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { max } from 'three/tsl'
import Target from '../components/Target'
import { calculateSizes } from '../constants'
import ReactL from '../components/ReactL'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import RoomCamera from '../components/RoomCamera'
import Button from '../components/Button'

const Hero = () => {
  
  const isMobile = useMediaQuery({maxWidth:768})
  const isSmall = useMediaQuery({maxWidth:440})
  const isTablet = useMediaQuery({minWidth:768,maxWidth:1024})

  const sizes = calculateSizes(isSmall,isMobile,isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='text-white sm:text-3xl text-2xl font-medium text-center font-generalsans'>Hi, I am Priyanshu <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Learning with Projects</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
       
            <Canvas className='h-full w-full'>
                <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0,0,20]}/>
                <RoomCamera isMobile={isMobile}>
                <HackerRoom position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[-6.0,-Math.PI,-6.3]}/>
                </RoomCamera>
                <group>
                  <Target position={sizes.targetPosition} />
                  <ReactL position={sizes.reactLogoPosition} />
                  <Cube position={sizes.cubePosition}/>
                  <Rings position={sizes.ringPosition}/>
                </group>
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 w-full right-0 c-space z-10'>
          <a href="#about" className='w-fit'>
            <Button name="Let's work together"  isBean containerClass="sm:w-fit  w-full sm-min-w-96"/>
          </a>
        </div>
    </section>
  )
}

export default Hero