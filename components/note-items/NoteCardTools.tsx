"use client"

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteNoteModal from "./DeleteNoteModal";
import CreateEditNoteModal from "./CreateEditNoteModal";
import { NoteItemsType } from "@/models/NoteType";

export default function NoteCardTools({noteDetails}:{noteDetails :NoteItemsType}) {
  
  const handleDelete=()=>{ setDeleteModalOpen(true) };
  const handleEdit=()=>{ setEditModalOpen(true)};
  const [deleteModalOpen,setDeleteModalOpen]=useState(false);
  const [editModalOpen,setEditModalOpen]=useState(false)
  
  return (
    <>
        <span className=" text-red-400 transition cursor-pointer">
          <FaTrash 
           onClick={handleDelete}
          />
        </span>
        <span className=" text-green-500 transition cursor-pointer">
          <FaEdit onClick={handleEdit}/>
        </span>
        
        {deleteModalOpen? <DeleteNoteModal openModal={(s)=>setDeleteModalOpen(s)} noteDetails={noteDetails}/> : ""}
        {editModalOpen? <CreateEditNoteModal openModal={(s)=>setEditModalOpen(s)} noteDetails={noteDetails}/> : ""}
    </>
  )
}
