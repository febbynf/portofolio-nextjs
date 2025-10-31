import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Particles from "./components/Particles/Particles";
import NavBar from "./components/NavBar";
import AnimatedCounter from "./components/AnimatedCounter";

export default function Home() {
  return (
   <div className = "min-h-screen overflow-x-hidden bg-black">

       <div className="absolute top-0 left-0 w-full h-full right-0 bottom-0">
           <Particles
               particleColors={['#ffffff', '#ffffff']}
               particleCount={200}
               particleSpread={10}
               speed={0.1}
               particleBaseSize={100}
               moveParticlesOnHover={true}
               alphaParticles={false}
               disableRotation={false}
           >
           </Particles>
       </div>

       <div className="container mx-auto h-screen">
           <NavBar />
           <div className="grid grid-cols-12">
               <div className="col-span-6">
                   <div className="flex items-center h-full">
                       <div className="flex flex-col gap-6">
                           <AnimatedContent>
                               <div className="flex items-center gap-2">
                                   <h1 className="text-4xl text-white font-bold">I'm</h1>
                                   <RotatingText
                                       texts={['Web Developer', 'Web Design', 'Backend Dev', 'Fullstack Dev']}
                                       mainClassName="px-2 sm:px-2 md:px-3 bg-[#E87779] text-black overflow-hidden py-0.5 sm:py-1
                                        justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                                       staggerFrom={"last"}
                                       initial={{ y: "100%" }}
                                       animate={{ y: 0 }}
                                       exit={{ y: "-120%" }}
                                       staggerDuration={0.025}
                                       splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                       transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                       rotationInterval={2000}
                                   />
                               </div>
                           </AnimatedContent>
                           <div className="flex flex-col items-start">
                               <SplitText
                                   text="Hi! I'm Febby"
                                   className="text-6xl font-semibold text-start text-[#ffffff]"
                                   delay={100}
                                   duration={0.6}
                                   splitType="chars"
                                   from={{ opacity: 0, y: 40 }}
                                   to={{ opacity: 1, y: 0 }}
                                   threshold={0.1}
                                   rootMargin="-50px"/>
                               <SplitText
                                   text="Coding by Design, Creating by Passion"
                                   className="text-2xl font-semibold text-start text-[#E87779]"
                                   delay={100}
                                   duration={0.6}
                                   splitType="chars"
                                   from={{ opacity: 0, y: 40 }}
                                   to={{ opacity: 1, y: 0 }}
                                   threshold={0.1}
                                   rootMargin="-50px"/>
                           </div>
                           <BlurText
                               text="A Software Engineer with over seven years of experience in web application development. Highly adaptable, strong in problem-solving, and passionate about learning new technologies."
                               delay={75}
                               animateBy="words"
                               direction="top"
                               // onAnimationComplete={handleAnimationComplete}
                               className="text-xl mb-8 text-white"/>
                       </div>
                   </div>
               </div>
               <div className="col-span-6">
                   <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]}/>
               </div>
           </div>
           <AnimatedCounter />
       </div>
   </div>
  );
}
