const storageContainer = require("../../utils/storage");


const download = async (request, response) => {
  try {
    // Download either audio or pdf file

    const { fileType, fileName } = request.params;
    let containerClient;

    if (fileType === 'pdf') {
      containerClient = storageContainer.pdfClient;
    } else if (fileType === 'mp3') {
      containerClient = storageContainer.audioClient;
    } else {
      return response.status(400).send('Invalid file type');
    }

    // Get the requested file
    const blobClient = containerClient.getBlobClient(fileName);

    const downloadBlockBlobResponse = await blobClient.download();
    downloadBlockBlobResponse.readableStreamBody.pipe(response);

  } catch (error) {
    console.error(error);
    response.status(500).send('Error downloading file');
  }
}

module.exports = download;
