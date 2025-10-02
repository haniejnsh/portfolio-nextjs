"use client"

import { useRouter } from "next/navigation"

export default function GoToProjects() {

  const router = useRouter();

  return (
    <p className="text-[var(--stone-700)] text-justify pl-1 text-sm lg:text-base">
          You can explore some of the projects I’ve built using React and Next.js in the <span className="mx-1 text-pink-350 font-bold transition cursor-pointer border py-[1px] lg:py-[3px] px-1 lg:px-2 rounded-sm bg-[var(--bg-main)]" onClick={()=>router.push("/projects")}>Projects</span> tab of this portfolio.
        </p>
  )
}
