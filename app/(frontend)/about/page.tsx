import SkillCircle from "@/components/about-items/SkillCircle";
import Experience from "@/components/about-items/Experience";
import Biography from "@/components/about-items/Biography";
import GoToProjects from "@/components/about-items/GoToProjects";

export default function AboutPage() {

 



  return (
    <div className="flex flex-col gap-10 py-10 w-full items-center">

      <h1 className="w-full text-4xl font-bold text-stone-700">About</h1>

      <div className="flex flex-col gap-8 mt-5">
        <h2 className="text-lg font-bold text-stone-700">Hello, nice to meet you 👋</h2>
          <Biography/>
      </div>

      <div className="flex flex-col items-center gap-8 mt-16">
        <h2 className="text-3xl font-bold text-stone-700">Skills</h2>
        <SkillCircle/>
      </div>

      <div className="flex flex-col gap-16 mt-16">
        <h2 className="text-3xl font-bold text-stone-700 w-full text-center">Work Experience</h2>
        <Experience isEducation={false}/>
        
        
      </div>


      <div className="flex flex-col gap-16 mt-16">
        <h2 className="text-3xl font-bold text-stone-700 w-full text-center" > Education </h2>
        <Experience isEducation={true}/>
       
      </div>

      
      <div className="flex flex-col gap-3 mt-16 mb-16 ">
        <h2 className="text-xl font-bold text-stone-700 w-full">Projects :</h2>
        <GoToProjects/>
        
      </div>
      
    </div>
  )
}
