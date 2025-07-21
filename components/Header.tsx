"use client"
import { useAuthStore } from "@/store/useAuthStore";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {

    const [showMenu, setShowMenu]= useState(false)
    const pathName=usePathname()
    const user=useAuthStore((state)=>state.user)
    const logout=useAuthStore((state)=>state.logout)
    const menuStyle="shadow-sm shadow-pink-200 border-[1px] border-pink-200 rounded-sm px-2 py-1 text-base  font-bold bg-white hover:bg-pink-50 transition cursor-pointer lg:shadow-none lg:border-none"

    const navStyle=`${showMenu?" bg-[#ffffffe2] opacity-100 w-full fixed ":"opacity-0 fixed w-0"} right-0 top-0  h-full z-15 flex justify-center transition-all duration-[1000ms] lg:transition-none lg:duration-[0ms] lg:static lg:opacity-100 lg:h-auto lg:w-auto lg:grow-1 lg:justify-end`

    const ulStyle=`${showMenu?"w-[75%] max-w-[350px] translate-x-[0px]":"w-0 translate-x-[100px]"} flex flex-col gap-6 mt-10 transition-all duration-[1500ms] lg:transition-none lg:duration-[0ms] lg:flex-row lg:w-auto lg:translate-x-[0px] lg:max-w-none lg:m-0 lg:gap-10`

    const handleLogout=()=>{
        logout();
        signOut();
    }

  return (
    <header className="flex justify-between lg:gap-10">
        <div className="text-stone-700 text-sm flex gap-1 lg:text-base">
            <span className="text-pink-350 font-bold">Hanieh</span>
            <span>Janeshinpour</span>
        </div>
        <TiThMenuOutline className="text-pink-350 text-2xl cursor-pointer transition z-20 lg:hidden" onClick={()=>setShowMenu(!showMenu)}/>
        <nav 
        className={navStyle} 
        onClick={()=>setShowMenu(false)}
        >
            <ul className={ulStyle}>
                <li className={`${menuStyle} ${pathName==="/"?"text-pink-350":"text-stone-700"}`}  >
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/about"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/projects"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/projects"}>Projects</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/notes"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/notes"}>Notes</Link>
                </li>
                <li className={`${menuStyle} ${pathName==="/contact"?"text-pink-350":"text-stone-700"}`} >
                    <Link href={"/contact"}>Contact</Link>
                </li>
                <li 
                className={`${menuStyle} ${pathName==="/authentication"?"text-pink-350":"text-stone-700"}`} 
                onClick={user?()=>handleLogout():undefined}>
                    <span>{user?<RiLogoutCircleFill/>:<RiLoginCircleFill />}</span>
                    <Link href={"/authentication/login"}>{user?"Logout":"Login"}</Link>
                    
                </li>
            </ul>
        </nav>
        <div className="hidden lg:block w-[20%]">dark</div>
    </header>
  )
}
