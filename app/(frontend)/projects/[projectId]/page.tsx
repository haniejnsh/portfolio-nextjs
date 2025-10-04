import ProjectGallery from "@/components/project-items/ProjectGalery";
import dbConnect from "@/db/db-connect";
import ProjectModel from "@/models/ProjectModel";
import { ProjectItemsType } from "@/models/ProjectType";

type Params = {
  projectId: string;
};

export default async function ProjectDetailsPage({ params }: { params: Promise<Params> }) {
  const { projectId } = await params; 
  await dbConnect();

  const project1 = await ProjectModel.findById(projectId);
  if (!project1) return null;

  const project: ProjectItemsType = JSON.parse(JSON.stringify(project1));

  return (
    <div className="flex flex-col gap-5 py-10 w-full items-center lg:pb-32 lg:pt-20 animate-[var(--animation-tran1)] mb-10">
      <h1 className="w-full text-2xl font-bold text-[var(--stone-700)] lg:text-3xl">{project.name}</h1>
      <ProjectGallery images={project.images}/>
      <h2 className="w-full text-lg lg:text-xl text-justify font-bold text-[var(--stone-700)] mt-10">{project.title}</h2>
      <p className="text-sm lg:text-base text-justify text-[var(--stone-600)] whitespace-pre-line">{project.introduction}</p>
      <div className="w-full flex flex-col gap-2 mt-5 lg:mt-7 lg:gap-4">
        <h3 className="text-base lg:text-lg font-bold w-full text-[var(--stone-600)]">Technologies Used :</h3>
        <ul className="text-sm lg:text-base text-[var(--stone-600)] list-disc list-outside pl-5 marker:text-pink-300 marker:text-base">
          {project.technology.map((tech, i)=>(
            <li key={i} className="lg:mb-1 lg:text-base">{tech}</li>
          ))}
        </ul>
      </div>
      {project.link && (
        <p className="text-[var(--stone-700)] text-base w-full text-justify mt-5 lg:mt-7">
          You can visit the live version of this project on&nbsp;
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live site for ${project.name} Project`}
            className="mx-1 text-pink-350 font-bold transition cursor-pointer border py-[1px] lg:py-[3px] px-1 lg:px-2 rounded-sm bg-[var(--bg-main)]"
          >
            this link
          </a>.
        </p>
      )}

      {project.github && <p className="text-[var(--stone-700)] text-base w-full text-justify mt-5 lg:mt-7">
        You can explore the full source code of this project on my&nbsp;
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`GitHub Repository for ${project.name} Project1`}
          className="mx-1 text-pink-350 font-bold transition cursor-pointer border py-[1px] lg:py-[3px] px-1 lg:px-2 rounded-sm bg-[var(--bg-main)]"
        >
          GitHub
        </a> repository.
      </p>}
      {project.linkedIn && <p className="text-[var(--stone-700)] text-base w-full text-justify mt-5 lg:mt-7">
        Also, check out the project demo video I shared on&nbsp;
        <a 
         href={project.linkedIn}
         target="_blank" 
         rel="noopener noreferrer"
         aria-label={`LinkedIn Post for ${project.name} Project Demo Video`}
         className="mx-1 text-pink-350 font-bold transition cursor-pointer border py-[1px] lg:py-[3px] px-1 lg:px-2 rounded-sm bg-[var(--bg-main)]"
        >
          LinkedIn
        </a>.
      </p>}
    </div>
  )
}
