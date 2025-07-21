"use client"

import { createNote, editNote } from "@/actions/noteActions"
import { useFormState } from "react-dom"
import { IoMdCloseCircleOutline } from "react-icons/io";

interface noteItem {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
      _id: string;
      username: string;
      role: string;
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    },
}
interface PropsType {
    openModal:(value:boolean)=>void ;
    noteDetails : noteItem | null;
}

export default function CreateEditNoteModal({openModal , noteDetails} : PropsType) {

    const noteAction= noteDetails?editNote: createNote;
    const [state,formAction]=useFormState( noteAction , {message: ""});

  return (
    <div 
    className="fixed w-full h-full bg-[#ffffffe2] top-0 left-0 flex flex-col gap-3 justify-center items-center animate-[var(--animation-tran2)]"
    onClick={()=>openModal(false)}
    >
        <form 
        action={formAction} 
        className="bg-white border border-pink-200 rounded-sm flex flex-col px-3 pt-8 pb-6 items-center gap-4 relative animate-[var(--animation-tran1)]"
        onClick={(e)=>e.stopPropagation()}
        >
            <IoMdCloseCircleOutline 
            className="absolute top-3 right-3 text-lg text-pink-350 cursor-pointer transition" 
            onClick={()=>openModal(false)}
            />
            
            <h2 className="text-lg font-bold text-stone-700">{noteDetails?"Note edit form":"Note create form"}</h2>
            <label 
            htmlFor="title" 
            className="w-full flex gap-2 items-center"
            >
                <span className="text-stone-600 text-base w-[56px]">Title:</span>
                <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Enter your title..."
                defaultValue={noteDetails?.title || ""}
                className="border border-pink-200 rounded-sm bg-pink-50 text-sm px-2 py-1 text-stone-600 focus:outline-none focus:border-pink-350 transition placeholder:text-xs grow-1"
                />
            </label>
            <label 
            htmlFor="content" 
            className="w-full flex gap-2 items-start"
            >
                <span className="text-stone-600 text-base w-[56px] mt-2">Content:</span>
                <textarea 
                name="content" 
                id="content" 
                placeholder="Enter your content..."
                defaultValue={noteDetails?.content || ""}
                className="border border-pink-200 rounded-sm bg-pink-50 text-sm px-2 py-1 text-stone-600 focus:outline-none focus:border-pink-350 transition placeholder:text-xs grow-1 resize-none h-40"
                ></textarea>
            </label>
            {noteDetails ? <input type="hidden" id="_id" name="_id" value={noteDetails?._id} /> :""}
            
            <button 
            type="submit" 
            className="bg-pink-350 text-white text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 lg:text-sm lg:py-2"
            >
                {noteDetails? "Edit" : "Create"}
            </button>
        </form>
        <span className="text-red-400 text-xs h-4">{state?.message}</span>
    </div>
  )
}
