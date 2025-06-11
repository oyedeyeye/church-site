import React from 'react';
import Naavbar from '../component/Navbar/Naavbar';
import Footer from '../component/Footer/Footer';

function Churchonline() {
  return (
    <div className="overflow-hidden">
      <Naavbar />

      
    <div className="bg-[#02336c] py-20 px-4">
      <h1 className="text-white text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        CHURCH ONLINE
      </h1>
    </div>
      <main className="bg-white pt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12">
            <div className="w-full md:w-10/12 text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Our Online Church Platform</h2>
              <p className="text-lg text-gray-600 mb-4">
                We are thrilled to have you here. Whether you are joining us for the first time or you are a returning visitor, we invite you to connect with us and be a part of our community.
              </p>
              <div className="flex justify-center mb-4">
                <button className="btn btn-primary animate-bounce">First Timers Form</button>
              </div>
            </div>

            <div className="flex w-full md:w-5/12 mb-4">
              <div className="flex flex-col text-center shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 flex-grow bg-gray-800 ">
                <h3 className="text-xl font-bold mb-3">Connect with us Live</h3>
                <a href="https://www.facebook.com/sepcamedia/live" target="_blank" rel="noreferrer" className="my-3 flex-grow flex justify-center items-center">
                  <img src="/images/Frame 15 (1).png" alt="Sepcam live Service on Facebook" className="w-24" />
                </a>
                <p>Join our live service on Facebook</p>
              </div>
            </div>

            {/* <div className="flex w-full md:w-5/12 mb-4"> 
              <div className="flex flex-col text-center shadow-lg rounded-lg bg-gradient-to-r text-white p-6 flex-grow bg-blue">
                <h3 className="text-xl font-bold mb-3">Join our Telegram Live Service</h3>
                <a href="https://t.me/sepcamedia/live" target="_blank" rel="noreferrer" className="my-3 flex-grow flex justify-center items-center">
                  <button className="btn btn-light text-grey">Join on Telegram</button>
                </a>
                <p>Join our live service on Telegram</p>
              </div>
            </div>*/}
            <div className="w-full md:w-5/12 mb-4">
                <div className="flex flex-col text-center shadow-lg rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 text-blue p-6">
                    <h3 className="text-xl font-bold mb-3">Join our Telegram Live Service</h3>
                    <div className="my-3 flex-grow flex justify-center items-center">
                        <a href="https://t.me/sepcamedia/live" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="bg-blue text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-all duration-300 ease-in-out w-full sm:w-auto">
                                Join on Telegram
                            </button>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <div className="container mx-auto py-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-3xl font-bold">Stay Connected and be Blessed</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Churchonline;
