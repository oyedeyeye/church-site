import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Naavbar from '../component/Navbar/Naavbar'
import { Message, Page } from '../Data'
import Footer from '../component/Footer/Footer';

function Messages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [continuationToken, setContinuationToken] = useState('');

  async function fetchMessages() {
    try {
      const response = await axios.get(`https://sepcamwebapp.azurewebsites.net/resources${continuationToken ? `?continuationToken=${continuationToken}` : ''}`);
      if (response.data && Array.isArray(response.data.entities)) {
        setMessages((prevMessages) => [...prevMessages, ...response.data.entities]);
        setContinuationToken(response.data.continuationToken || '');
        setIsLoading(false);
      } else {
        console.log("Invalid data format received");
      }
    } catch (error) {
      console.log("Error fetching messages:", error);  
    }
  }

  useEffect(() => {
    fetchMessages();
  }, [continuationToken]); // Fetch when continuationToken changes

  const handleSermonClick = (partitionKey, rowKey) => {
    navigate(`/resources_video?partitionKey=${partitionKey}&rowKey=${rowKey}`);
  };
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const getMostRecentSermon = () => {
    const sortedMessages = messages.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return sortedMessages.length > 0 ? [sortedMessages[0]] : [];
  };

  const mostRecentSermon = getMostRecentSermon();
  

  
  return (
    <div>
      <Naavbar/>
      <nav className="word-re-aca-au">
      <h1><b>RESOURCES</b></h1>
    </nav>
    <div className="container py-4">
    <h3 style={{textAlign: 'left'}}><b>Message</b></h3>
    <div>
    {isLoading ? (
            <div className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-lg"> </div>
              {/* <div className="h-64 bg-gray-200 rounded-lg"> </div> 
              <div className="h-64 bg-gray-200 rounded-lg"> </div> */}
            </div>
          ) : (
  mostRecentSermon.map(message => (
 <div key={`${message.partitionKey}-${message.rowKey}`} onClick={() => handleSermonClick(message.partitionKey, message.rowKey)} className="rounded-lg shadow-md overflow-hidden">
      <div className="flex">
        {/* Preacher's Card */}
        <div className="bg-gray-200 p-4">
          <img src='/log2/man sepcam image.png' alt='' className="w-30 h-30  shadow-md"/>
          <h3 className="ml-3 mt-4 text-base font-medium">{message.theme}</h3>
        </div>
        
        {/* Content Card */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h5>{message.title}</h5>
            <p>{message.caption}</p>
            <p>{message.preacher}</p>
          </div>
          <div className="self-end">
          <small className="text-gray-600">
                  {/* Use the formatDate function to format the date */}
                  {formatDate(message.date)}
                </small>
            <img src='/images/team-1.jpg' alt='' className="w-10 h-10 rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  ))
  )}
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
      {isLoading ? (
            <div className="animate-pulse">
              <div className="h-96 bg-gray-200 rounded-lg"> </div>
              {/* <div className="h-64 bg-gray-200 rounded-lg"> </div> 
              <div className="h-64 bg-gray-200 rounded-lg"> </div> */}
            </div>
          ) : (

      messages.map(message => (
                 <div key={`${message.partitionKey}-${message.rowKey}`} onClick={() => handleSermonClick(message.partitionKey, message.rowKey)} className="rounded-lg shadow-md overflow-hidden">

        <div className="grid p-4 bg-gray-100">
        <img src='/log2/man sepcam image.png' alt='' className="w-100 h-30 "/>
        
        <h3 className="ml-3 mt-4 text-lg font-medium">{message.theme}</h3>  
      </div>
      <div className="p-4">
        <h5 className="font-bold">{message.title}</h5>
        <p>{message.caption}</p>
        <p>{message.preacher}</p>
        
        <div className="mt-4 flex justify-between items-center">
        <small className="text-gray-600">
                  {/* Use the formatDate function to format the date */}
                  {formatDate(message.date)}
                </small> 
          <img src='/images/team-1.jpg' alt='' className="w-10 h-10 rounded-full "/>
        </div>
      </div>        </div>
      ))
          )}

    </div>

    </div>
    <Footer/>
    </div>
  );
}

export default Messages;
