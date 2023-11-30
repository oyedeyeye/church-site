const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();

// CONNECTION TO AZURE BLOB using CONNECTION_STRING
const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.CONNECTION_STRING
);


class StorageContainer {
  // Audio container Client
  static audioClient = blobServiceClient.getContainerClient(
    process.env.AUDIO_CONTAINER_NAME
  );

  // Image container Client
  static imageClient = blobServiceClient.getContainerClient(
    process.env.IMAGE_CONTAINER_NAME
  );

  // PDF container Client
  static pdfClient = blobServiceClient.getContainerClient(
    process.env.PDF_CONTAINER_NAME
  );
}

module.exports = StorageContainer;
