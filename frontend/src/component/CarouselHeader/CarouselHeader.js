import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import HeroImage_1 from "../../images/crossImage.png";
import HeroImage_2 from "../../images/Bible_Reading.jpg";
import HeroImage_3 from "../../images/Evangelize Nations.JPG";
import HeroImage_4 from "../../images/Choir_Ministration.jpg";
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const slides = [
    {
      image: HeroImage_1,
      alt: "Cross",
      title: "Embracing Faith",
      description: "Discover the profound journey of faith and spiritual growth within our community."
    },
    {
      image: HeroImage_2,
      alt: "Bible Reading",
      title: "Diving into Scripture",
      description: "Immerse yourself in the timeless wisdom and teachings of the Bible."
    },
    {
      image: HeroImage_3,
      alt: "Evangelize Nations",
      title: "Reaching the World",
      description: "Join us in spreading the message of hope and love to all nations."
    },
    {
      image: HeroImage_4,
      alt: "Choir Ministration",
      title: "Worship in Harmony",
      description: "Experience the uplifting power of music and communal worship."
    }
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide relative" key={index}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-[100vh] object-cover filter brightness-50"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4">
              <div className="text-center max-w-2xl" style={{ height: '-30%' }}> {/* Adjust height as needed */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 md:text-left">
                  {slide.title}
                </h2>
                <p className="text-lg lg:text-xl xl:text-2xl font-normal mt-2 lg:mt-3 ">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
