import SkillCircle from "@/components/about-items/SkillCircle";
import Experience from "@/components/about-items/Experience";
import Biography from "@/components/about-items/Biography";
import GoToProjects from "@/components/about-items/GoToProjects";

export default function AboutPage() {

  return (
    <div className="flex flex-col gap-10 py-10 w-full items-center lg:pb-14 lg:pt-20">

      <h1 className="w-full text-2xl font-bold text-[var(--stone-700)] animate-[var(--animation-tran1)] lg:text-3xl">About</h1>

      <div className="flex flex-col gap-8 mt-5 lg:mt-24 animate-[var(--animation-tran1)]">
        <h2 className="text-lg font-bold text-[var(--stone-700)] lg:text-xl">Hello, nice to meet you 👋</h2>
          <Biography/>
      </div>

      <div className="flex flex-col items-center gap-8 mt-16 animate-[var(--animation-tran1)] [animation-delay:0.5s] opacity-0 lg:w-full lg:mt-24">
        <h2 className="text-2xl font-bold text-[var(--stone-700)] lg:w-full">Skills</h2>
        <SkillCircle/>
      </div>

      <div className="flex flex-col gap-16 mt-16 animate-[var(--animation-tran1)] [animation-delay:1s] opacity-0 lg:w-full  lg:gap-20">
        <h2 className="text-2xl font-bold text-[var(--stone-700)] w-full text-center lg:text-start">Work Experience</h2>
        <Experience isEducation={false}/>
      </div>


      <div className="flex flex-col gap-16 mt-16 animate-[var(--animation-tran1)] [animation-delay:1.5s] opacity-0 lg:w-full lg:gap-20 lg:mt-32">
        <h2 className="text-2xl font-bold text-[var(--stone-700)] w-full text-center lg:text-start" > Education </h2>
        <Experience isEducation={true}/>
       
      </div>

      
      <div className="flex flex-col gap-3 mt-16 mb-16 animate-[var(--animation-tran1)] [animation-delay:2s] opacity-0 lg:w-full lg:mt-32 lg:mb-44">
        <h2 className="text-xl font-bold text-[var(--stone-700)] w-full lg:text-2xl">Projects :</h2>
        <GoToProjects/>
        
      </div>
      
    </div>
  )
}
