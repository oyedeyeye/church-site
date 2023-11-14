const express = require('express');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const storageContainer = require('../utils/storage');



const router = express.Router();

// const multer = require('multer');

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");
// setLogLevel("info");

// // CONNECTION TO AZURE BLOB using CONNECTION_STRING
// const blobServiceClient = BlobServiceClient.fromConnectionString(
//   process.env.CONNECTION_STRING
// );

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
  // create a container
  // const containerClient = blobServiceClient.getContainerClient(
  //   process.env.CONTAINER_NAME
  // );

  try {
    const data = {
      "theme": request.body.theme,
      "title": request.body.title,
      "description": request.body.description,
      "partitionKey": request.body.serviceTag,
      "youtubeLink": request.body.youtubeLink,
      "preacher": request.body.preacher,
      "preacherThumbnail": request.body.preacherThumbnail,
    };

    // create a new blob
    const blobName = `${request.body.serviceTag}-${new Date().getTime()}`;

    // rowKey Using UUID V4
    if (request.body !== null) {
      // implement the UUID for rowKey
      const rowKey = uuidv4();
      data['rowKey'] = rowKey;

      console.log(data.rowKey);
    }

    // Message thumbnail Blob ======================================================
    if (request.body.messageThumbnail !== null) {
      // implement uploAD BLOB for process.env.IMAGE_CONTAINER_NAME
      // const blobClient = containerClient.getBlobClient(blobName);
      const blockBlobClient = storageContainer.imageClient.getBlockBlobClient(blobName);

      await blockBlobClient
        .uploadFile(request.body.messageThumbnail, {
          blockSize: 40 * 1024 * 1024,
          concurrency: 20,
          // onProgress: (ev) => console.log(ev),
          // onSuccess: (res) => console.log(res),
        })
        .then((result) => {
          const blobArr = [blockBlobClient.name, blockBlobClient.containerName];
          data['messageThumbnail'] = blobArr;

          console.log(`Message Thumbnail: ${data.messageThumbnail}`);
          // response.status(201).json(result);

          // Store the message information in Table Storage
        });
    }

    // PDF file Blob ======================================================
    if (request.body.pdfFile !== null) {

      const blockBlobClient = storageContainer.pdfClient.getBlockBlobClient(blobName);
      await blockBlobClient
        .uploadFile(request.body.pdfFile, {
          blockSize: 40 * 1024 * 1024,
          concurrency: 20,
          // onProgress: (ev) => console.log(ev),
          // onSuccess: (res) => console.log(res),
        })
        .then((result) => {
          const blobArr = [blockBlobClient.name, blockBlobClient.containerName];
          data['pdfFile'] = blobArr;

          console.log(`PDF uploaded file: ${data.pdfFile}`);
          // response.status(201).json(result);

          // Store the message information in Table Storage
        });
    }

    // create a container
    // const containerName = `sepcam-${data.service_tag}-${new Date().getTime()}`;
    // const containerClient = blobServiceClient.getContainerClient(containerName);

    if (request.body.audioFile !== null) {
      // const blobClient = containerClient.getBlobClient(blobName);
      const blockBlobClient = storageContainer.audioClient.getBlockBlobClient(blobName);

      await blockBlobClient
        .uploadFile(request.body.audioFile, {
          blockSize: 40 * 1024 * 1024,
          concurrency: 20,
          // onProgress: (ev) => console.log(ev),
          // onSuccess: (res) => console.log(res),
        })
        .then((result) => {
          const blobArr = [blockBlobClient.name, blockBlobClient.containerName];
          data['audioFile'] = blobArr;

          console.log(`Audio uploaded file: ${data.audioFile}`);
          // response.status(201).json(result);

          // Store the message information in Table Storage
        });
    }

    console.log(data);
    return response.status(201).json(data);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

/** READ and DOWNLOAD Blob files ========================== */
router.get('/admin/dashboard', async (request, response) => {
  // create a container
  // const containerClient = blobServiceClient.getContainerClient(
  //   process.env.CONTAINER_NAME
  // );

  try {
    // GET List of Uploaded Content from Table Storage

    // Title of the Message to download title ${title}-${sub_title}
    // const fileName = `Christian Homes part 1.mp3`;
    // create a new blob
    // const blobName = 'Radio-1699036591864';

    /** TO DO */
    // Rewrite file name to append themeand title as the file name
    const { fileName, blobName } = request.body;

    // const blobClient = containerClient.getBlobClient(blobName);
    const blockBlobClient = storageContainer.audioClient.getBlockBlobClient(blobName);

    await blockBlobClient
      .downloadToFile(fileName)
      .then((result) => {
        console.log('Success');
        return response.status(201).json(result);
      });

  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
