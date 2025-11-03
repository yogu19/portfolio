import React from "react";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "../Components/HackerRoom";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";

import Target from "../Components/Target";
import Rings from "../Components/Rings.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import HeroCamera from "../Components/HeroCamera.jsx";
import Button from "../Components/Button.jsx";
import CanvasLoader from "../Components/CanvasLoader.jsx";

const Hero = () => {
  // const x = useControls("HackerRoom", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: -23, min: -10, max: 10 },
  //   positionZ: { value: -10, min: -10, max: 10 },
  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 3.2, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },
  //   scale: { value: 0.2, min: 0.1, max: 10 },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-10 c-space gap-3 z-20">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Bhishmesh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          Building Brands and Products
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva hidden />
        <Canvas className="w-full h-full mt-10">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 rigth-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          ></Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
