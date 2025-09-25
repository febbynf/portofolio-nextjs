import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";

export default function Home() {
  return (
   <div className = "min-h-screen overflow-x-hidden bg-black">
       <div className="container mx-auto">
           <div className="grid grid-cols-12">
               <div className="col-span-6">
                   <div className="flex items-center gap-2">
                       <h1 className="text-2xl text-white font-bold">Hello, I'm</h1>
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
                           rotationInterval={2000}/>
                   </div>
               </div>
               <div className="col-span-6">
                   <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]}/>
               </div>
           </div>
       </div>
   </div>
  );
}
