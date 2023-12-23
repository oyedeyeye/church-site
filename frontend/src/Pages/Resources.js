import React from 'react'
// import Navbar from '../component/Navbar/Navbar2'
// import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer/Footer'
import { Message, Page } from '../Data'



function Resources() {
  return (
    <div>
       {/* <Navbar2/>   */}
   
    
    <nav className="word-re-aca-au">
      <h1><b>RESOURCES</b></h1>
    </nav>  
  
  <main>
  <div className="container py-4">
    <h3 style={{textAlign: 'left'}}><b>Message</b></h3>
 <div>
  {Page.map(item => (
    <div key={item.id} className="  my-4 bg-white  shadow-md overflow-hidden">
      <div className="flex">
        {/* Preacher's Card */}
        <div className="bg-gray-200 p-4">
          <img src={item.preacher} alt='' className="w-30 h-30  shadow-md"/>
          <h3 className="ml-3 mt-4 text-base font-medium">{item.theme}</h3>
        </div>
        
        {/* Content Card */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
          <div className="self-end">
          <small className="text-gray-600">{item.timestamp}</small> 
            <img src={item.profile} alt='' className="w-10 h-10 rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* </div> */}<br></br>
      <nav class="navbar navbar-light bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand"><h3>Recent</h3></a>
          <form class="d-flex">
            <span class="input-group-text bg-transparent brt"><img src='/logs/magnifyingglass.png'/></span>
            <input class="form-control me-2 rbt" type="search" placeholder="Search" aria-label="Search"/>
            
          </form>
        </div>
      </nav>
      
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {Message.map(item => (
    <div key={item.id} className="rounded-lg shadow-md overflow-hidden">
      <div className="grid p-4 bg-gray-100">
        <img src={item.preacher} alt='' className="w-30 h-30 "/>
        
        <h3 className="ml-3 mt-4 text-lg font-medium">{item.theme}</h3>  
      </div>

      <div className="p-4">
        <h5 className="font-bold">{item.title}</h5>
        <p>{item.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <small className="text-gray-600">{item.timestamp}</small>  
          <img src={item.profile} alt='' className="w-10 h-10 rounded-full"/>
        </div>
      </div>
    </div>
  ))}  
</div>


  </div>   
  </main>   
   <Footer/>
    </div>
  )
}

export default Resources


