import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import Naavbar from '../component/Navbar/Naavbar';
import Footer from '../component/Footer/Footer';

const ResourcesVideo = () => {
    const { partitionKey, rowKey } = useParams(); // Get partitionKey and rowKey from params
  const [sermonDetails, setSermonDetails] = useState(null);

  useEffect(() => {
    async function fetchSermonDetails() {
      try {
        const response = await axios.get(`https://sepcamwebapp.azurewebsites.net/resources/${partitionKey}/${rowKey}`);
        setSermonDetails(response.data);
      } catch (error) {
        console.log("Error fetching sermon details:", error);  
      }
    }

    fetchSermonDetails();
}, [partitionKey, rowKey]);
  return (
    <div>
      <Naavbar />
      <nav className="word-coc-blog">
            <h1><b>Video Download</b></h1>
        </nav>  
      <div className="flex justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <small className="text-sm">Feb 20, 2023</small>
          <h1 className="text-3xl font-bold mb-2">Becoming Like Jesus</h1>
          <h5 className="text-lg mb-4">Bringing yourself down to earth to following Jesus</h5>
          <p className="text-base mb-4">Lorem ipsum dolor sit amet consectetur. Ut interdum consectetur sed a. Ac tristique viverra convallis cras donec volutpat. Sagittis enim.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download PDF</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesVideo;
