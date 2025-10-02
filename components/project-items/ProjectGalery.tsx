"use client"

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

export default function ProjectGallery({ images }: { images: string[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className='w-full mt-5 lg:mt-10'>
      <div className='relative border border-[var(--stone-300)] rounded-sm p-2'>
        <FaCaretLeft className='custom-prev absolute left-0 top-[50%] transition cursor-pointer z-10 text-4xl transform -translate-y-1/2 text-pink-300'/>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        spaceBetween={10}
        slidesPerView={1}
        loop
      >
        
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            
            <div className='flex justify-center items-center w-full h-56 lg:h-[440px] mx-auto py-2'>
                <Image 
                 src={img}
                 alt={`Project Image ${idx + 1}`} 
                 className="object-contain w-full h-full"
                 width={350}
                 height={350}
                />
            </div>
            
          </SwiperSlide>
        ))}
        
      </Swiper>
      <FaCaretRight className='custom-next absolute right-0 top-[50%] transition cursor-pointer z-10 text-4xl transform -translate-y-1/2 text-pink-300'/>
      </div>

      <div className="flex flex-wrap gap-[4px] lg:gap-3 my-2 lg:mb-3 lg:mt-7">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="max-w-12 lg:max-w-24 max-h-16 lg:max-h-28 cursor-pointer mb-1 lg:mb-2"
            onClick={() => swiperRef.current?.slideToLoop(idx)} 
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
