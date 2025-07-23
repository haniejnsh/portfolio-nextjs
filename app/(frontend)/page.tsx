import Image from "next/image";
// import x from "../../public/CV."
import girl from "../../public/images/girl4.png"

export default function Home() {

  

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:mt-12 animate-[var(--animation-tran1)]">
      
      <div className="flex flex-col items-start py-10 px-2 w-[85%] text-justify lg:w-[50%] lg:px-4 lg:gap-2">
        <p className="text-[10px] text-stone-800 m-0 lg:text-base ">Hello i am</p>
        <p className="text-base text-pink-350 m-0 font-bold lg:text-xl">Hanieh Janeshinpour</p>
        <p className="text-3xl text-stone-900 font-bold m-0 mt-2 lg:text-5xl">Frontend</p>
        <p className="text-3xl text-stone-900 m-0 p-0 pl-6 font-bold mb-3 lg:text-5xl lg:pl-20 lg:mb-6">Developer</p>
        <p className="text-[10px] text-stone-800 m-0 lg:text-base">
          passionate about clean coding, simple design, and continuous learning.
          I invite you to explore my portfolio and get to know my work and professional journey in React and Next.js.
        </p>
        {/* <p>
          سلام، من حانیه جانشین‌پور هستم — توسعه‌دهنده فرانت‌اند که به کدنویسی مرتب، طراحی ساده و یادگیری مداوم علاقه‌مندم.
          از شما دعوت می‌کنم از این پورتفولیو دیدن کنید و با نمونه‌کارها و مسیر حرفه‌ای من در حوزه React و Next.js آشنا شوید.
        </p> */}
        <a href="/cv.pdf" download="CV_Hanieh_Janeshinpour.pdf" className="bg-pink-350 text-white text-xs cursor-pointer transition rounded-sm px-3 py-1 my-5 hover:bg-pink-300 lg:text-sm lg:py-2 lg:mt-8">
          Download CV
        </a>
      </div>

      <div className="w-[90%] max-w-[200px] flex justify-center lg:w-[50%] lg:max-w-none">
        <Image src={girl} alt="picture" className="w-full  lg:max-w-[350px]"/>
      </div>

    </div>
    
  );
}
