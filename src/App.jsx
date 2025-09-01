import { useState, useRef } from 'react'
import './App.css'
import { Canvas } from "@react-three/fiber"
import Main_scene from './MainScene'
import GridSystem from './GridSystem'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { OrbitControls, PerspectiveCamera, CameraControls, CameraControlsImpl, Fisheye, Html } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import { BlendFunction } from 'postprocessing'




const { ACTION } = CameraControlsImpl


function App() {
  const controlsRef = useRef()

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 100 }}>
        <Perf />
        <CameraControls
          ref={controlsRef}
          dollySpeed={0}        // pas de zoom
          truckSpeed={1.5}      // vitesse du pan
          mouseButtons={{
            left: ACTION.TRUCK,   // clic gauche = déplacer caméra (pan X/Y)
            middle: ACTION.NONE,
            right: ACTION.NONE,
            wheel: ACTION.NONE,
          }}
          touches={{
            one: ACTION.TRUCK,
            two: ACTION.NONE,   // pinch à deux doigts = pan aussi
            three: ACTION.NONE,
          }}
        />
        <Main_scene />
        {/*
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        */}

      </Canvas>
    </>
  )
}

export default App
