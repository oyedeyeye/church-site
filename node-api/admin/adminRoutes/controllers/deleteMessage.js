const mainTable = require("../../../utils/db");
const storageContainer = require("../../../utils/storage");


const deleteMessage = async (request, response) => {
  try {
    // pass the partitionKey and the rowkey of the file
    // to initiate the delete operation
    const { partitionKey, rowKey, fileName } = request.query;

    response.status(200).send({message: 'Starting the delete process'});
    // delete the entity with the partitionKey and rowKey from the Azure table
    await mainTable.deleteRecord({ partitionKey, rowKey });

    // delete the files from the Blob containers
    // TO DO
    // Trim the file name to have it as the blobName
    const audioClient = storageContainer.audioClient(),
          pdfClient = storageContainer.pdfClient(),
          imageClient = storageContainer.imageClient();

    await Promise.all([
      storageContainer.deleteBlob(audioClient, `${fileName}`),
      storageContainer.deleteBlob(pdfClient, `${fileName}`),
      storageContainer.deleteBlob(imageClient, `${fileName}`)
    ]);

    response.status(200).send('Record and associated files deleted successfully');
  } catch (error) {
    console.error(error.message);
    response.status(500).send(`Error deleting data: ${error.message}`);
  }
}


module.exports = deleteMessage;