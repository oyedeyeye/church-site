import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Naavbar from "../component/Navbar/Naavbar";
import Footer from "../component/Footer/Footer";

const ResourcesVideo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const partitionKey = queryParams.get("partitionKey");
  const rowKey = queryParams.get("rowKey");
  const [sermonDetails, setSermonDetails] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    async function fetchSermonDetails() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://sepcamwebapp.azurewebsites.net/resource?partitionKey=${partitionKey}&rowKey=${rowKey}`
        );
        setSermonDetails(response.data);
        const audioFileUrl = response.data.audioFileLink;

        if (audioFileUrl) {
          setAudioUrl(audioFileUrl);
        }
      } catch (error) {
        console.log("Error fetching sermon details:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (partitionKey && rowKey) {
      fetchSermonDetails();
    }
  }, [partitionKey, rowKey]);

  const handlePlayAudio = () => {
    if (audioUrl && audioPlayer) {
      audioPlayer.src = audioUrl;
      audioPlayer.play();
    }
  };

  const handleDownloadAudio = () => {
    console.log(sermonDetails.title);
    console.log(audioUrl);

    if (audioUrl && sermonDetails && sermonDetails.title) {
      const title = sermonDetails.title.replace(/[^\w\s]/gi, "");
      const fileName = `${title.replaceAll(" ", "_")}`.slice(0, 100);

      const link = document.createElement("a");
      link.href = audioUrl;
      link.download = `${fileName}.mp3`;
      link.click();
    }
  };

  const handleDownloadPDF = () => {
    if (sermonDetails && sermonDetails.pdfFileLink) {
      const link = document.createElement("a");
      link.href = sermonDetails.pdfFileLink;
      link.download = "downloaded_file.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const LoadingCard = () => (
    <div
      className="max-w-5xl w-full p-8 bg-white rounded-lg shadow-md"
      style={{minHeight: "1000px" }}
    >
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );

  return (
    <div>
      <Naavbar />
      <nav className="word-coc-blog">
        <div className="audio-player flex items-center justify-center">
          {audioUrl && (
            <>
              <audio
                className="w-full md:max-w-md"
                src={audioUrl}
                controls
                ref={(audio) => setAudioPlayer(audio)}
                onClick={handlePlayAudio}
                style={{ maxWidth: "100%" }}
              />

              <a
                href={audioUrl}
                download={
                  sermonDetails && sermonDetails.title
                    ? `${sermonDetails.title.replaceAll(" ", "_")}.mp3`
                    : "audio_file.mp3"
                }
                className="flex items-center ml-20"
                onClick={handleDownloadAudio}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 11.8752C2.5 13.0355 2.96094 14.1483 3.78141 14.9688C4.60188 15.7893 5.71468 16.2502 6.875 16.2502H11.25V19.4827L9.63375 17.8665C9.398 17.6388 9.08224 17.5128 8.7545 17.5156C8.42675 17.5185 8.11324 17.6499 7.88148 17.8817C7.64972 18.1134 7.51826 18.427 7.51541 18.7547C7.51256 19.0825 7.63855 19.3982 7.86625 19.634L11.6163 23.384C11.8507 23.6183 12.1685 23.7499 12.5 23.7499C12.8315 23.7499 13.1493 23.6183 13.3837 23.384L17.1337 19.634C17.3614 19.3982 17.4874 19.0825 17.4846 18.7547C17.4817 18.427 17.3503 18.1134 17.1185 17.8817C16.8868 17.6499 16.5732 17.5185 16.2455 17.5156C15.9178 17.5128 15.602 17.6388 15.3663 17.8665L13.75 19.4827V16.2502H16.875C17.6459 16.2498 18.4085 16.0909 19.1154 15.7833C19.8224 15.4758 20.4586 15.0263 20.9845 14.4626C21.5104 13.899 21.9149 13.2332 22.1727 12.5067C22.4306 11.7802 22.5364 11.0084 22.4835 10.2393C22.4306 9.47022 22.2202 8.7202 21.8653 8.03582C21.5104 7.35144 21.0186 6.74731 20.4205 6.26095C19.8224 5.77458 19.1306 5.41635 18.3883 5.20851C17.6459 5.00066 16.8687 4.94763 16.105 5.05271C15.9574 4.40094 15.6807 3.78536 15.2912 3.24231C14.9017 2.69925 14.4074 2.23974 13.8374 1.8909C13.2674 1.54206 12.6332 1.31097 11.9724 1.21126C11.3116 1.11156 10.6376 1.14526 9.99001 1.31039C9.34245 1.47552 8.73454 1.76871 8.20218 2.17267C7.66981 2.57663 7.22378 3.08317 6.89042 3.66236C6.55707 4.24156 6.34313 4.88167 6.26126 5.54492C6.17939 6.20816 6.23124 6.88109 6.41375 7.52396C5.3392 7.63789 4.34483 8.14544 3.62221 8.94884C2.89958 9.75224 2.49984 10.7946 2.5 11.8752ZM13.75 16.2502H11.25V10.0002C11.25 9.66869 11.3817 9.35075 11.6161 9.11633C11.8505 8.88191 12.1685 8.75021 12.5 8.75021C12.8315 8.75021 13.1495 8.88191 13.3839 9.11633C13.6183 9.35075 13.75 9.66869 13.75 10.0002V16.2502Z"
                    fill="#A5A6F6"
                  />
                </svg>
                <p className="text-xl ">Download</p>
              </a>
            </>
          )}
        </div>
        <div className="flex justify-end mb-4"></div>
        <div className="flex justify-center space-x-4">
          <button className="border-black border-2 bg-black text-white text-lg rounded px-4 py-2">
            Video
          </button>
          <button className="border-gray-500 border-2 bg-gray-500 text-white text-lg rounded px-4 py-2">
            Audio
          </button>
        </div>
      </nav>
      <div className="flex justify-center">
        {isLoading ? (
          <LoadingCard />
        ) : (
          sermonDetails && (
            <div className="max-w-5xl w-full p-8 bg-white rounded-lg shadow-md">
              <small className="text-sm">{formatDate(sermonDetails.date)}</small>
              <h1 className="text-3xl font-bold mb-2">{sermonDetails.theme}</h1>
              <h5 className="text-lg mb-4">{sermonDetails.title}</h5>
              <div className="text-xl mb-4 tracking-widest font-sans">
                {sermonDetails.description.split("\n").map((item, index) => (
                  <p key={index} className="mb-2">
                    {item}
                  </p>
                ))}
              </div>
              <div className="d-flex">
                <p>{sermonDetails.preacher}</p>
                <img
                  src="/images/1.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full ml-4"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                onClick={handleDownloadPDF}
                style={{
                  display: "block",
                  margin: "0 auto",
                  backgroundColor: "#002171",
                  marginTop: "9%",
                }}
              >
                Download PDF
              </button>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesVideo;