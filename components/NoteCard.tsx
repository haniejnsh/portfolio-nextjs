import { formatToEnglishDate } from "@/utils/formatDate";
import NoteCardTools from "./NoteCardTools";

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

export default function NoteCard({details , tools} :{details : noteItem , tools: boolean} ) {
  return (
    <div className="border border-pink-200 rounded-sm px-4 pt-4 pb-2 w-full flex flex-col h-40 gap-3">
        <h3 className="font-bold text-stone-700">{details.title}</h3>
        <p className="text-justify grow text-xs text-stone-600 break-all whitespace-normal">{details.content}</p>
        <div className="flex justify-between w-full">
          <span className="text-[0.5rem] text-pink-350">{details.author.name}</span>
          <span className="text-[0.5rem] text-pink-350">{formatToEnglishDate(details.createdAt)}</span>
            
        </div>
        {
          tools? (
            <NoteCardTools noteDetails={details}/>
          ):""
        }
    </div>
  )
}
