"use client"

import { useAuthStore } from "@/store/useAuthStore";
import { useThemeStore } from "@/store/useThemeStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { GiCurledLeaf } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";
import ConfirmModal from "./modal/ConfirmModal";

export default function Header() {

    const [showMenu, setShowMenu]= useState(false)
    const [confirmModalOpen,setConfirmModalOpen]=useState(false)
    const pathName=usePathname()
    const user=useAuthStore((state)=>state.user)
    const theme=useThemeStore((state)=>state.theme)
    const toggleTheme=useThemeStore((state)=>state.toggleTheme)
    const menuStyle="shadow-sm shadow-pink-200 border-[1px] border-pink-200 rounded-sm  text-base  font-bold  hover:bg-[rgba(253,126,196,0.1)] transition cursor-pointer lg:shadow-none lg:border-none duration-500"


    const handleLogout=()=>{
        setConfirmModalOpen(true)
    }

  return (
    <header className="flex justify-between px-8 pt-8 max-w-[1200px] w-full lg:items-center">
        <div className="text-[var(--stone-700)] text-sm flex items-center gap-1 lg:text-base transition-colors duration-500">
            <GiCurledLeaf className="text-pink-350 text-3xl"/>
            <span className="text-pink-350 font-bold hidden lg:block">Hanieh</span>
            <span className="hidden lg:block">Janeshinpour</span>
            
        </div>
        <TiThMenuOutline className="text-pink-350 text-2xl cursor-pointer transition z-20 lg:hidden" onClick={()=>setShowMenu(!showMenu)}/>
        <nav 
        className={`${showMenu?" bg-[var(--bg-modal)] opacity-100 w-full fixed lg:bg-transparent":"opacity-0 fixed w-0"} right-0 top-0  h-full z-15 flex justify-center transition-all duration-[1000ms] lg:transition-none lg:duration-[0ms] lg:static lg:opacity-100 lg:h-auto lg:w-auto lg:grow lg:justify-center lg:items-center`} 
        onClick={()=>setShowMenu(false)}
        >
            <ul className={`${showMenu?"w-[75%] max-w-[350px] translate-x-[0px]":"w-0 translate-x-[100px]"} flex flex-col gap-6 mt-32 transition-all duration-[1500ms] lg:transition-none lg:duration-[0ms] lg:flex-row lg:w-auto lg:translate-x-[0px] lg:max-w-none lg:m-0 lg:gap-10 lg:items-center`}>
                <li className={`${menuStyle} ${pathName==="/"?"text-pink-350":"text-[var(--stone-700)]"}`}  >
                    <Link href={"/"} className="block w-full px-2 py-1 h-full">Home</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/about"?"text-pink-350":"text-[var(--stone-700)]"}`} >
                    <Link href={"/about"} className="block w-full px-2 py-1 h-full">About</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/projects"?"text-pink-350":"text-[var(--stone-700)]"}`} >
                    <Link href={"/projects"} className="block w-full px-2 py-1 h-full">Projects</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/notes"?"text-pink-350":"text-[var(--stone-700)]"}`} >
                    <Link href={"/notes"} className="block w-full px-2 py-1 h-full">Notes</Link>
                </li>
                <li 
                className={`rounded-sm text-base  font-bold bg-pink-350 lg:hover:bg-[rgba(253,126,196,0.1)] transition cursor-pointer w-[50%] mx-auto mt-8 lg:shadow-none lg:border-none duration-500 lg:mt-0 lg:bg-[var(--bg-main)] ${(pathName==="/authentication/login" || pathName==="/authentication/register")?"lg:text-pink-350 text-white":"lg:text-[var(--stone-700)] text-white"}`} 
                onClick={user?()=>handleLogout():undefined}>
                    <Link 
                     href={user ? pathName : "/authentication/login"}
                     className="w-full px-2 py-1 h-full flex justify-center items-center gap-1"
                    >
                        <span>{user?<RiLogoutCircleFill/>:<RiLoginCircleFill />}</span>
                        {user?"Logout":"Login"}
                    </Link>
                    
                </li>
            </ul>
        </nav>
        {confirmModalOpen? <ConfirmModal openModal={(s)=>setConfirmModalOpen(s)}/> : ""}
        <div 
         onClick={()=>toggleTheme()} 
         className={ ` ${(showMenu)?"z-20 absolute translate-x-[0px] lg:static":"absolute opacity-0 translate-x-[300px] lg:opacity-100 lg:static"} transition-all duration-[1000ms] lg:transition-none lg:duration-[0ms] lg:translate-x-[0px] lg:p-[2px] lg:flex lg:items-center lg:cursor-pointer lg:pl-2 lg:border lg:rounded-2xl  ${(theme==="dark")?"lg:border-blue-900 lg:bg-blue-900":"lg:border-yellow-500 lg:bg-yellow-500 "}`}
        >
            <span className="hidden lg:block lg:text-xs lg:text-white lg:w-[60px]">
                {(theme==="dark")?"dark mode":"light mode"}
            </span>
            {(theme==="dark")?(
                <FaCloudMoon className="text-2xl text-blue-900 transition cursor-pointer lg:rounded-full lg:p-[2px] lg:bg-white"/>
                ):(
                <IoSunnySharp className="text-2xl text-yellow-500 transition cursor-pointer lg:rounded-full lg:p-[2px] lg:bg-white"/>
                )}
        </div>
    </header>
  )
}
