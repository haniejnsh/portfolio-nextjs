"use client"

import { deleteNote } from "@/actions/noteActions";
import { useFormState } from "react-dom";
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
  openModal: (value:boolean)=>void ;
  noteDetails: noteItem;
}

export default function DeleteNoteModal({ openModal , noteDetails } : PropsType ) {

  const [state, formAction]=useFormState(deleteNote , {message:""})

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
                
                <h2 className="text-lg font-bold text-stone-700">Delete Note </h2>
                <p>
                  Are you sure you want to delete the note titled
                  <span>{noteDetails.title}</span>
                </p>
                <input type="hidden" id="_id" name="_id" value={noteDetails._id} />
                <div>
                  <button 
                  type="submit" 
                  className="bg-pink-350 text-white text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 lg:text-sm lg:py-2"
                  >
                    Delete
                  </button>
                  <button 
                  onClick={()=>openModal(false)}
                  type="button"
                  className="bg-pink-350 text-white text-sm cursor-pointer transition rounded-sm px-3 py-1 hover:bg-pink-300 lg:text-sm lg:py-2"
                  >
                    Cancel
                  </button>
                </div>
                
            </form>
            <span className="text-red-400 text-xs h-4">{state?.message}</span>
        </div>
  )
}
