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
    <div className="border border-pink-200 rounded-sm px-2 pt-2 w-36 flex flex-col items-center gap-3">
        <h3 className="font-bold text-stone-700">{details.title}</h3>
        <p className="text-center text-xs text-stone-600">{details.content}</p>
        <div className="flex flex-col justify-between items-start w-full">
            <span className="text-[0.5rem] text-pink-350">{formatToEnglishDate(details.createdAt)}</span>
            <span className="text-[0.5rem] text-pink-350">{details.author.name}</span>
        </div>
        {
          tools? (
            <NoteCardTools noteDetails={details}/>
          ):""
        }
    </div>
  )
}
