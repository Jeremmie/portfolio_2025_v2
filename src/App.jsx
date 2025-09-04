import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import {
  OrbitControls,
  PerspectiveCamera,
  CameraControls,
  CameraControlsImpl,
  Fisheye,
  Html,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { BlendFunction } from "postprocessing";
import "./Content/Html/HtmlContent.css";
import { BoxGeometry, Mesh } from "three";
import { animate, svg, utils } from "animejs";
import HtmlContent from "./Content/Html/HtmlContent";
import Numa from "./Content/Numa/Numa";
import Popof from "./Content/Popof/Popof";
import MarvelousDesigner from "./Content/Marvelous_designer/MarvelousDesigner";
import { time } from "three/tsl";
import MainScene from "./MainScene";
import * as THREE from "three"

const { ACTION } = CameraControlsImpl;

function App() {
  const controlsRef = useRef(null);





  return (
    <>
      {/* Try to Put [10, 0, 5] to see what I mean*/}
      <Canvas >
        <Perf />

        <OrbitControls mouseButtons={{
          LEFT: THREE.MOUSE.PAN,
        }} autoRotate={false} enableRotate={false} enableZoom={true} enablePan={true} />

        <Html >
          yo
        </Html>

        <MainScene />

        {/*
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        */}
      </Canvas>
    </>
  );
}

export default App;
