import Link from "next/link";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {
  return (
    <header className="flex justify-between">
        <div className="text-stone-700 text-sm flex gap-1">
            <span className="text-pink-350 font-bold">Hanieh</span>
            <span>Janeshinpour</span>
        </div>
        <TiThMenuOutline className="text-pink-350 text-2xl cursor-pointer transition"/>
        <nav className="hidden">
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link href={"/notes"}>Notes</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="hidden">dark</div>
    </header>
  )
}
