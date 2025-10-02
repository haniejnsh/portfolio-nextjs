"use client"

import { useState } from "react"
import CreateEditNoteModal from "./CreateEditNoteModal"
import { useAuthStore } from "@/store/useAuthStore"
import { TiWarning } from "react-icons/ti"

export default function CreateNote() {

    const [createModalOpen, setCreateModalOpen]=useState(false)
    const [loginError,setLoginError]=useState(false)
    const user=useAuthStore((state)=>state.user)
    const handleClick =()=>{
      if(user){
        setCreateModalOpen(true)
      }
      else{
        setLoginError(true)
      }
    }

  return (
    <div className="flex">
        <button
        className={`  text-xs cursor-pointer transition rounded-sm px-3 py-1 my-4  lg:text-sm lg:py-2 ${user?"bg-pink-350 text-[var(--bg-main)] hover:bg-pink-300":"bg-[var(--bg-disable)] text-[var(--text-disable)]"}  animate-[var(--animation-tran1)]`}
        onClick={()=>handleClick()}
        >
          Add Note
        </button>
        {loginError?(
          <span className="text-[10px] lg:text-xs ml-2 lg:ml-4 text-red-400 flex gap-1 items-center">
            <TiWarning className="text-xs lg:text-sm"/>
            To add a note, please login first.</span>
        ):""}
        {
            createModalOpen?(<CreateEditNoteModal openModal={(h)=>setCreateModalOpen(h)} noteDetails={null}/>):("")
        }
    </div>
  )
}
