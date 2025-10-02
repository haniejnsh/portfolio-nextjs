import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PropsType {
  page: number;
  totalPage: number;
  pageChange: (page: number) => void;
}

export default function Pagination({ page, totalPage, pageChange }: PropsType) {
  return (
        <div className="flex w-full items-center justify-center gap-5 lg:col-span-2 my-5">
        <span 
         className={`${(page>1)?" transition cursor-pointer":""} text-lg lg:text-xl text-[var(--stone-400)]`}
         onClick={() =>{if(page>1){pageChange(page - 1)}}}
        >
          <FaAngleLeft />
        </span> 
        {(page>1) && <span className="text-stone-500 text-xs lg:text-sm transition cursor-pointer" onClick={() => pageChange(1)}>1</span>}
        {(page>3) && <span className="text-stone-500 text-xs lg:text-sm transition cursor-pointer">...</span>}
        {(page>2) && <span className="text-stone-500 text-xs lg:text-sm transition cursor-pointer" onClick={() => pageChange(page - 1)}>{page-1}</span>}
        <span className="text-pink-350 text-sm lg:text-base border border-[var(--border-form)] rounded-full flex justify-center items-center w-6 h-6">{page}</span>
        {(page<totalPage-1) && <span className="text-stone-500 text-xs lg:text-sm transition cursor-pointer" onClick={() => pageChange(page + 1)}>{page+1}</span>}
        {(page<totalPage-2) && <span className="text-stone-500 text-xs lg:text-sm transition cursor-pointer">...</span>}
        {(page<totalPage) && <span className="text-stone-500 text-xs lg:text-sm transition cursor-pointer" onClick={() => pageChange(totalPage)}>{totalPage}</span>}
        <span 
         className={`${(page<totalPage)?" transition cursor-pointer":""} text-lg lg:text-xl text-[var(--stone-400)]`}
         onClick={() =>{if(page<totalPage){pageChange(page + 1)}}}
        >
          <FaAngleRight />
        </span>
    </div>
  );
}
