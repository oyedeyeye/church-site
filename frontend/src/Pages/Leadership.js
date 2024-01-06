import React, { useState } from 'react'
// import Navbar from '../component/Navbar/Navbar'
// import Navbar2 from '../component/Navbar2'
import Naavbar from '../component/Navbar/Naavbar'
import Footer from '../component/Footer/Footer'




function Leadership() {
  // const [open, setOpen] = useState(false);

  // const faqs = document.querySelectorAll(".faq");
  //   faqs.forEach(faq => {
  //     faq.addEventListener("click", () =>{
  //       faq.classList.toggle("active");
  //     })
  //   })
// const handleClick = () =>{
//   setOpen(!open);
// }
  return ( 
  
    <div classNameName='best'>
      <Naavbar/>
      
      {/* <Navbar2/> */}
      <Naavbar/>
      <div className="bg-blue-900  border-b-8 border-white" style={{backgroundColor:"#02336C"}}>
        <nav className="flex justify-center items-center py-28">
          <h1 className="text-white text-3xl font-bold">LEADERSHIP</h1>
        </nav>
      </div>
    <main>
        <div className="container py-4">            
          <div className="row align-items-md-stretch">
            <div className="col-md-12">
              <div className="h-100 p-5 best rounded-3">
                <section className="sectionp">
                  <button className="bbg"><h1> BOARD OF TRUSTEES</h1></button>
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-5em', textAlign: 'left'}}><b>Pastor S. P. Ayodeji</b><br/><small>Chairman</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                    
                  </div><br/><br/><br/>
                
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-6.5em', textAlign: 'left'}}><b>Rev. E. O. Idowu</b><br/><small>Secretary</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                  </div><br/><br/><br/>
                
                
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-6.5em', textAlign: 'left'}}><b>Dr A. A. Badejo</b><br/><small>Member</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                  </div><br/><br/><br/>
                
                
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-3.2em', textAlign: 'left'}}><b>Pastor Joshua Olatunde</b><br/><small>Member</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                  </div><br/><br/><br/>
                
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-3.5em', textAlign: 'left'}}><b>Bro. Julius Akinyoola</b><br/><small>Member</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                  </div><br/><br/><br/><br/>
                
                  <button className="bbg"><h1>PASTORATE</h1></button>
                
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-5em', textAlign: 'left'}}><b>Name</b><br/><small>Position</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                  </div><br/><br/><br/>
                
                  <div className="faq">
                    <button className="leader">
                      <img src="/images/team-1.jpg" alt="mdo" width="60px" height="60px" style={{borderRadius: '50%'}}/><span style={{color: 'white', marginLeft: '-5em', textAlign: 'left'}}><b>Name</b><br/><small>Position</small></span>
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                
                    </button>
                    <div className="about role">
                      <p><b>About</b><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti explicabo voluptatem atque, saepe nihil doloremque nesciunt corrupti delectus voluptatibus tempore provident rem veritatis similique vitae aliquam expedita cupiditate hic!</p>
                    </div>
                  </div><br/>
                
                </section>     
              </div>                   
           </div>
          </div>
        </div>                             
    </main>
    
    <Footer/>
    </div>
    
      
  )
}

export default Leadership
