"use client"

import { useState } from "react"
import CreateEditNoteModal from "./CreateEditNoteModal"

export default function CreateNote() {

    const [createModalOpen, setCreateModalOpen]=useState(false)
    // const router=useRouter()
    // const user=useAuthStore((state)=>state.user)

    // useEffect(()=>{
    //   if(!user){router.push("/authentication/login")}
    // },[router,user])

  return (
    <div className="">
        <button
        className="bg-pink-350 text-white text-xs cursor-pointer transition rounded-sm px-3 py-1 my-4 hover:bg-pink-300 lg:text-sm lg:py-2"
        onClick={()=>setCreateModalOpen(true)}
        >
          Add Note
        </button>
        {
            createModalOpen?(<CreateEditNoteModal openModal={(h)=>setCreateModalOpen(h)} noteDetails={null}/>):("")
        }
    </div>
  )
}
