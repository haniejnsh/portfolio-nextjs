import { authOptions } from "@/app/(backend)/api/auth/authOptions";
import CreateNote from "@/components/note-items/CreateNote";
import GoToLogin from "@/components/note-items/GoToLogin";
import NotesList from "@/components/note-items/NotesList";
import dbConnect from "@/db/db-connect";
import noteModel from "@/models/noteModel";
import { NoteItemsType } from "@/models/NoteType";
import { getServerSession } from "next-auth";

export default async function NotesPage() {
  
   const session =await getServerSession(authOptions)
  const page = 1;
  const limit = 6;
  const limitAuth=4
  

  await dbConnect();

  const totalNotes = await noteModel.countDocuments(); 
  const totalPages = Math.ceil(totalNotes / limit);
  const allNotes=await noteModel.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("author", "-password -__v");
  const parsedAllNotes:NoteItemsType[]=JSON.parse(JSON.stringify(allNotes));

  let parsedAuthorNotes:NoteItemsType[]=parsedAllNotes
  let totalAuthorPages:number=totalPages
  if (session) {
    // console.log("first,",session.user)
    console.log("sesstin .... >   ", session)
    const totalAuthorNotes = await noteModel.countDocuments({ author: session.user._id });
    totalAuthorPages = Math.ceil(totalAuthorNotes / limitAuth);
    const authorNotes=await noteModel.find({author: session.user._id})
      .sort({ createdAt: -1 })
      .skip((page - 1) * (limitAuth))
      .limit(limitAuth)
      .populate("author", "-password -__v")
    parsedAuthorNotes=JSON.parse(JSON.stringify(authorNotes));
  }
  
  return (
    <div className="flex flex-col py-10 w-full lg:pb-32 lg:pt-20">
      <h1 className="w-full text-2xl font-bold text-[var(--stone-700)] mb-8 animate-[var(--animation-tran1)] lg:text-3xl lg:mb-12">Notes</h1>
      <CreateNote/>
      <div className="flex flex-col gap-4 mb-16 mt-10 lg:mt-16 lg:gap-10 animate-[var(--animation-tran1)] [animation-delay:0.5s] opacity-0">
        <h2 className="flex items-center">
          <span className="text-xs text-pink-350 mr-2 lg:text-base">
            {session?`${session.user.name} Notes` : "Your Notes"}
          </span>
          <span className="grow-1 bg-[rgba(253,165,213,0.32)] h-[0.1px] lg:h-[3px] lg:rounded-2xl"></span>
        </h2>
        {(session)?(
          <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:px-6">
          {(parsedAuthorNotes?.length===0)?
            (<span className="text-[var(--stone-300)] text-xs mt-8 lg:mt-12 mb-0 lg:mb-4  text-center lg:w-full lg:col-span-2 lg:text-base px-3">
              No notes have been added by you yet.
            </span>):
            <NotesList initialNotes={parsedAuthorNotes} totalPages={totalAuthorPages} limit={limitAuth} author={session.user._id}/>
          }
          
        </div>
        ):(
          <div className="text-[var(--stone-400)] text-center text-xs px-4 lg:text-base w-full mt-8 lg:mt-12 mb-0 lg:mb-4 ">
            To view, edit, and delete your notes, please <GoToLogin/>first.
          </div>
        )}
        
      </div>
      <div className="flex flex-col gap-4 mb-5 lg:mt-10 lg:gap-10  animate-[var(--animation-tran1)] [animation-delay:1s] opacity-0">
        <h2 className="flex items-center">
          <span className="text-xs text-pink-350 mr-2 lg:text-base">All Notes</span>
          <span className="grow-1 bg-[rgba(253,165,213,0.32)] h-[0.1px] lg:h-[3px] lg:rounded-2xl"></span>
        </h2>
        <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:px-6">
          {(parsedAllNotes.length===0)?
            (<span className="text-[var(--stone-300)] text-xs mt-8 lg:mt-12 mb-0 lg:mb-4  text-center lg:w-full lg:col-span-2 lg:text-base px-3">
              No notes yet.
            </span>):
            <NotesList initialNotes={parsedAllNotes} totalPages={totalPages} limit={limit} author={"all"}/>
          }
          {}
        </div>
      </div>
    </div>
  )
}
