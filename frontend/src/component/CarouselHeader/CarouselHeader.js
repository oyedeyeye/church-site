import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import HeroImage from "../../images/crossImage.png";
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src={HeroImage} alt="Hero Background" className="w-full h-[100vh] object-cover filter brightness-50"/>
            </div>
        <div className="embla__slide"><img
            src={HeroImage}
            alt="Hero Background"  
            className="w-full h-[100vh] object-cover filter brightness-50"
          /></div>
        <div className="embla__slide"><img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-[100vh] object-cover filter brightness-50"
          /></div>
      </div>
    </div>
  )
}
