"use client"

import { useRouter } from "next/navigation"

export default function GoToProjects() {

  const router = useRouter();

  return (
    <p className="text-stone-700 text-justify pl-1 text-sm">
          You can explore some of the projects I’ve built using React and Next.js in the <span className="mx-1 text-pink-350 font-bold transition cursor-pointer border py-[1px] px-1 rounded-sm bg-pink-50" onClick={()=>router.push("/projects")}>Projects</span> tab of this portfolio.
        </p>
        /* <p>
          برخی از پروژه‌هایی که با React و Next.js انجام داده‌ام را می‌توانید در تب «پروژه‌ها» مشاهده کنید.
        </p> */
  )
}
