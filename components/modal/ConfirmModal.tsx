"use client"

import { createPortal} from "react-dom";
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useAuthStore } from "@/store/useAuthStore";
import { signOut } from "next-auth/react";


interface PropsType {
  openModal: (value:boolean)=>void ;
}

export default function ConfirmModal({ openModal } : PropsType ) {

  const logout=useAuthStore((state)=>state.logout)
  const user = useAuthStore((state) => state.user);

  const handleLogout=()=>{
        openModal(false)
        logout();
        signOut();
        toast.success("Logout successful!",
               {
                icon : "✅" ,
                className: "",
               }
              )
    }



  return createPortal(
    <div 
        className="fixed w-full h-full bg-[var(--bg-modal1)]  top-0 left-0 flex flex-col gap-3 justify-center items-center animate-[var(--animation-tran2)] z-50"
        onClick={()=>openModal(false)}
        >
            <div 
            className="bg-[var(--bg-box)] border border-[var(--border-form)] rounded-sm flex flex-col px-3 pt-8 pb-6 items-center gap-4 relative animate-[var(--animation-tran1)] w-[80%] lg:px-10 lg:pb-12 lg:pt-14 lg:gap-8 lg:w-1/2"
            onClick={(e)=>e.stopPropagation()}
            >
                <IoMdCloseCircleOutline 
                className="absolute top-3 right-3 text-lg text-pink-350 cursor-pointer transition lg:text-2xl" 
                onClick={()=>openModal(false)}
                />
                
                <h2 className="text-lg font-bold text-[var(--stone-700)]">Logout Confirmation</h2>
                <p className="text-sm text-[var(--stone-700)] text-center">
                  {user?.name}, are you sure you want to logout?
                </p>
                <div className="flex gap-2 mt-2">
                  <button 
                  onClick={()=>handleLogout()}
                  type="button" 
                  className="bg-pink-350 text-[var(--bg-box)] text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 w-16 lg:text-sm lg:py-2 "
                  >
                    Logout
                  </button>
                  <button 
                  onClick={()=>openModal(false)}
                  type="button"
                  className="bg-pink-350 text-[var(--bg-box)] text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 w-16 lg:text-sm lg:py-2 "
                  >
                    Cancel
                  </button>
                </div>
                
            </div>
        </div>,
        document.body
  )
}
