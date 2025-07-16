"use client"

import { registerAction } from "@/actions/userActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { FaRegUser } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";

export default function RegisterForm() {
  const [state,formAction]=useFormState(registerAction, {message: ""});
  const router=useRouter()
  const[showPass,setShowPass] = useState(false)
  
    return (
      <div 
            className="w-full h-full flex flex-col gap-3 justify-center items-center animate-[var(--animation-tran2)] mt-20"
            
            >
                <form  
                className="bg-white border border-pink-200 rounded-sm flex flex-col px-4 pt-8 pb-6 items-center gap-5 relative animate-[var(--animation-tran1)]  w-[80%]"
                action={formAction}
                >
                  <div className="absolute -top-6 text-lg text-white bg-pink-200 rounded-full p-3">
                      <FaRegUser />
                  </div>
                    
                    <h2 className="text-lg font-bold text-stone-700 my-2">Register form</h2>
                    <label 
                    htmlFor="name" 
                    className="w-full flex flex-col gap-1 items-start"
                    >
                        <span className="text-stone-600 text-sm">Full name:</span>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your fullname..."
                        className="border border-pink-200 rounded-sm bg-pink-50 text-sm px-2 py-1 text-stone-600 focus:outline-none focus:border-pink-350 transition placeholder:text-xs w-full"
                        />
                    </label>
                    <label 
                    htmlFor="email" 
                    className="w-full flex flex-col gap-1 items-start"
                    >
                        <span className="text-stone-600 text-sm">Email:
                            <span className="text-[11px] text-stone-400 ml-1">(optional)</span>
                        </span>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email..."
                        className="border border-pink-200 rounded-sm bg-pink-50 text-sm px-2 py-1 text-stone-600 focus:outline-none focus:border-pink-350 transition placeholder:text-xs w-full"
                        />
                    </label>
                    <label 
                    htmlFor="username" 
                    className="w-full flex flex-col gap-1 items-start"
                    >
                        <span className="text-stone-600 text-sm">UserName:</span>
                        <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Enter your username..."
                        className="border border-pink-200 rounded-sm bg-pink-50 text-sm px-2 py-1 text-stone-600 focus:outline-none focus:border-pink-350 transition placeholder:text-xs w-full"
                        />
                    </label>
                    <label 
                    htmlFor="password" 
                    className="w-full flex flex-col gap-1 items-start relative"
                    >
                        <span className="text-stone-600 text-sm">Password:</span>
                        <input 
                        type={`${showPass?"text":"password"}`}
                        id="password" 
                        name="password" 
                        placeholder="Enter your password..."
                        className="border border-pink-200 rounded-sm bg-pink-50 text-sm px-2 py-1 text-stone-600 focus:outline-none focus:border-pink-350 transition placeholder:text-xs w-full"
                        />
                        {showPass?
                        <ImEye 
                        onClick={()=>setShowPass(false)} 
                        className="absolute right-2 top-[30px] text-pink-350 cursor-pointer transition"
                        />:
                        <RiEyeCloseFill 
                        onClick={()=>setShowPass(true)}
                        className="absolute right-2 top-[30px] text-pink-350 cursor-pointer transition"
                        />}
                    </label>
                    
                    <button 
                    type="submit" 
                    className="bg-pink-350 text-white text-sm cursor-pointer transition rounded-sm px-3 py-1 mb-0 mt-2 hover:bg-pink-300 lg:text-sm lg:py-2"
                    >
                        Register
                    </button>
                </form>
              <div className="text-sm text-stone-700 mt-2 mb-2">
                  Already have an account? Please
                  <span 
                  onClick={()=>router.push("/authentication/login")}
                  className="mx-1 text-pink-350 cursor-pointer transition font-bold"
                  >
                      Login
                  </span> 
              </div>
                <span className="text-red-400 text-xs h-4">{state?.message}</span>
            </div>
    )
}
