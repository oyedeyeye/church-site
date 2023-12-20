const mainTable = require("../../../utils/db");
const storageContainer = require("../../../utils/storage");


const updateMessage = async (request, response) => {
  try {
    const { partitionKey, rowKey } = request.params;
    const updateData = request.body;

    // Fetch the existing entity
    const entity = await mainTable.readRecord({ partitionKey, rowKey });

    // Defining the blobName from the entity
    let blobName;

    if (entity.audioFile === entity.pdfFile || entity.audioFile === entity.messageThumbnail) {
      blobName = entity.audioFile ? entity.audioFile : entity.pdfFile;
    }

    // check if blob names are updated and handled accordingly
    // message thumbnail blob
    if (entity.messageThumbnail !== updateData.messageThumbnail && updateData.messageThumbnail !== null) {
      // Delete the old blob
      await storageContainer.deleteBlob(storageContainer.imageClient, entity.messageThumbnail);

      // Handle uploading of the updated file to blob
      await storageContainer.uploadBlobToContainer(
        storageContainer.imageClient, 
        updateData.messageThumbnail,
        blobName,
        (name) => {
          updateData['messageThumbnail'] = name;
        },
        (err) => {
          response.status(500).json({
            message: 'Message thumbnail update failed',
            data: err.message,
          });
        }
        );
    }

    // audio file blob
    if (entity.audioFile !== updateData.audioFile && updateData.audioFile !== null) {
      // Delete the old blob
      await storageContainer.deleteBlob(storageContainer.audioClient, entity.audioFile);

      // Handle uploading of the updated file to blob
      await storageContainer.uploadBlobToContainer(
        storageContainer.audioClient, 
        updateData.audioFile,
        blobName,
        (name) => {
          updateData['audioFile'] = name;
        },
        (err) => {
          response.status(500).json({
            message: 'Audio file upload failed',
            data: err.message,
          });
        }
        );
    }

    // pdf file blob
    if (entity.pdfFile !== updateData.pdfFile && updateData.pdfFile !== null) {
      // Delete the old blob
      await storageContainer.deleteBlob(storageContainer.pdfClient, entity.pdfFile);

      // Handle uploading of the updated file to blob
      await storageContainer.uploadBlobToContainer(
        storageContainer.pdfClient, 
        updateData.pdfFile,
        blobName,
        (name) => {
          updateData['pdfFile'] = name;
        },
        (err) => {
          response.status(500).json({
            message: 'PDF file upload failed',
            data: err.message,
          });
        }
        );
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
