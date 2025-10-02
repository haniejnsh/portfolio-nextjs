import { ProjectType } from "@/app/(frontend)/projects/_data/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link 
    href={`/projects/${project.id}`} 
    className={`flex flex-col gap-4  group w-full h-80 lg:h-96 rounded-sm overflow-hidden p-2 border-2 border-[rgba(253,126,196,0.2)] animate-[var(--animation-tran1)] [animation-delay:${project.id-0.5}s] opacity-0`}
    >
      <div
        className="relative w-full grow bg-contain bg-no-repeat bg-center border border-[rgba(253,126,196,0.1)] rounded-sm "
        style={{ backgroundImage: `url(${project.images[0]})` }} 
      >
        <div className="absolute inset-0 bg-pink-200/10 group-hover:bg-pink-200/60 transition duration-500"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 text-white text-center p-4">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold">{project.name}</h2>
            
          </div>
        </div>
        
      </div>
      <div className="flex flex-col my-2 lg:my-3 px-2 gap-1 ">
        <h3 className="text-sm font-bold text-[var(--stone-700)] lg:text-base lg:mb-1">{project.title}</h3>
        <p className="text-xs text-justify text-[var(--stone-600)] lg:text-sm">
          <span>{project.introduction.slice(0, 110)}</span>
          <span className="text-xs ml-1 font-bold text-pink-350 lg:text-sm">show more . . .</span>
        </p>
      </div>
      
    </Link>
  );
}
