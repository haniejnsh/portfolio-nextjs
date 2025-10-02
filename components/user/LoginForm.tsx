"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";

export default function LoginForm() {
    
    const[showPass,setShowPass] = useState(false)
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const router=useRouter()
    
    async function onSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const formData=new FormData(e.currentTarget);
            const res = await signIn("credentials", {
                username: formData.get("username"),
                password: formData.get("password"),
                redirect: false,
            });
            if (res?.error) {
                setError2(res.error)
            } else {
                toast.success("Login successful!" ,
                    {
                        icon : "✅" ,
                        className: "",
                    }
                )
                router.push("/notes");
            }
        }catch(e){
            console.log("e from form login: ",e)
            setError("Authentication Failed");
        }
    }
  
    return (
      <div 
      className="w-full h-full flex flex-col gap-3 justify-center items-center animate-[var(--animation-tran2)] mt-20 mb-32 lg:mt-32"
      >
          <form  
          className="bg-[var(--bg-box)] border border-[var(--border-form)] rounded-sm flex flex-col px-4 pt-8 pb-6 items-center gap-5 relative animate-[var(--animation-tran1)]  w-[80%] lg:max-w-[500px]"
          onSubmit={onSubmit}
          >
            <div className="absolute -top-6 text-lg text-[var(--bg-box)] bg-pink-200 rounded-full p-3">
                <FaRegUser />
            </div>
              
              <h2 className="text-lg font-bold text-[var(--stone-700)] my-2">Login form</h2>
              <label 
              htmlFor="username" 
              className="w-full flex flex-col gap-1 items-start"
              >
                  <span className="text-[var(--stone-600)] text-sm w-[56px]">UserName:</span>
                  <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Enter your username..."
                  className="border border-[var(--border-form)] rounded-sm bg-[var(--bg-input)] text-sm px-2 py-1 text-[var(--stone-600)] focus:outline-none focus:border-stone-500 transition placeholder:text-xs w-full"
                  />
              </label>
              <label 
              htmlFor="password" 
              className="w-full flex flex-col gap-1 items-start relative"
              >
                  <span className="text-[var(--stone-600)] text-sm ">Password:</span>
                  <input 
                  type={`${showPass?"text":"password"}`}
                  id="password" 
                  name="password" 
                  placeholder="Enter your password..."
                  className="border border-[var(--border-form)] rounded-sm bg-[var(--bg-input)] text-sm px-2 py-1 text-[var(--stone-600)] focus:outline-none focus:border-stone-500  transition placeholder:text-xs w-full"
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
              className="bg-pink-350 text-[var(--bg-box)] text-sm cursor-pointer transition rounded-sm px-3 py-1 mb-2 mt-5 hover:bg-pink-300 lg:text-sm lg:py-2"
              >
                  Login
              </button>
          </form>
        <div className="text-sm text-[var(--stone-700)] mt-2 mb-2">
            Don’t have an account? 
            <span 
            onClick={()=>router.push("/authentication/register")}
            className="mx-1 text-pink-350 cursor-pointer transition font-bold"
            >
                Sign up
            </span> 
            first
        </div>
          <span className="text-red-400 text-xs h-4">{`${error}  ${error2}`}</span>
      </div>
    )
}
