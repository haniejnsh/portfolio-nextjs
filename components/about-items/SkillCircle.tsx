"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SkillCircle() {

  const [radius, setRadius] = useState(130);
  const [center, setCenter] = useState(180);

  useEffect(() => {
    const updateValues = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setRadius(200);
        setCenter(250);
      } else {
        setRadius(130);
        setCenter(180);
      }
    };


    updateValues(); 
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

     const skills = ["CSS","Vite","Router","Redux","","Zustand","Figma","MongoDB","Git","Tailwind","TypeScript","Next.js","","React.js","JavaScript","HTML"];

 
  return (
    <div className="relative w-[360px] h-[360px] lg:w-[500px] lg:h-[500px] mx-auto">
      {/* دایره مرکزی */}
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-[var(--bg-main)] font-bold flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 border border-pink-100">
        <div className="flex justify-center items-center w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] bg-pink-100 rounded-full text-sm lg:text-lg text-pink-350">Frontend</div>
        
      </div>

      {/* دایره‌های مهارت */}
      {skills.map((skill, i) => {
       
        const angle = (360 / skills.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = center + radius * Math.cos(rad) - 35;
        const y = center + radius * Math.sin(rad) - 14;
        // //////////////////////////////////
         if(i===0 || i===8){
          return (
          <div key={skill}>
    <div
      className="absolute w-[80px] h-[25px] lg:w-[115px] lg:h-[35px] bg-pink-100 rounded-3xl flex items-center justify-start font-medium px-[2px] gap-[4px] lg:px-1 z-10"
      style={{ 
        left: window.innerWidth >= 1024 ? `${x - 24}px` : `${x}px`,
        top: window.innerWidth >= 1024 ? `${y -4}px` : `${y}px`, 
      }}
    >
      <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-white flex justify-center items-center">
        <Image
        src={`/images/skills/${skill}.png`}
        alt="skill"
        className="max-w-[12px] max-h-[12px] lg:max-w-[16px] lg:max-h-[16px]  "
        width={50}
        height={50}
        />
      </div>
      <div className="text-[10px] lg:text-[14px] lg:text-stone-500 text-stone-600 font-bold">{skill}</div>
      
    </div>
  </div>
        );
        }
        // /////////////////////////////
        if(i===12 || i===4){
          return (
          <div key={skill}>
    <div
      className="absolute w-[2px] bg-pink-100 origin-top"
      style={{
        height: `${radius}px`,
        left: `${center - 1}px`,
        top: `${center}px`,
        transform: `rotate(${angle}deg)`,
      }}
    />
  </div>
        );
        }

        // ///////////////////////
        return (
          <div key={skill}>
    <div
      className="absolute w-[2px] bg-pink-100 origin-top"
      style={{
        height: `${radius}px`,
        left: `${center - 1}px`,
        top: `${center}px`,
        transform: `rotate(${angle}deg)`,
      }}
    />
    <div
      className="absolute w-[80px] h-[25px] lg:w-[115px] lg:h-[35px] bg-pink-100 rounded-3xl flex items-center justify-start font-medium px-[2px] gap-[4px] lg:px-1 z-10"
      style={{
        left: window.innerWidth >= 1024 ? `${x - 24}px` : `${x}px`,
        top: window.innerWidth >= 1024 ? `${y -4}px` : `${y}px`, 
       }}
    >
      <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-white flex justify-center items-center">
        <Image
        src={`/images/skills/${skill}.png`}
        alt="skill"
        className="max-w-[12px] max-h-[12px] lg:max-w-[16px] lg:max-h-[16px]  "
        width={50}
        height={50}
        />
      </div>
      <div className="text-[10px] lg:text-[14px] text-stone-600 lg:text-stone-500 font-bold">{skill}</div>
      
    </div>
  </div>
        );
      })}
    </div>
  )
}
