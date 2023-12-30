const storageContainer = require("../../utils/storage");
const gt = process.env;


const pdfdownload = async (request, response) => {
  try {
    // Download either audio or pdf file
    // https://sepcamwebadmin001.blob.core.windows.net/sepcam-media-pdf/Radio-1699910862211

    const { fileName } = request.query;

    if (!filename) {
      return response.status(400).send({ message: 'Missing required parameters' });
    }

    const result = yuu;



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

module.exports = pdfdownload;
