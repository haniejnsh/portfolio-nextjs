"use client"

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteNoteModal from "./DeleteNoteModal";
import CreateEditNoteModal from "./CreateEditNoteModal";

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

export default function NoteCardTools({noteDetails}:{noteDetails :noteItem}) {
    const handleDelete=()=>{ setDeleteModalOpen(true) };
    const handleEdit=()=>{ setEditModalOpen(true)};
    const [deleteModalOpen,setDeleteModalOpen]=useState(false);
    const [editModalOpen,setEditModalOpen]=useState(false)
    console.log(noteDetails)
  return (
    <>
        <span><FaTrash onClick={handleDelete}/></span>
        <span><FaEdit onClick={handleEdit}/></span>
        {deleteModalOpen? <DeleteNoteModal openModal={(s)=>setDeleteModalOpen(s)} noteDetails={noteDetails}/> : ""}
        {editModalOpen? <CreateEditNoteModal openModal={(s)=>setEditModalOpen(s)} noteDetails={noteDetails}/> : ""}
    </>
  )
}
