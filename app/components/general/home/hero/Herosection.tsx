"use client";
import Image from "next/image";
import Animation from "./animation";
import LinkButton from "../../linkButton";
import { LuArrowRight } from "react-icons/lu";
import Particles from "./particles";

export default function HeroSection() {
  return (
    <section id="home" className="h-screen relative flex justify-center items-center overflow-hidden flex-col bg-[#050709]">
      
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={250}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true} 
          alphaParticles={false} 
          disableRotation={false}
          pixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        
        <div className="w-37.5 h-37.5 md:w-50 md:h-50 relative pointer-events-auto" data-aos="fade-up">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-xl animate-pulse opacity-50" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src="/images/yab.JPG"
              alt="Yab Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-10 text-center px-4 flex flex-col items-center gap-8 pointer-events-auto">
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
            Hi, i'm a web developer
          </h1>
          
          <Animation />

          <LinkButton
            href="#projects"
            text="See my work"
            icon={LuArrowRight}
            rounded
            aosType="fade-up"
            aosDelay={450}
            animate
          />
        </div>
      </div>
    </section>
  );
}
