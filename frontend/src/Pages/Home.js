import React from 'react';
import Naavbar from '../component/Navbar/Naavbar';
import Footer from '../component/Footer/Footer';
import { Data } from '../Data';
import HeroImage from "../images/crossImage.png";
import SepcamImage from "../images/sepcam Image.png";
import { EmblaCarousel } from '../component/CarouselHeader/CarouselHeader';

function Home() {
  return (
    <div>
      <Naavbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
        <EmblaCarousel/>
          <div className="absolute inset-0 bg-blue-800 opacity-60 z-10"></div>
        </div>
        <div className="flex flex-col items-center justify-center relative z-20 h-full text-white">
          <p className="text-lg lg:text-xl xl:text-2xl font-normal mt-2 lg:mt-3">Welcome to</p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2 lg:mt-4 mb-2 lg:mb-4 text-center md:text-left">THE SCEPTRE</h1>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 text-center md:text-left">OF POWER CHRISTIAN MINISTRY</h1>
        </div>
      </div>

      {/* Welcome Address Section */}
      <div className="container-fluid bg-[#edf5ff] text-blue-900 py-8 md:py-12">
        <div className="container mx-auto px-4 lg:px-0 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 lg:mb-6">WELCOME ADDRESS</h1>
          <p className="text-lg lg:text-base leading-relaxed lg:leading-loose">
            You are welcome to this website. Getting and growing people in relationship with Jesus is our mandate and we have been committed to this assignment from the day of the commission. That you have logged on to this site is not an accident, it is a positive proof that God has a great plan for your life. Moreover, you can find out information and build-up materials in Sceptre of Power Christian Ministry and how you can be a part of this commission. Keep Coming Back. You are more than a conqueror.
          </p>
        </div>
      </div>

      <div className="container py-8 lg:py-12">
  <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center">
    <div className="text-center sm:text-left mb-8">
      <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4">Join us to experience effectual worship and life-changing revelations from God's word.</h2>
      <div className="flex justify-center">
  <a href="#" className="btn bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full mb-4 sm:mb-0 sm:mr-10">WATCH LIVE</a>
  <a href="#" className="btn bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full mb-4 sm:mb-0 sm:mr-10">LISTEN LIVE</a>
</div>

    </div>
  </div>

  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      {Data.map(item => (
        <div key={item.id} className="bg-white shadow-md p-6 rounded-lg">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.body}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Events Section */}
      <div className="container-fluid bg-[#edf5ff] text-blue-900 py-8 md:py-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 text-center">NEWS & EVENTS</h2>
        <div className="container mx-auto px-4 lg:px-0 max-w-3xl">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={SepcamImage} className="d-block w-full" alt="Sepcam Event" />
              </div>
              {/* Additional carousel items go here */}
            </div>
          </div>
        </div>
      </div>

     {/* Contact Section */}
<div className="container py-8 lg:py-12">
  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-blue-900 mb-8 text-center">
    CONTACT US
  </h2>

  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
      <div className="p-6 rounded-lg border border-gray-300">
        <input
          type="text"
          placeholder="Name"
          className="input-field mb-4 w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Phone"
          className="input-field mb-4 w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field mb-4 w-full p-3 border border-gray-300 rounded"
        />
      </div>

      <div className="p-6 rounded-lg border border-gray-300">
        <textarea
          placeholder="Message"
          className="input-field mb-4 w-full p-3 border border-gray-300 rounded h-40"
        ></textarea>
        <button className="btn bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full w-full">
          Send
        </button>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
  );
}

export default Home;
