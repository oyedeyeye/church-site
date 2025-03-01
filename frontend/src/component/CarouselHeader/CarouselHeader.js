import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import HeroImage_1 from "../../images/crossImage.png";
import HeroImage_2 from "../../images/Bible_Reading.jpg";
import HeroImage_3 from "../../images/Evangelize Nations.JPG";
import HeroImage_4 from "../../images/Choir_Ministration.jpg";
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src={HeroImage_1} alt="Hero Background" className="w-full h-[100vh] object-cover filter brightness-50"/>
            </div>
        <div className="embla__slide"><img
            src={HeroImage_2}
            alt="Hero Background"  
            className="w-full h-[100vh] object-cover filter brightness-50"
          />
          {/* <div className="flex flex-col items-center justify-center relative z-20 h-full text-white"> */}
          {/* <p className="text-lg lg:text-xl xl:text-2xl font-normal mt-2 lg:mt-3"></p> */}
          {/* <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2 lg:mt-4 mb-2 lg:mb-4 text-center md:text-left">THE SCEPTRE</h1> */}
          {/* <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 text-center md:text-left">Salvation</h2> */}
          {/* OF POWER CHRISTIAN MINISTRY</div> */}
          </div>
        <div className="embla__slide"><img
            src={HeroImage_3}
            alt="Hero Background"
            className="w-full h-[100vh] object-cover filter brightness-50"
          /></div>
        <div className="embla__slide"><img
            src={HeroImage_4}
            alt="Hero Background"
            className="w-full h-[100vh] object-cover filter brightness-50"
          /></div>
      </div>
    </div>
  )
}
