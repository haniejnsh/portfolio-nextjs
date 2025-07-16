import CreateNote from "@/components/CreateNote";
import NoteCard from "@/components/NoteCard";
import RegisterForm from "@/components/user/RegisterForm";
import dbConnect from "@/db/db-connect";
import noteModel from "@/models/noteModel";

interface noteItem {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export default async function NotesPage() {
  await dbConnect();
  const notes=await noteModel.find({})
  const parsedNotes:noteItem[]=JSON.parse(JSON.stringify(notes))
  console.log("allparse notesssssssssssssss:",parsedNotes)
  return (
    <div className="">
      
      {/* <CreateNote/> */}
      <RegisterForm/>
      
      <div className="flex flex-col gap-2 mb-5">
        <h2 className="flex items-center">
          <span className="text-xs text-pink-350 mr-2">Your Notes</span>
          <span className="grow-1 bg-pink-300 h-[0.1px]"></span>
        </h2>
        <div className="flex flex-wrap justify-around lg:justify-start lg:gap-5">
          {parsedNotes.map((item,index)=>(
              <NoteCard key={index} details={item}/>
           ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <h2 className="flex items-center">
          <span className="text-xs text-pink-350 mr-2">All Notes</span>
          <span className="grow-1 bg-pink-300 h-[0.1px]"></span>
        </h2>
        <div className="flex flex-wrap justify-around lg:justify-start lg:gap-5">
          {parsedNotes.map((item,index)=>(
            <NoteCard key={index} details={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}
