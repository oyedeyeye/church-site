const storageContainer = require("../../utils/storage");


const stream = async (request, response) => {
  try {
    // Retrieves mp3 files from the blob and streams it for HTML Audio player
    const { fileName } = request.params;
    const blobClient = storageContainer.audioClient.getBlobClient(fileName);

    const downloadBlockBlobResponse = await blobClient.download(0);
    response.setHeader('Content-Type', 'audio/mpeg');
    downloadBlockBlobResponse.readableStreamBody.pipe(response);
    
  } catch (error) {
    console.error(error);
    response.status(500).send('Error streaming audio');
  }
}

module.exports = stream;
