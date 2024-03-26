const mainTable = require("../../../utils/db");
const storageContainer = require("../../../utils/storage");


const updateMessage = async (request, response) => {
  try {
    const { partitionKey, rowKey } = request.query;

    if (!partitionKey || !rowKey) {
      return response.status(400).send({ message: 'Missing required parameters' });
    }

    response.status(200).send({message: 'Starting the update process'});
    // Assign the payload to be updated
    const updateData = request.body;

    // Fetch the existing entity
    const entity = await mainTable.readRecord({ partitionKey, rowKey });
    // log the entity to the console
    console.log(entity);
    // Defining the fileBlobName from the entity
    let fileBlobName;

    if (entity.audioFile || entity.pdfFile) {
      fileBlobName = entity.pdfFile ? entity.pdfFile.split('.')[0] : entity.audioFile.split('.')[0];
    }

    // check if blob names are updated and handled accordingly
    // message thumbnail blob
    if (entity.messageThumbnail !== updateData.messageThumbnail && updateData.messageThumbnail !== null) {
      // Delete the old blob
      await storageContainer.deleteBlob(storageContainer.imageClient(), entity.messageThumbnail);

      // Handle uploading of the updated file to blob
      await storageContainer.uploadBlobToContainer(
        storageContainer.imageClient(), 
        updateData.messageThumbnail,
        fileBlobName)
        .then(() => updateData['messageThumbnail'] = fileBlobName)
        .catch((err) => {
          response.status(500).json({
            message: 'Message thumbnail update failed',
            data: err.message,
          });
        });
    }

    // audio file blob
    if (entity.audioFile !== updateData.audioFile && updateData.audioFile !== null) {
      // Delete the old blob
      await storageContainer.deleteBlob(storageContainer.audioClient(), entity.audioFile);

      // Handle uploading of the updated file to blob
      await storageContainer.uploadBlobToContainer(
        storageContainer.audioClient(), 
        updateData.audioFile,
        fileBlobName)
        .then(() => updateData['audioFile'] = fileBlobName)
        .catch((err) => {
          response.status(500).json({
            message: 'Audio file upload failed',
            data: err.message,
          });
        });
    }

    // pdf file blob
    if (entity.pdfFile !== updateData.pdfFile && updateData.pdfFile !== null) {
      // Delete the old blob
      await storageContainer.deleteBlob(storageContainer.pdfClient(), entity.pdfFile);

      // Handle uploading of the updated file to blob
      await storageContainer.uploadBlobToContainer(
        storageContainer.pdfClient(), 
        updateData.pdfFile,
        fileBlobName)
        .then(() => updateData['pdfFile'] = fileBlobName)
        .catch((err) => {
          response.status(500).json({
            message: 'PDF file upload failed',
            data: err.message,
          });
        });
    }

    // update the entity with new data
    Object.assign(entity, updateData);

    // save the updated entity
    await mainTable.updateRecord(entity, 'Merge');

    response.status(200).send({
      message: 'Data updated successfully',
      entity
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send(`Error Updating data: ${error.message}`);
  }
}

module.exports = updateMessage;
