import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col pt-8 pb-20 items-center lg:flex-row lg:justify-center lg:mt-12 animate-[var(--animation-tran1)]">
      
      <div className="flex flex-col items-start py-10 px-2 text-justify lg:w-[50%] lg:px-4 lg:gap-2 ">
        <p className="text-sm text-[var(--stone-800)] m-0 lg:text-base transition-colors duration-500">Hello I am</p>
        <p className="text-lg text-pink-350 m-0 font-bold lg:text-xl transition-colors duration-500">Hanieh Janeshinpour</p>
        <p className="text-4xl text-[var(--stone-900)] font-bold m-0 mt-4 lg:text-5xl transition-colors duration-500">Frontend</p>
        <p className="text-4xl text-[var(--stone-900)] m-0 p-0 pl-6 font-bold mb-5 lg:text-5xl lg:pl-20 lg:mb-6 transition-colors duration-500">Developer</p>
        <p className="text-sm text-[var(--stone-800)] m-0 lg:text-base transition-colors duration-500">
          passionate about clean coding, simple design, and continuous learning.
          I invite you to explore my portfolio and get to know my work and professional journey in React and Next.js.
        </p>
        <a href="/cv.pdf" download="CV_Hanieh_Janeshinpour.pdf" className="bg-pink-350 text-[var(--bg-main)] text-xs cursor-pointer transition rounded-sm px-3 py-1 my-8 hover:bg-pink-300 lg:text-sm lg:py-2 lg:mt-8 transition-colors duration-500">
          Download CV
        </a>
      </div>

      <div className="w-[90%] max-w-[200px] flex justify-center lg:w-[50%] lg:max-w-none ">
        <Image 
        src="/images/girl4.png" 
        alt="picture" 
        className="w-full  lg:max-w-[350px]"
        width={350}
        height={350}
        />
      </div>

    </div>
    
  );
}
