import Image from "next/image";
// import x from "../../public/CV."

export default function Home() {
  return (
    <div >
      <div className="flex flex-col items-start py-10 px-2 w-[85%] text-justify">
        <p className="text-[10px] text-stone-800 m-0">Hello i am</p>
        <p className="text-base text-pink-350 m-0">Hanieh Janeshinpour</p>
        <p className="text-3xl text-stone-900 font-bold m-0 mt-2">Frontend</p>
        <p className="text-3xl text-stone-900 m-0 p-0 pl-6 font-bold mb-3">Developer</p>
        <p className="text-[10px] text-stone-800 m-0">
          I am interested in    front-end development and have completed specialized courses in React.js from Maktab Sharif. During the course, I worked on numerous projects. I am ready to leverage my technical abilities in real-world projects and continue to learn and grow.
        </p>
        <a href="/cv.pdf" download="CV_Hanieh_Janeshinpour.pdf" className="bg-pink-350 text-white text-xs cursor-pointer transition rounded-sm px-3 py-1 my-5 hover:bg-pink-300">
          Download CV
        </a>
      </div>

    </div>
    
  );
}
