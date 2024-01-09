import React from 'react'
// import Navbar from '../component/Navbar/Navbar'
// import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer/Footer'
import Naavbar from '../component/Navbar/Naavbar'

function UnitDepartment() {
  return (
    <div classNameName='best'>
        {/* <Navbar2/> */}
        <Naavbar/>

        <div className="bg-blue-900  border-b-8 border-white" style={{backgroundColor:"#02336C"}}>
        <nav className="flex justify-center items-center py-28">
          <h1 className="text-white text-3xl font-bold">UNIT/DEPARTMENT</h1>
        </nav>
      </div>

<main>
  <div className="container py-4">
      <div className="row align-items-md-stretch">
          <div className="col-md-12">
              <div className="h-100 p-5 text-black best rounded-3">
                  <h2 style={{fontWeight: 700, fontSize: '30px', lineHeight: '32px', color: '#002171'}}>LIST OF UNITS & DEPARTMENT</h2><br></br>
                  <p>
                    <ol style={{fontWeight: 400, fontSize: '30px', lineHeight: '36px'}}>
                      <li>
                        Children
                      </li>
                      <li>
                        Choir
                      </li>
                      <li>
                        Decorating
                      </li>
                      <li>
                        Drama
                      </li>
                      <li>
                        Evangelism 
                      </li>
                      <li>
                        Library
                      </li>
                      <li>
                        Prayer 
                      </li>
                      <li>
                        Sanitation 
                      </li>
                      <li>
                       Technical/Media 
                      </li>
                      <li>
                        Ushering 
                      </li>
                      <li>
                        Welfare
                      </li>
                    </ol>
                  </p>                        
                  <br></br>      
              </div>
          </div>
      </div>
  </div>
</main>

<Footer/>
</div>
  )
}

export default UnitDepartment