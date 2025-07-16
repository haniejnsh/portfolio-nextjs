"use client"

import { useState } from "react"
import CreateForm from "./CreateForm"

export default function CreateNote() {
    const [showForm, setShowForm]=useState(false)
  return (
    <div className="">
        <button
        className="bg-pink-350 text-white text-xs cursor-pointer transition rounded-sm px-3 py-1 my-4 hover:bg-pink-300 lg:text-sm lg:py-2"
        onClick={()=>setShowForm(true)}
        >
          Add Note
        </button>
        <button>login</button>
        {
            showForm?(<CreateForm handleShowForm={(h)=>setShowForm(h)}/>):("")
        }
    </div>
  )
}
