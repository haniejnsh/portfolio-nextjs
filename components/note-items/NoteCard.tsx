"use client"

import { formatToEnglishDate } from "@/utils/formatDate";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import NoteCardTools from "./NoteCardTools";
import { NoteItemsType } from "@/models/NoteType";

export default function NoteCard({details , tools} :{details : NoteItemsType , tools: boolean} ) {

  const [showMore , setShowMore] = useState(false);
  const isLong = details.content.length>200 ;
  return (
    <div className="border border-[var(--stone-300)] rounded-sm px-4 lg:px-6 pt-4 pb-2 w-full flex flex-col gap-3 lg:gap-5 lg:min-h-[197px] transition">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-[var(--stone-700)] text-lg grow lg:text-xl">{details.title}</h3>
          {tools && <NoteCardTools noteDetails={details}/>}
        </div>
        
        <p className="text-justify grow text-sm lg:text-base text-[var(--stone-600)] break-all whitespace-normal mb-2">
          { !isLong? 
          details.content : showMore ? 
          (
          <>
            {details.content } 
              <button 
               onClick={()=>setShowMore(!showMore)}
               className="text-[var(--stone-900)] text-xs font-bold transition border-b ml-2 cursor-pointer"
              >
                show less
                <FaAngleUp className="inline ml-[2px]"/>
              </button> 
          </>
          ) : (
          <>
            {details.content.slice(0, 200) } 
            <button 
             onClick={()=>setShowMore(!showMore)}
             className="text-[var(--stone-900)] text-xs font-bold transition border-b ml-2 cursor-pointer"
            >
              show more 
              <FaAngleDown className="inline ml-[2px]"/>
            </button> 
          </>) }
        </p>
        <div className="flex justify-between w-full lg:mt-2">
          <span className="text-[0.6rem] lg:text-xs text-[var(--stone-400)]">{`Author: ${details.author.name}`}</span>
          <span className="text-[0.6rem] lg:text-xs text-[var(--stone-400)]">{formatToEnglishDate(details.createdAt)}</span>
            
        </div>
        
    </div>
  )
}
