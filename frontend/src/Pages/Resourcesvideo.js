import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import axios from 'axios';
import Naavbar from '../component/Navbar/Naavbar';
import Footer from '../component/Footer/Footer';

const ResourcesVideo = () => {
    const location = useLocation(); // Get the location object from react-router
    const queryParams = new URLSearchParams(location.search); // Extract query parameters
    const partitionKey = queryParams.get('partitionKey');
    const rowKey = queryParams.get('rowKey');
    const [sermonDetails, setSermonDetails] = useState(null);
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };

  useEffect(() => {
    async function fetchSermonDetails() {
      try {
        const response = await axios.get(`https://sepcamwebapp.azurewebsites.net/resource?partitionKey=${partitionKey}&rowKey=${rowKey}`);
        setSermonDetails(response.data.result);
      } catch (error) {
        console.log("Error fetching sermon details:", error);  
      }
    }
    if (partitionKey && rowKey) {
        fetchSermonDetails();
      }
    }, [partitionKey, rowKey]);
    return (
    <div>
      <Naavbar />
      <nav className="word-coc-blog">
            <h1><b>Video Download</b></h1>
        </nav>  
      <div className="flex justify-center">
      {sermonDetails && (
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <small className="text-sm">{formatDate(sermonDetails.timestamp)}</small>
          <h1 className="text-3xl font-bold mb-2">{sermonDetails.theme}</h1>
          <h5 className="text-lg mb-4">{sermonDetails.title}</h5>
          <p className="text-base mb-4">{sermonDetails.description}</p>
         <div className="d-flex justify-content-between align-items-center">
              <p>{sermonDetails.preacher}</p>
              <img src='/images/team-1.jpg' alt='' className="w-10 h-10 rounded-full" />
            </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download PDF</button>
        </div>
         )}
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesVideo;
