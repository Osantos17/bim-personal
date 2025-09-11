import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

function Bryant() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const slides = [
    {
      src: "/images/598Bryant/598BryantFreeway.jpeg",
      alt: "598BryantFreeway"
    },
    {
      src: "/images/598Bryant/598BryantStreetPedestrian.jpeg",
      alt: "598BryantStreetPedestrian"
    },
    
  ];

  return(
    <div className='Bryant'>
      <div className='text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-5 lg:mb-14'>
        598 BRYANT
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
            <SwiperSlide
              key={index}
              className="flex justify-center items-center mb-4 lg:mb-6 relative"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-h-[500px] w-auto object-contain"
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
          598 Bryant is a 31-story residential tower in San Francisco’s SoMa district, delivering 380 housing units with retail space, structured parking, and ground-level streetscape improvements. I coordinated the transition from demolition to construction with consultants and trade partners, ensuring design continuity during early phases. Within ACC, I oversaw team collaboration, document control, and workflow management to maintain consistency across disciplines. My role also emphasized cross-discipline coordination to resolve complex clashes in the curtain wall, structural, and MEP systems, enabling efficient design integration on a challenging downtown site.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bryant;