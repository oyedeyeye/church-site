import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import HeroImage_1 from "../../images/crossImage.png";
import HeroImage_2 from "../../images/Women_Choir.jpg";
import HeroImage_3 from "../../images/Praying_People.jpg";
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
          /></div>
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
