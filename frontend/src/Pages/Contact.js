import React from 'react'
// import Navbar from '../component/Navbar/Navbar'
// import Navbar2 from '../component/Navbar2'
import Naavbar from '../component/Navbar/Naavbar'
import Footer from '../component/Footer/Footer'

function Contact() {
  return (
    <div>
        
    <Naavbar/>
    
    <nav className="word-con">
        <h1><b>CONTACT</b></h1>
      </nav>    
    
    <main>
        <br/><br></br><br></br>
        <div className="container col-xl-10 col-xxl-8 px-0 py-2">
            <div className="row align-items-center g-lg-0 py-3">
            <div className="col-lg-8 text-lg-start">
                <div id="map-container-google-4" className="z-depth-1-half map-container-4" style={{height: 550}}>
                    <iframe src="https://maps.google.com/maps?q=sepcam-auditorium-Akure&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style={{border: 0, width: '100%', height: 600}}>
                    </iframe>              
                </div>
            </div>
            <div className="col-md-10 mx-auto px-4 col-lg-4">
                <form className="p-4 p-md-5">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control bg-light" id="floatingInput" placeholder="Your name"/>
                    <label for="floatingInput" required>Your Name<span style={{color: 'red'}}>*</span></label>
                </div><br/>
                <div className="form-floating mb-3 ">
                    <input type="tel:" className="form-control bg-light" id="floatingYourPhoneNo" placeholder="Your Phone No."/>
                    <label for="floatingYourPhoneNo" required>Your Phone No.<span style={{color: 'red'}}>*</span></label>
                </div><br/>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control bg-light" id="floatingEmail" placeholder="Email"/>
                    <label for="floatingEmail" required>Email<span style={{color: 'red'}}>*</span></label>
                </div><br/>
                <div className="form-floating mb-3">
                    <textarea className="form-control h-50 bg-light" id="exampleFormControlTextarea1" rows="6" placeholder="Your Message"></textarea>
                    <label for="FormControlTextarea1" className="form-label" placeholder="Your Message">Your Message<span style={{color: 'red'}}>*</span></label>
                </div><br/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>
                <hr className="my-0"/>
                </form>
            </div>
            </div>
        </div>
        <div class="container px-4 py-5" id="icon-grid">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                <div class="col d-flex align-items-start ">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16" style={{color:'#001355'}}>
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                    <div>
                    <h6 class="fw-bold mb-0">Plot 31 - 32 Ifelodun Estate,<br></br> Behind Wesco Estate,<br></br>Off Akure-Ilesa Expressway, <br></br>Akure, Ondo-State</h6>
                    </div>
                </div>
                <div class="col d-flex align-items-start ">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" style={{color:'#001355'}}>
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                    <div>
                    <h6 class="fw-bold mb-0"> 08132876376 <br></br><br></br> 08062201976 <br></br><br></br> 08036709782</h6>
                    </div>
                </div>
                <div class="col align-items-start ">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16" style={{color:'#001355'}}> 
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/> 
                </svg> 
                    <div>
                    <h6 class="fw-bold mb-0 "> media@sepcam.org</h6>            
                    </div><br></br>
                    <div class="col align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" style={{color:'#001355'}}> 
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                    </svg>
                    <div>
                    <h6 class="fw-bold mb-0"> https://www.sepcam.org</h6>
                    </div>
                    </div>
                    
                </div>      
            </div>
        </div>
        
        {/* <div className="container px-4 py-5" id="icon-grid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <div className="col d-flex align-items-start border">
                  <svg className="bi text-muted flex-shrink-0 me-3 border" width="1.75em" height="1.75em"> <img src="/log2/Vector.png" alt="locator"/></svg>
                  <div>                
                    <p style={{paddingLeft: '5em', color: '#002171'}}>Plot 31-32 Ifelodun Estate, Behind Wesco Estate, Off Akure-Ilesa Expressway, Akure, Ondo-State</p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><img src="/log2/Vector (1).png" alt="tell phone"/></svg>
                  <div>
                    <p style={{paddingLeft: '5em', color: '#002171'}}>08132876376 <br/> 08062201976 <br/> 08036709782</p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="row d-flex align-items-start">
                       
                      <div>
                        <p style={{paddingLeft: '5em', color: '#002171'}}> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg>  media@sepcam.org</p>
                      </div>
                      
                        <div>
                            <p style={{paddingLeft: '2em', color: '#002171'}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                              </svg> https://www.sepcam.org</p>
                        </div>
                    </div>                
                  
                </div>            
            </div>
        </div>    */}
       
    </main>
   
<Footer/>
    </div>
  )
}

export default Contact
