import React from 'react';
import Naavbar from '../component/Navbar/Naavbar';
import Footer from '../component/Footer/Footer';

function Churchonline() {
  return (
    <div className="overflow-hidden">
      <Naavbar />

      <nav className="word-coc-blog">
        <h1><b>CHURCH ONLINE</b></h1>
      </nav>

      <main style={{ backgroundColor: '#ffffff', paddingTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card shadow-lg" style={{ borderRadius: '20px', marginBottom: '20px' }}>
                <div className="card-body">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/9bAG5DVgsCY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow" style={{ border: '1px solid #ddd', marginBottom: '20px' }}>
                <div className="card-body">
                  <h6 className="card-title text-lg">Are you here for the first time?</h6>
                  <p><b className='text-lg'>We are glad to welcome you to our platform, get in touch with us and fill out the form below.</b></p>
                  <div className="d-grid col-10 mx-auto mt-4">
                    <button className="btn btn-primary">First Timers Form</button>
                  </div>
                  <h3 className='mt-4 mb-4 '> You can connect with us live on Facebook by clicking on the button below</h3>
                  <div className="card text-center bg-primary">
                    <div className="card-body d-flex flex-row align-items-center justify-content-center">
                      <a href="https://www.facebook.com/sepcamedia/live" target="_blank" rel="noreferrer">
                        <img src="/images/Frame 15 (1).png" alt="Sepcam live Service on Facebook"/>
                      </a>
                      <p className='text-white m-2'>Join live</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="container py-4">
        <div className="row g-0">
          <div className="col-md-12">
            <iframe src="https://mixlr.com/users/7896621/embed?artwork=false&color=#003cc7" frameborder="0" scrolling="no" height="190px" width="100%">
              <a href="http://mixlr.com/sepcam" style={{ color: '#fff', display: 'block', fontFamily: 'Helvetica, sans-serif', fontSize: 11, textAlign: 'left' }}>sepcam is on Mixlr</a>
            </iframe>
            <a href="http://mixlr.com/sepcam" style={{ color: '#fff', display: 'block', fontFamily: 'Helvetica, sans-serif', fontSize: 11, textAlign: 'left' }}>sepcam is on Mixlr</a>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
            <b><h1 className="text-center">Stay Connected and be Blessed</h1></b>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Churchonline;
