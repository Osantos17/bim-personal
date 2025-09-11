import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

function TheFoundry() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const slides = [
    {
      src: "/images/Foundry/FoundryB.png",
      alt: "FoundryB"
    },
    {
      src: "/images/Foundry/FoundryA.png",
      alt: "FoundryA"
    },
    {
      src: "/images/Foundry/FoundrySite.png",
      alt: "FoundrySite"
    },
    
  ];

  return(
    <div className='Foundry'>
      <div className='text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-5 lg:mb-14'>
        ALAMEDA MARINA - THE FOUNDRY
      </div>
      <div>
        <Swiper
          scrollbar={{ hide: false }}
          grabCursor={true}     
          resistance={true}     
          resistanceRatio={0.5} 
          threshold={1}         
          speed={500}           
          modules={[Scrollbar]}
          className="mySwiper bottom-3"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-evenly items-center mb-4 lg:mb-6 relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
              />
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handlePrevClick}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleNextClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <div className="text-xs text-white text-center mx-3 md:text-xl md:mx-8 lg:mt-4 lg:mx-16 lg:text-2xl lg:leading-relaxed">
          The Foundry was a five-story, 259-unit residential building with structured parking, central courtyard amenities, and a public waterfront, delivered as part of a larger 801-unit master plan redevelopment. As BIM Manager for this project, I directed project setup by establishing site coordinates, modeling standards, and BEP compliance to ensure consistency across phases. I managed the BIM 360 environment, overseeing consultant access, folder hierarchy, and design uploads. Weekly coordination meetings with architectural, structural, MEP, and landscape teams allowed me to guide clash resolution and streamline collaboration. My role balanced short-term coordination for Phase III with long-term planning for future phases of the development.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheFoundry;