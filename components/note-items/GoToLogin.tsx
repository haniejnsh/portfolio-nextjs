"use client"

import { useRouter } from "next/navigation"


export default function GoToLogin() {
    const router=useRouter()
  return (
    <button 
     onClick={()=>router.push("/authentication/login")} 
     className="mx-1 text--[var(--stone-300)] font-bold transition cursor-pointer border border-[var(--stone-300)] py-[1px] lg:py-[1px] px-1 lg:px-2 rounded-sm bg-[var(--bg-main)] text-xs lg:text-sm">
        Login
    </button>
  )
}
