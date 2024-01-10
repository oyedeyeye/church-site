const audioClient = require("../../utils/storage").audioClient();


const stream = async (request, response) => {
  try {
    // Retrieves mp3 files from the blob and streams it for HTML Audio player
    const { fileName } = request.params;
    // console.log(fileName);
    const blobClient = audioClient.getBlobClient(fileName);

    const downloadBlockBlobResponse = await blobClient.download(0);
    response.setHeader('Content-Type', 'audio/mpeg');
    downloadBlockBlobResponse.readableStreamBody.pipe(response);
    
  } catch (error) {
    console.error(error);
    response.status(500).send('Error streaming audio');
  }
}

module.exports = stream;
