import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="border-t bg-stone-50 border-pink-200 w-full ">
      <div className="px-4 pt-16 pb-4 flex  flex-col items-center gap-4">

        <nav className="flex items-center gap-3">
          <a
            href="https://github.com/haniejnsh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-[4px] text-pink-350 border-2 border-pink-350  rounded-full text-base flex justify-center items-center transition"
          >
            <TbBrandGithubFilled />
          </a>
          <a
            href="https://www.linkedin.com/in/hanieh-janeshinpour-a2983b1b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-[4px] text-pink-350 border-2 border-pink-350 rounded-full text-base flex justify-center items-center transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://t.me/hanie_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-[4px] text-pink-350 border-2 border-pink-350 rounded-full text-base flex justify-center items-center transition"
          >
            <FaTelegramPlane />
          </a>
        </nav>

        <div className="">
          
          <a href="mailto:h.janeshinpour1995@gmail.com" className="flex items-center gap-1 text-sm text-stone-600 font-bold">
            <MdMailOutline className="text-base"/>
            h.janeshinpour1995@gmail.com
          </a>
        </div>

        <small className="border-t-[1px] border-stone-300 text-xs pt-2 text-stone-500 mt-8" >
          © 2025 Hanieh Janeshinpour, All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
