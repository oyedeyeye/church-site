import React from 'react';

const Footer = () => {
  return (
    <div className='bg-blue py-8'>
      <div className='container mx-auto text-center text-white'>
        <div className="flex flex-wrap justify-center items-center mb-4">
          <img src="/logs/location-pin.png" alt="locationPng" width="50" height="40" className='mr-2' />
          <span>Plot 31-32 Ifelodun Estate, Behind Wesco Estate, Off Akure-Ilesa Expressway, Akure, Ondo State</span> <br />
          <span>Ogo-Oluwa Street, Off old Ilara Road, Ipinsa</span>
        </div>

        <div className="flex justify-center mb-4">
          <a href="https://twitter.com"><img src="/logs/Vector (1).png" alt="twitterPng" className='m-2'/></a>
          <a href="https://youtube.com"><img src="/logs/Vector (2).png" alt="youtubePng" className='m-2'/></a>
          <a href="https://www.facebook.com/sepcamedia"><img src="/logs/Vector (3).png" alt="Sepcam Facebook Page" className='m-2'/></a>
          <a href="https://t.me/Sepcamedia"><img src="/logs/Vector (4).png" alt="Sepcam Telegram Channel" className='m-2'/></a>
          <img src="/logs/Vector (5).png" alt="instagramPng" className='m-2'/>
          <a href="/admin-login" aria-label="Admin portal access"><img src="/logs/admin-lock.svg" alt="Admin Portal" width="70%" height="70%" className='m-2'/></a>
          <img src="/logs/Vector (6).png" alt="Email" className='m-2'/>
        </div>

        <p className='text-sm'>
          ©2024.SEPCAM All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
