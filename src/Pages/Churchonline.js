import React from 'react'
// import Navbar from '../component/Navbar/Navbar'
import Navbar2 from '../component/Navbar2'

function Churchonline() {
  return (
   <div>
        <Navbar2/>
    
        <nav className="word-coc-blog">
            <h1><b>CHURCH ONLINE</b></h1>
        </nav>  
   
        <main style={{backgroundColor: '#ffffff'}}>
        <br></br><br></br>
            <div className="container py-4">      
                <div className="row g-0">
                    <div className="col-md-8">           
                    <iframe width="100%" height="550px" src="https://www.youtube.com/embed/9bAG5DVgsCY" title="SEPCAM on YouTube player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-4">        
                        <div className="card-body setTextLeft">            
                        <h6 className="card-title setTextLeft" style={{color:'#000000'}}>Are you here for the first time?</h6> <br></br>           
                        <p><b>We are glad to welcome you to our platform, get in touch with us and fill out the form below.</b></p>
                            <div class="d-grid col-5 mx-auto">
                            <a href=''><button class="btn btn-primary" type="button"><b><i>First Timers' Form</i></b></button></a>                  
                            </div>
                            <br></br>
                            <div class="card text-center" style={{width: '9rem;', backgroundColor:'#002171'}}>
                                <div class="card-body">
                                <a href="https://www.facebook.com/sepcamedia/live" target="_blank" rel="noreferrer"> <img src="/images/Frame 15 (1).png" alt="Sepcam live Service on Facebook"/></a>
                                </div>             
                            </div>
                        </div>          
                    </div>
                </div>             
            </div><br></br>      
        </main>
        <div className="container py-4">      
                <div className="row g-0">
                    <div className="col-md-12"> 
                    <iframe src="https://mixlr.com/users/7896621/embed?artwork=false&color=#003cc7" frameborder="0" scrolling="no" height="190px" width="100%"><a href="http://mixlr.com/sepcam" style={{color: '#fff', display: 'block', fontFamily: 'Helvetica,sans-serif', fontSize: 11, textAlign: 'left'}}>sepcam is on Mixlr</a></iframe><a href="http://mixlr.com/sepcam" style={{color: '#fff', display: 'block', fontFamily: 'Helvetica,sans-serif', fontSize: 11, textAlign: 'left'}}>sepcam is on Mixlr</a>               
                    </div>                
                </div>             
        </div><br></br>     
        <div className="row">      
            <div className="col-md-3 w-100" style={{textAlign: 'center'}}>
            <b><h1>Stay Connected and be Blessed</h1></b><br></br><br></br>
            </div>      
    
        
            <footer>
                <div className="footer-text">
                    <p>
                        <img src="/logs/location-pin.png" alt="locationPng" width="30" height="30"/>
                        <span>Plot 31-32 Ifelodun Estate, Behind Wesco Estate,<br/>Off Akure-Ilesa Expressway, Akure, Ondo State</span>
                    </p>
                </div>
                <div className="footer-img">
                    <img src="/logs/Vector (1).png" alt="twitterPng"/>
                    <img src="/logs/Vector (2).png" alt="youtubePng"/>
                    <a href="https://www.facebook.com/sepcamedia"><img src="/logs/Vector (3).png" alt="Sepcam Facebook Page"/></a>
                    <a href="https://t.me/Sepcamedia"><img src="/logs/Vector (4).png" alt="Sepcam Telegram Channel"/></a>
                    <img src="/logs/Vector (5).png" alt="instagramPng"/>
                    <img src="/logs/Vector (6).png" alt="Email"/>
                </div>
                <div>				
                    <p id="footnote">
                        ©2022.SEPCAM All Rights Reserved
                    </p>
                </div>
            </footer> 
        </div>
    </div>
  )
}

export default Churchonline
