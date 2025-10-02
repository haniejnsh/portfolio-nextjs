"use client"

import { createNote, editNote } from "@/actions/noteActions"
import { NoteItemsType } from "@/models/NoteType";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { createPortal, useFormState } from "react-dom"
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface PropsType {
    openModal:(value:boolean)=>void ;
    noteDetails : NoteItemsType | null;
}

export default function CreateEditNoteModal({openModal , noteDetails} : PropsType) {

    const noteAction= noteDetails?editNote: createNote;
    const [state,formAction]=useFormState( noteAction , {message: ""});
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(
        ()=>{
          if(state?.message==="Created successfully :)" || state?.message ==="Updated successfully :)"){
            toast.success(state.message ,
               {
                icon : "✅" ,
                className: "",
               }
              )
            
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
    className="fixed w-full h-full z-50 bg-[var(--bg-modal1)] top-0 left-0 flex flex-col gap-3 justify-center items-center animate-[var(--animation-tran2)]"
    onClick={()=>openModal(false)}
    >
        <form 
        action={formAction} 
        className="bg-[var(--bg-box)] border border-[var(--border-form)] rounded-sm flex flex-col px-3 pt-8 pb-6 items-center gap-4 relative animate-[var(--animation-tran1)] lg:px-10 lg:pb-12 lg:pt-14 lg:gap-8 lg:w-1/2"
        onClick={(e)=>e.stopPropagation()}
        >
            <IoMdCloseCircleOutline 
            className="absolute top-3 right-3 text-lg text-pink-350 cursor-pointer transition lg:text-2xl" 
            onClick={()=>openModal(false)}
            />
            
            <h2 className="text-lg font-bold text-[var(--stone-700)]">{noteDetails?"Note edit form":"Note create form"}</h2>
            <label 
            htmlFor="title" 
            className="w-full flex gap-2 items-center"
            >
                <span className="text-[var(--stone-600)] text-base w-[56px]">Title:</span>
                <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Enter your title..."
                defaultValue={noteDetails?.title || ""}
                className="border border-[var(--border-form)] rounded-sm bg-[var(--bg-input)] text-sm px-2 py-1 text-[var(--stone-600)] focus:outline-none focus:border-stone-500 transition placeholder:text-xs grow-1"
                />
            </label>
            <label 
            htmlFor="content" 
            className="w-full flex gap-2 items-start"
            >
                <span className="text-[var(--stone-600)] text-base w-[56px] mt-2">Content:</span>
                <textarea 
                name="content" 
                id="content" 
                placeholder="Enter your content..."
                defaultValue={noteDetails?.content || ""}
                className="border border-[var(--border-form)] rounded-sm bg-[var(--bg-input)] text-sm px-2 py-1 text-[var(--stone-600)] focus:outline-none focus:border-stone-500 transition placeholder:text-xs grow-1 resize-none h-40 lg:h-64"
                ></textarea>
            </label>
            {noteDetails ? <input type="hidden" id="_id" name="_id" value={noteDetails?._id} /> :""}
            
            <button 
            type="submit" 
            className="bg-pink-350 text-[var(--bg-box)] text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 lg:text-sm lg:py-2"
            >
                {noteDetails? "Edit" : "Create"}
            </button>
        </form>
        <span className="text-red-400 text-xs h-4">{state?.message}</span>
    </div> ,
    document.body
  )
}
