import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Naavbar from "../component/Navbar/Naavbar";
import { Message, Page } from "../Data";
import Footer from "../component/Footer/Footer";

function Messages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [continuationToken, setContinuationToken] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchMessages() {
    try {
      const response = await axios.get(
        `https://sepcamwebapp.azurewebsites.net/resources${
          continuationToken ? `?continuationToken=${continuationToken}` : ""
        }`
      );
      if (response.data && Array.isArray(response.data.entities)) {
        setMessages((prevMessages) => [
          ...prevMessages,
          ...response.data.entities,
        ]);
        setContinuationToken(response.data.continuationToken || "");
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
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const getMostRecentSermon = () => {
    const sortedMessages = messages.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return sortedMessages.length > 0 ? [sortedMessages[0]] : [];
  };

  const mostRecentSermon = getMostRecentSermon();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMessages = messages.filter((message) =>
    message.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div>
      <Naavbar />
      <div className="bg-[#02336c] py-20 px-4">
        <h1 className="text-white text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          RESOURCES
        </h1>
      </div>
  <div className="container py-4">
    <h3 style={{ textAlign: "left" }}>
      <b>Message</b>
    </h3>
    <div>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-lg"> </div>
          {/* <div className="h-64 bg-gray-200 rounded-lg"> </div> 
          <div className="h-64 bg-gray-200 rounded-lg"> </div> */}
        </div>
      ) : (
        <div
          key={`${mostRecentSermon[0].partitionKey}-${mostRecentSermon[0].rowKey}`}
          onClick={() =>
            handleSermonClick(
              mostRecentSermon[0].partitionKey,
              mostRecentSermon[0].rowKey
            )
          }
          className="rounded-lg shadow-md overflow-hidden"
        >
          <div className="flex">
            {/* Preacher's Card */}
            <div className="bg-gray-200 p-4">
              <img
                src="/log2/man sepcam image.png"
                alt=""
                className="w-30 h-30  shadow-md"
              />
              <h3 className="ml-3 mt-4 text-base font-medium">
                {mostRecentSermon[0].theme}
              </h3>
            </div>

            {/* Content Card */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h5>{mostRecentSermon[0].title}</h5>
                <p>{mostRecentSermon[0].caption}</p>
                <p>{mostRecentSermon[0].preacher}</p>
              </div>
              <div className="self-end">
                <small className="text-gray-600">
                  {/* Use the formatDate function to format the date */}
                  {formatDate(mostRecentSermon[0].date)}
                </small>
                <img
                  src="/images/1.jpeg"
                  alt="Preacher"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* </div> */}
    <br></br>

    <nav className="navbar navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand">
          <h3>Recent</h3>
        </a>
        <form className="d-flex">
          <span className="input-group-text bg-transparent brt">
            <img src="/logs/magnifyingglass.png" />
          </span>
          <input
                className="form-control me-2 rbt"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
        </form>
      </div>
    </nav>
    <div className="container py-4">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {isLoading ? (
      Array.from({ length: 16 }).map((_, index) => (
        <div
          key={`placeholder-${index}`}
          className="animate-pulse rounded-lg shadow-md p-4 bg-gray-100"
        >
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 mb-4"></div>
          <div className="w-full h-4 bg-gray-200 mb-2"></div>
          <div className="w-2/3 h-4 bg-gray-200 mb-2"></div>
          <div className="w-1/3 h-4 bg-gray-200 mb-4"></div>
          <div className="w-full h-4 bg-gray-200"></div>
        </div>
      ))
    ) : (
      filteredMessages.map((message, index) => (
        <div
          key={`${message.partitionKey}-${message.rowKey}`}
          onClick={() =>
            handleSermonClick(message.partitionKey, message.rowKey)
          }
          className="rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
<div className="p-4">
  <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
    <div className="mb-4 md:mb-0 md:mr-4">
      <img
        src="/log2/man sepcam image.png"
        alt="Preacher"
        className="w-full object-contain rounded-lg mb-2 h-64"
      />
      <h3 className="text-xl lg:text-2xl font-semibold text-center md:text-left">
        {message.theme}
      </h3>
    </div>
    <div className="w-full md:w-auto">
      <h5 className="font-bold text-lg lg:text-xl text-center md:text-left">
        {message.title}
      </h5>
      <p className="text-sm lg:text-base text-center md:text-left">
        {message.caption}
      </p>
      <div className="flex items-center justify-end">
        <p className="ml-2 text-sm lg:text-base text-center md:text-left">
          {message.preacher}
        </p>
        <div className="flex items-center ml-8">
          <img
            src="/images/1.jpeg"
            alt=""
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <small className="block text-gray-600 ml-2 text-xs sm:text-sm">
            {formatDate(message.date)}
          </small>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      ))
    )}
  </div>
</div>
      </div>
      <Footer />
    </div>
  );
}

export default Messages;
