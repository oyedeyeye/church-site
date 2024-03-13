import React from 'react'
import Naavbar from '../component/Navbar/Naavbar'
import Footer from '../component/Footer/Footer'
import { Data } from '../Data'
import Hero from "../images/crossImage.png"
import sepcam from "../images/sepcam Image.png"

// import { Route,Router,Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        
<Naavbar/>
{/* Hero Section */}

<div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={Hero}
            alt="Hero Background"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-blue-800 opacity-60 z-10"></div>
        </div>
        <div className="flex items-center justify-center relative z-20 h-full">
          <div className="text-center text-white">
            <p className="text-lg lg:text-xl xl:text-2xl font-normal mt-2 lg:mt-3">Welcome to</p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2 lg:mt-4">THE SCEPTRE</h1>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">OF POWER CHRISTIAN MINISTRY</h1>
          </div>
        </div>
      </div>




      <div class="container-fluid bg-[#edf5ff] text-container min-h-screen">
  <div class="container mx-auto mt-8 mb-12 px-4 lg:px-0 max-w-3xl">
    <h1 class="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 lg:mb-6">WELCOME ADDRESS</h1>
    <p class="text-blue-900 lg:text-base mb-4 lg:mb-6 leading-relaxed lg:leading-loose">
      You are welcome to this website. Getting and growing people in relationship with Jesus is our mandate and we have been committed to this assignment from the day of the commission. That you have logged on to this site is not an accident, it is a positive proof that God has a great plan for your life. Moreover, you can find out information and build-up materials in Sceptre of Power Christian Ministry and how you can be a part of this commission. Keep Coming Back. You are more than a conqueror.
    </p>
  </div>
</div>

<div className="container-fluid section">
    <div className="container">
    
    <div className='flex flex-col items-center sm:flex-row sm:items-center justify-between pt-10'>
    <span>
    <h1 className='text-blue text-lg font-bold ml-4'>Join us to experience <br/>effectual worship and life-changing <br/> revelations from God's word.</h1>

    </span>
    <div className='mt-4 sm:mt-0 sm:mr-12'>  
        <div className='flex items-center bg-blue text-white p-2 rounded-md 	'>
            <a href='#' className='flex items-center hover:text-white' >
                <img src="/logs/radio.png" alt="radio-png" className='h-6 mr-2' />
                WATCH LIVE
            </a>
        </div>
        <div className='flex items-center mt-3 bg-btn p-2 rounded-md font-bold'>
            <a href='#' className='flex items-center hover:text-black'>
                <img src="/logs/Vector Listen.png" alt="Listen-png" className='h-6 mr-2' />
                LISTEN LIVE
            </a>
        </div>
    </div>
</div>



<div className='flex flex-col sm:flex-row justify-between pt-8'>
    {Data.map(item => (
        <div key={item.id} className='bg-white rounded-lg shadow-md p-4 mb-4 mr-8 ml-3'>
            <img src={item.image} alt={item.title} className='h-52 w-90 object-cover rounded-t-lg' />
            <div className='p-2'>
                <h5 className='text-blue text-center text-lg font-bold'>{item.title}</h5>
                <p className='text-center font-extralight'>{item.body}</p>
            </div>
        </div>
    ))}
</div>

        
    </div>
</div>
   

<div className="events">
<h1 className="pt-4 lg:pt-6 xl:pt-8 text-blue-900 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
      NEWS & EVENTS
    </h1>
    <div style={{padding:"3em"}} id="carouselExampleSlidesOnly" className="carousel slide newevents" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={sepcam} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={sepcam} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={sepcam} className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
</div>
<div className="flex flex-col items-center">

  <h2 className="text-3xl font-bold text-blue-500 mb-10 mt-10">CONTACT US</h2>

  <div className="flex justify-center w-full">

    <div className="bg-gray-100 p-4 rounded w-full max-w-md">
    
      <input type="text" placeholder="Name" className="border p-3 rounded w-full mb-6" />   

      <input type="text" placeholder="Phone" className="border p-3 rounded w-full mb-6" />
   
      <input type="email" placeholder="Email" className="border p-3 rounded w-full" />

    </div>

    <div className="bg-gray-100 p-4 rounded w-full max-w-md ">  

       <textarea className="w-full border p-3 rounded h-64 mb-4"></textarea>
       
    </div>

  </div>

  <div className=" p-4 w-full mt-6 rounded text-center">
    <button className="bg-blue text-white px-40 py-3 rounded">
      Send
    </button>
  </div>

</div>
<Footer/>
    </div>
  )
}

export default Home
