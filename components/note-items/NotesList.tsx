"use client";
import { useEffect, useState } from "react";
import type { NoteItemsType } from "@/types";
import Pagination from "./Pagination";
import NoteCard from "./NoteCard";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { BiError } from "react-icons/bi";

interface PropsType {
  initialNotes: NoteItemsType[];
  totalPages: number;
  limit: number;
  author: string;
}

export default function NotesList({ initialNotes, totalPages, limit , author }: PropsType) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [notes, setNotes] = useState<NoteItemsType[]>(initialNotes);
  const [page, setPage] = useState((author==="all")?(Number(searchParams.get("page")) || 1):(Number(searchParams.get("page_author")) || 1) );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(totalPages || 1);
  
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/notes?page=${page}&limit=${limit}&author=${author}`); 
        if (!res.ok) throw new Error(`Failed to load data : ${res.status}`);
        const data = await res.json();
        setNotes(data.notes);
        setTotal(data.totalPages)
      } catch (e) {
        console.log("error for notes : ", e );
        setError("Unable to load data. Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [page,  searchParams]);

  const handlePageChange = (p: number) => {
    setPage(p);

  const params = new URLSearchParams(searchParams.toString());
  params.delete("refresh");
  if (author === "all") {
    params.set("page", p.toString()); 
  } else {
    params.set("page_author", p.toString());
  }

  router.push(`?${params.toString()}`, { scroll: false });
     
  };

  return (
    <>
      {loading && 
        <p className="text-center mt-8 lg:mt-12 mb-0 lg:mb-4 lg:col-span-2 flex flex-col items-center justify-center gap-3">
          <FaSpinner className="text-lg lg:text-xl text-[var(--stone-400)] animate-[var(--animation-spinner)]"/>
          <span className="text-xs lg:text-sm text-[var(--stone-400)]">is loading . . .</span>
        </p>}
      {error && 
      <p className="text-center mt-8 lg:mt-12 mb-0 lg:mb-4 text-xs lg:text-sm text-red-400 lg:col-span-2 flex justify-center items-center gap-1 px-3">
        <BiError className="text-xs lg:text-lg"/>
        {error}
      </p>}

      {!loading && !error && (
        <>
          {notes.map((note, i) => (
            <NoteCard key={i} details={note} tools={(author==="all")?(false):(true) } />
          ))}
          <Pagination page={page} totalPage={total} pageChange={handlePageChange} />
        </>
      )}

      
    </>
  );
}

