import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue'>
         <div className='flex justify-center text-white text-lg'>
        <p>
            <img src="/logs/location-pin.png" alt="locationPng" width="100" height="80 " />
            <span>Plot 31-32 Ifelodun Estate, Behind Wesco Estate,<br/>Off Akure-Ilesa Expressway, Akure, Ondo State</span>
        </p>
    </div>
    <div  className='flex justify-center ' >
        <img src="/logs/Vector (1).png" alt="twitterPng" className='m-2'/>
        <img src="/logs/Vector (2).png" alt="youtubePng" className='m-2'/>
        <a href="https://www.facebook.com/sepcamedia"><img src="/logs/Vector (3).png" alt="Sepcam Facebook Page" className='m-2'/></a>
        <a href="https://t.me/Sepcamedia"><img src="/logs/Vector (4).png" alt="Sepcam Telegram Channel" className='m-2'/></a>
        <img src="/logs/Vector (5).png" alt="instagramPng" className='m-2'/>
        <img src="/logs/Vector (6).png" alt="Email" className='m-2'/>
    </div>
    <div className='text-white flex text-lg justify-end md:justify-center md:text-center'>

			
        <p className='mr-20 sm:flex justify-center' >
            ©2022.SEPCAM All Rights Reserved
        </p>
    </div>

    </div>
  )
}

export default Footer



