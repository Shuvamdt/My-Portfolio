import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../Models/CanvasLoader";
import { HackerRoom } from "../Models/HackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Constants";
import Target from "./Target";
import ReactLogo from "./ReactLogo";
import Cube from "./Cube";
import Rings from "./Rings";
import HeroCamera from "./HeroCamera";
import ButtonHero from "./ButtonHero";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Shuvam <span className="waving-hand">👋</span>
        </p>
        <p className="text-center text-gray_gradient">
          Building a better future
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <ButtonHero
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
