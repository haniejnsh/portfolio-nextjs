export default function SkillCircle() {

     const skills = ["CSS","Vite","Router","Redux","","Zustand","Figma","MongoDB","Git","Tailwind","TypeScript","Next.js","","React.js","JavaScript","HTML"];

  const radius = 130;
  const center = 180;
  return (
    <div className="relative w-[360px] h-[360px] mx-auto">
      {/* دایره مرکزی */}
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full bg-white font-bold flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 border border-pink-100">
        <div className="flex justify-center items-center w-[80px] h-[80px] bg-pink-100 rounded-full text-sm text-pink-350">Frontend</div>
        
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
      className="absolute w-[80px] h-[25px] bg-pink-100 rounded-3xl flex items-center justify-start font-medium px-[2px] gap-[4px] z-10"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="w-4 h-4 rounded-full bg-white"></div>
      <div className="text-[10px] text-stone-600 font-bold">{skill}</div>
      
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
      className="absolute w-[80px] h-[25px] bg-pink-100 rounded-3xl flex items-center justify-start font-medium px-[2px] gap-[4px] z-10"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="w-4 h-4 rounded-full bg-white"></div>
      <div className="text-[10px] text-stone-600 font-bold">{skill}</div>
      
    </div>
  </div>
        );
      })}
    </div>
    /* <p>
              React & Frontend Development: React (Hooks, Context API, Redux, Router), React Query, Styled Components, Tailwind CSS
              JavaScript: ES6+, Async/Await, DOM Manipulation, SPA Development
              HTML/CSS: Semantic HTML5, Responsive Design, SASS, Flexbox, Animations
              TypeScript: Types, Interfaces, Generics, Type-safe APIs
              Next.js: App Router, Dynamic Routing, SEO (Metadata API), SSR/SSG/ISR, NextAuth, Server Actions
              State Management & Database: zustand, Context API, Redux, MongoDB
              Tools: Node.js, NPM, Vite, Git, Gitflow, Figma, React Dev Tools
    
    
            </p> */
  )
}
