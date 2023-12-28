import { useState, useEffect } from 'react';
import axios from 'axios';
import Naavbar from '../component/Navbar/Naavbar'
import { Message, Page } from '../Data'

function Messages() {
  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    try {
      // corrected the Azure's misspelt entities from the backend
      const response = await axios.get('https://sepcamwebapp.azurewebsites.net/resources');
      if (response.data && Array.isArray(response.data.entities)) {
        setMessages(response.data.entities);
      } else {
        console.log("Invalid data format received");
      }
    } catch (error) {
      console.log("Error fetching messages:", error);  
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []); // Empty dependency array to trigger fetching only once on mount

  return (
    <div>
      <Naavbar/>
      <nav className="word-re-aca-au">
      <h1><b>RESOURCES</b></h1>
    </nav>
    <div className="container py-4">
    <h3 style={{textAlign: 'left'}}><b>Message</b></h3>
    <div>
  {Page.map(item => (
    <div key={item.id} className="  my-4 bg-white  shadow-md overflow-hidden">
      <div className="flex">
        {/* Preacher's Card */}
        <div className="bg-gray-200 p-4">
          <img src={item.preacher} alt='' className="w-30 h-30  shadow-md"/>
          <h3 className="ml-3 mt-4 text-base font-medium">{item.theme}</h3>
        </div>
        
        {/* Content Card */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
          <div className="self-end">
          <small className="text-gray-600">{item.timestamp}</small> 
            <img src={item.profile} alt='' className="w-10 h-10 rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  ))}
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
      {messages.map(message => (
        <div key={message.rowKey}  className="rounded-lg shadow-md overflow-hidden">
        <div className="grid p-4 bg-gray-100">
        <img src="/log2/man sepcam image.png" alt='' className="w-30 h-30 "/>
        
        <h3 className="ml-3 mt-4 text-lg font-medium">{message.theme}</h3>  
      </div>
      <div className="p-4">
        <h5 className="font-bold">{message.title}</h5>
        <p>{message.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <small className="text-gray-600">Feb 20, 2023</small>  
          <img src="/images/team-1.jpg" alt='' className="w-10 h-10 rounded-full"/>
        </div>
      </div>        </div>
      ))}

    </div>
    </div>
    </div>
  );
}

export default Messages;
