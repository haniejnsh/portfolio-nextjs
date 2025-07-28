
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateNote from "@/components/CreateNote";
import NoteCard from "@/components/NoteCard";
import dbConnect from "@/db/db-connect";
import noteModel from "@/models/noteModel";
import { span } from "framer-motion/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
export default async function NotesPage() {
  
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/authentication/login");
  }
  
  

  await dbConnect();
  const allNotes=await noteModel.find().populate("author", "-password -__v")
  const parsedAllNotes:noteItem[]=JSON.parse(JSON.stringify(allNotes))
  const authorNotes=await noteModel.find({author: session.user._id}).populate("author", "-password -__v")
  const parsedAuthorNotes:noteItem[]=JSON.parse(JSON.stringify(authorNotes))
  if(parsedAllNotes.length!==0){
    console.log("allparse notesssssssssssssss:",parsedAllNotes)
  }
  
  return (
    <div className="py-10">
      
      <CreateNote/>
      
      <div className="flex flex-col gap-2 mb-8 mt-5">
        <h2 className="flex items-center">
          <span className="text-xs text-pink-350 mr-2">Your Notes</span>
          <span className="grow-1 bg-pink-300 h-[0.1px]"></span>
        </h2>
        <div className="flex flex-wrap justify-around lg:justify-start lg:gap-5">
          {(parsedAuthorNotes.length===0)?
          (<span className="text-stone-300 text-xs my-10">No notes have been added by you yet.</span>):parsedAuthorNotes.map((item,index)=>(
              <NoteCard key={index} details={item} tools={true}/>
           ))}
          
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-5">
        <h2 className="flex items-center">
          <span className="text-xs text-pink-350 mr-2">All Notes</span>
          <span className="grow-1 bg-pink-300 h-[0.1px]"></span>
        </h2>
        <div className="flex flex-col items-center gap-4 lg:justify-start lg:gap-5">
          {(parsedAllNotes.length===0)?
          (<span className="text-stone-300 text-xs my-10">No notes yet.</span>):parsedAllNotes.map((item,index)=>(
            <NoteCard key={index} details={item} tools={false}/>
          ))}
          {}
        </div>
      </div>
    </div>
  )
}
