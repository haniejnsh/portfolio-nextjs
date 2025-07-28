"use client"
import { useAuthStore } from "@/store/useAuthStore";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { GiCurledLeaf, GiGinkgoLeaf } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {

    const [showMenu, setShowMenu]= useState(false)
    const [night,setNight]=useState(false)
    const pathName=usePathname()
    const user=useAuthStore((state)=>state.user)
    const logout=useAuthStore((state)=>state.logout)
    const menuStyle="shadow-sm shadow-pink-200 border-[1px] border-pink-200 rounded-sm  text-base  font-bold bg-white hover:bg-pink-50 transition cursor-pointer lg:shadow-none lg:border-none"

    const navStyle=`${showMenu?" bg-[#ffffffe2] opacity-100 w-full fixed ":"opacity-0 fixed w-0"} right-0 top-0  h-full z-15 flex justify-center transition-all duration-[1000ms] lg:transition-none lg:duration-[0ms] lg:static lg:opacity-100 lg:h-auto lg:w-auto lg:grow-1 lg:justify-end`

    const ulStyle=`${showMenu?"w-[75%] max-w-[350px] translate-x-[0px]":"w-0 translate-x-[100px]"} flex flex-col gap-6 mt-32 transition-all duration-[1500ms] lg:transition-none lg:duration-[0ms] lg:flex-row lg:w-auto lg:translate-x-[0px] lg:max-w-none lg:m-0 lg:gap-10`

    const handleLogout=()=>{
        logout();
        signOut();
    }

  return (
    <header className="flex justify-between lg:gap-10 px-8 pt-8 max-w-[1200px] w-full">
        <div className="text-stone-700 text-sm flex items-center gap-1 lg:text-base">
            <GiCurledLeaf className="text-pink-350 text-3xl"/>
            <span className="text-pink-350 font-bold hidden lg:block">Hanieh</span>
            <span className="hidden lg:block">Janeshinpour</span>
            
        </div>
        <TiThMenuOutline className="text-pink-350 text-2xl cursor-pointer transition z-20 lg:hidden" onClick={()=>setShowMenu(!showMenu)}/>
        <nav 
        className={navStyle} 
        onClick={()=>setShowMenu(false)}
        >
            <ul className={ulStyle}>
                <li className={`${menuStyle} ${pathName==="/"?"text-pink-350":"text-stone-700"}`}  >
                    <Link href={"/"} className="block w-full px-2 py-1 h-full">Home</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/about"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/about"} className="block w-full px-2 py-1 h-full">About</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/projects"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/projects"} className="block w-full px-2 py-1 h-full">Projects</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/notes"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/notes"} className="block w-full px-2 py-1 h-full">Notes</Link>
                </li>
                <li 
                className={`rounded-sm text-base  font-bold bg-pink-350 hover:bg-pink-50 transition cursor-pointer w-[50%] mx-auto mt-8 text-white lg:shadow-none lg:border-none`} 
                onClick={user?()=>handleLogout():undefined}>
                    <Link 
                     href={"/authentication/login"} 
                     className="w-full px-2 py-1 h-full flex justify-center items-center gap-1"
                    >
                        <span>{user?<RiLogoutCircleFill/>:<RiLoginCircleFill />}</span>
                        {user?"Logout":"Login"}
                    </Link>
                    
                </li>
            </ul>
        </nav>
        <div 
         onClick={()=>setNight(!night)} 
         className={ ` ${(showMenu)?"z-20 absolute translate-x-[0px]":"absolute opacity-0 translate-x-[300px] lg:opacity-1"} transition-all duration-[1000ms] lg:transition-none lg:duration-[0ms] lg:translate-x-[0px]`}
        >
            {night?(<FaCloudMoon className="text-2xl text-blue-900 transition cursor-pointer"/>):(<IoSunnySharp className="text-2xl text-yellow-500 transition cursor-pointer"/>)}
        </div>
    </header>
  )
}
