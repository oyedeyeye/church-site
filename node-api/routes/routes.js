const express = require('express');
require('dotenv').config();


const router = express.Router();

// const multer = require('multer');

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");
setLogLevel("info");

// CONNECTION TO AZURE BLOB using CONNECTION_STRING
const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.CONNECTION_STRING
);

  // create a container
const containerClient = blobServiceClient.getContainerClient(
  process.env.CONTAINER_NAME
);

// Routes for files
/** Upload files to Blob ========================== */
router.get('/', (request, response, next) => {
  response.json({
    message: 'Welcome to Sepcam Resources Page',
  });
  next();
});

/** Upload Blob files ========================== */
router.post('/admin/upload', async (request, response) => {
  try {
    const data = request.body;

    // create a container
    // const containerName = `sepcam-${data.service_tag}-${new Date().getTime()}`;
    // const containerClient = blobServiceClient.getContainerClient(containerName);

    // create a new blob
    const blobName = `${data.service_tag}-${new Date().getTime()}`;

    // const blobClient = containerClient.getBlobClient(blobName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient
      .uploadFile(data.audio, {
        blockSize: 4 * 1024 * 1024,
        concurrency: 20,
        onProgress: (ev) => console.log(ev),
        onSuccess: (res) => console.log(res),
      })
      .then((result) => {
        console.log(`Successfully uploaded file: ${blockBlobClient.name} to container ${blockBlobClient.containerName}`);
        response.status(201).json(result);
      });

  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

/** READ Blob files ========================== */
router.get('/admin/dashboard', async (request, response) => {
  try {
    const data = request.body;

    // create a new blob
    const blobName = `${data.service_tag}-${new Date().getTime()}`;

    // const blobClient = containerClient.getBlobClient(blobName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient
      .uploadFile(data.audio, {
        blockSize: 4 * 1024 * 1024,
        concurrency: 20,
        onProgress: (ev) => console.log(ev),
      })
      .then((result) => {
        return response.status(201).json(result);
      });

  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
