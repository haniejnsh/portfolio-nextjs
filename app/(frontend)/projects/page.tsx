import ProjectCard from "@/components/project-items/ProjectCard";
import dbConnect from "@/db/db-connect";
import ProjectModel from "@/models/ProjectModel";
import { ProjectItemsType } from "@/models/ProjectType";


export default async function ProjectsPage() {
  await dbConnect();
  const allProjects=await ProjectModel.find()
  const parsedAllProjects:ProjectItemsType[]=JSON.parse(JSON.stringify(allProjects));
  
  return ( 
    <div className="flex flex-col gap-10 py-10 w-full lg:pb-32 lg:pt-20 ">

      <h1 className="w-full text-2xl font-bold text-[var(--stone-700)] animate-[var(--animation-tran1)] lg:text-3xl">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 lg:gap-8 lg:mt-10">

      {parsedAllProjects.map((project, i)=>(
        <ProjectCard key={i} project={project}/>
      ))}

    </div>
    </div>
  )
}
