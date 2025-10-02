"use client"

import { deleteNote } from "@/actions/noteActions";
import { NoteItemsType } from "@/models/NoteType";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { createPortal, useFormState } from "react-dom";
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";


interface PropsType {
  openModal: (value:boolean)=>void ;
  noteDetails: NoteItemsType;
}

export default function DeleteNoteModal({ openModal , noteDetails } : PropsType ) {

  const [state, formAction]=useFormState(deleteNote , {message:""})
  const router= useRouter()
  const searchParams = useSearchParams();

  useEffect(
    ()=>{
      if(state.message === "note is not valid!!"){
        toast.error(state.message , { icon: "🚫" })
      }
      else if(state.message==="Deleted successfully :)"){
        toast.success(state.message ,
           {
            icon : "✅" ,
            className: "",
           }
          )
        setTimeout(() => {
          router.refresh(); 
        }, 100);
        openModal(false)
        const params = new URLSearchParams(searchParams.toString());
        params.set("refresh", Date.now().toString()); 

        router.push(`?${params.toString()}`, { scroll: false });
      }

      }
    ,[state?.message]
  )


  return createPortal(
    <div 
        className="fixed w-full h-full bg-[var(--bg-modal1)]  top-0 left-0 flex flex-col gap-3 justify-center items-center animate-[var(--animation-tran2)] z-50"
        onClick={()=>openModal(false)}
        >
            <form 
            action={formAction}
            className="bg-[var(--bg-box)] border border-[var(--border-form)] rounded-sm flex flex-col px-3 pt-8 pb-6 items-center gap-4 relative animate-[var(--animation-tran1)] w-[80%] lg:px-10 lg:pb-12 lg:pt-14 lg:gap-8 lg:w-1/2"
            onClick={(e)=>e.stopPropagation()}
            >
                <IoMdCloseCircleOutline 
                className="absolute top-3 right-3 text-lg text-pink-350 cursor-pointer transition lg:text-2xl" 
                onClick={()=>openModal(false)}
                />
                
                <h2 className="text-lg font-bold text-[var(--stone-700)]">Delete Note </h2>
                <p className="text-sm text-[var(--stone-700)] text-center">
                  Are you sure you want to delete the note titled
                  <span className="font-bold mx-2">{noteDetails.title}</span>
                </p>
                <input type="hidden" id="_id" name="_id" value={noteDetails._id} />
                <div className="flex gap-2 mt-2">
                  <button 
                  type="submit" 
                  className="bg-pink-350 text-[var(--bg-box)] text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 w-16 lg:text-sm lg:py-2 "
                  >
                    Delete
                  </button>
                  <button 
                  onClick={()=>openModal(false)}
                  type="button"
                  className="bg-pink-350 text-[var(--bg-box)] text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 w-16 lg:text-sm lg:py-2 "
                  >
                    Cancel
                  </button>
                </div>
                
            </form>
            <span className="text-red-400 text-xs h-4">{state?.message as string}</span>
        </div>,
        document.body
  )
}
