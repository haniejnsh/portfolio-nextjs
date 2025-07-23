import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="border-t border-pink-350 bg-pink-50 w-full">
      <div className="">

        <nav className="">
          <a
            href="https://github.com/haniejnsh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <TbBrandGithubFilled />
          </a>
          <a
            href="https://www.linkedin.com/in/hanieh-janeshinpour-a2983b1b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://t.me/hanie_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
        </nav>

        <div className="">
          
          <a href="mailto:h.janeshinpour1995@gmail.com">
            <MdMailOutline />
            h.janeshinpour1995@gmail.com
          </a>
        </div>

        <small className="">
          © 2025 Hanieh Janeshinpour, All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
