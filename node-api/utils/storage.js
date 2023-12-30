const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();

// CONNECTION TO AZURE BLOB using CONNECTION_STRING
const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.CONNECTION_STRING
);


class StorageContainer {
  // Audio container Client
  static audioClient = () => blobServiceClient.getContainerClient(
    process.env.AUDIO_CONTAINER_NAME
  );

  // Image container Client
  static imageClient = () => blobServiceClient.getContainerClient(
    process.env.IMAGE_CONTAINER_NAME
  );

  // PDF container Client
  static pdfClient = () => blobServiceClient.getContainerClient(
    process.env.PDF_CONTAINER_NAME
  );

  // DELETE blob function
  static async deleteBlob(containerClient, blobName) {
    // delete bloob function
    try {
      const blobClient = containerClient.getBlobClient(blobName);
      await blobClient.delete();
    } catch (error) {
      throw new Error(`Error deleting blob '${blobName}' from container '${blobClient.containerName}': ${error.message}`);
    }
  }

  // UPLOAD blob function
  static async uploadBlobToContainer(containerClient, filePath, blobName, onSuccess, onError) {
    if (filePath !== null) {
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      try {
        await blockBlobClient.uploadFile(filePath /*, {
          blockSize: 50 * 1024 * 1024, // 50 MB file
          concurrency: 20,
        } */);
        onSuccess(blockBlobClient.name);
      } catch (error) {
        onError(error);
      }
    }
  }
}

module.exports = StorageContainer;
