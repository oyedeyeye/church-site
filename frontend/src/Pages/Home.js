import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import { Data } from '../Data'

// import { Route,Router,Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        
<Navbar/>
{/* Hero Section */}

<div class="hero-image relative">
    <div class="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p class="text-white text-lg lg:text-xl xl:text-2xl font-normal mt-2 lg:mt-3">welcome to</p>
        <h1 class="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold mt-4 lg:mt-6 w-full">THE SCEPTRE OF POWER CHRISTIAN MINISTRY</h1>
    </div>
</div>



<div class="container-fluid text-container">
  <div class="container text-content">
    <h1 class="text-black font-semibold">WELCOME ADDRESS</h1>
    <p class="text-blue-900 lg:text-black text-lg lg:text-base mt-4 lg:mt-6 leading-relaxed lg:leading-loose">
      You are welcome to this website. Getting and growing people in relationship
      with Jesus is our mandate and we have been committed to this assignment from
      the day of the commission. That you have logged on to this site is not an accident, 
      it is a positive proof that God has a great plan for your life. Moreover, you can find 
      out information and build-up materials in Sceptre of Power Christian Ministry and 
      how you can be a part of this commission. Keep Coming Back. You are more than a conqueror.
    </p>
  </div>
</div>
<div className="container-fluid section">
    <div className="container">
    
<div className='flex items-center pt-10 justify-between'>
    <span>
    <h1 className='text-blue text-lg font-bold ml-4'>Join us to experience <br/>effectual worship and life-changing <br/> revelations from God's word.</h1>

    </span>
    <div className='mr-12'>  
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



<div className='flex justify-between pt-8'>
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
                <img src="/images/sepcam image.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="/images/sepcam image.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="/images/sepcam image.png" className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid contact-info">
<div className="contact-content">
      <div className="contact-us text-blue-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
      <h2>CONTACT US</h2>
    </div>
        <form className="contact-form">
            <div className="mb-3 mb3">        
            <input type="text" className="form-control" placeholder="Your Name*" required/>
            </div>
            <div className="mb-3 mb3">
                <input type="text" className="form-control" placeholder="Your Phone No*" required/>
            </div>
            <div className="mb-3 mb3">
                <input type="email" className="form-control" placeholder="Your Email*" required/>
            </div>
            <div className="form-floating formfloating">
                <textarea className="form-control " placeholder="Leave a comment here" style={{height: 150}}></textarea>
                <label for="floatingTextarea2">Your Message*</label>
            </div>
            <div className="contact-btn text-center">
            <button type="submit" style={{backgroundColor:"#002171", color:"#FFFFFF"}}>SEND</button>
            </div>
        </form> 
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Home
