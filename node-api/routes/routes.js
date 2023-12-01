const express = require('express');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const storageContainer = require('../utils/storage');
const mainTable = require('../utils/db');



const router = express.Router();

// const multer = require('multer');

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");
const createReverseTimeStamp = require('../utils/util');
setLogLevel("info");


// Routes for files
/** Default home route ========================== */
router.get('/', (request, response, next) => {
  response.json({
    message: 'Welcome to Sepcam Resources Page',
  });
  next();
});

/** Upload Blob files ========================== */
router.post('/admin/upload', async (request, response) => {
  // Data object
  try {
    const data = {
      "theme": request.body.theme,
      "title": request.body.title,
      "description": request.body.description,
      "partitionKey": request.body.serviceTag,
      "youtubeLink": request.body.youtubeLink,
      "preacher": request.body.preacher,
      "preacherThumbnail": request.body.preacherThumbnail
    };

    // create a new blob
    const blobName = `${request.body.serviceTag}-${new Date().getTime()}`;

    // rowKey Using UUID V4
    if (request.body !== null) {
      // implement the UUID for rowKey
      // const rowKey = uuidv4();

      const rowKey = createReverseTimeStamp();
      data['rowKey'] = rowKey;
    }

    // Message thumbnail Blob ======================================================
    if (request.body.messageThumbnail !== null) {
      // implement uploAD BLOB for process.env.IMAGE_CONTAINER_NAME
      const blockBlobClient = storageContainer.imageClient.getBlockBlobClient(blobName);

      // upload to block blob
      await blockBlobClient
        .uploadFile(request.body.messageThumbnail, {
          blockSize: 40 * 1024 * 1024,
          concurrency: 20,
          // onProgress: (ev) => console.log(ev),
          // onSuccess: (res) => console.log(res),
        })
        .then((result) => {
          data['messageThumbnail'] = blockBlobClient.name;
        })
        .catch((err) => {
          response.status(500).json({
            message: 'Message thumbnail upload failed',
            data: err.message,
          });
        });
    }

    // PDF file Blob ======================================================
    if (request.body.pdfFile !== null) {

      const blockBlobClient = storageContainer.pdfClient.getBlockBlobClient(blobName);

      // Upload to pdf block blob
      await blockBlobClient
        .uploadFile(request.body.pdfFile, {
          blockSize: 40 * 1024 * 1024,
          concurrency: 20,
          // onProgress: (ev) => console.log(ev),
          // onSuccess: (res) => console.log(res),
        })
        .then((result) => {
          data['pdfFile'] = blockBlobClient.name;
        })
        .catch((err) => {
          response.status(500).json({
            message: 'PDF file upload failed',
            data: err.message,
          });
        });
      }

    if (request.body.audioFile !== null) {
      const blockBlobClient = storageContainer.audioClient.getBlockBlobClient(blobName);

      // Upload to audio block blob
      await blockBlobClient
        .uploadFile(request.body.audioFile, {
          blockSize: 40 * 1024 * 1024,
          concurrency: 20,
          // onProgress: (ev) => console.log(ev),
          // onSuccess: (res) => console.log(res),
        })
        .then(() => {
          data['audioFile'] = blockBlobClient.name;
          // Store the message information in Table Storage
        })
        .catch((err) => {
          response.status(500).json({
            message: 'Audio file upload failed',
            data: err.message,
          });
        });
    }

    console.log(data);

    // Create Database entry for data object
    await mainTable.createRecord(data)
      .then((result) => response.status(201).json(result))
      .catch((e) => {
        response.status(500).json({
          message: 'Error creating database entry',
          data: e.message,
        });
      });


  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

/** READ Multiple files by page ========================== */
router.get('/resources', async (request, response) => {
  try {
    // GET List of Uploaded Content from Table Storage

    // Send continuation token if available to the backend to fetch next page
    const continuationToken = request.query.continuationToken ? JSON.parse(decodeURIComponent(request.query.continuationToken)) : undefined;
    const result = await mainTable.listRecords(continuationToken);
    console.log(result);
    response.status(200).json(result);

    /** TO DO 
    // Rewrite file name to append theme and title as the file name
    const { fileName, blobName } = request.body;

    // const blobClient = containerClient.getBlobClient(blobName);
    const blockBlobClient = storageContainer.audioClient.getBlockBlobClient(blobName);

    await blockBlobClient
      .downloadToFile(fileName)
      .then((result) => {
        console.log('Success');
        return response.status(201).json(result);
      });
    */
  } catch (err) {
    response.status(500).json({
      error: err.message
    });
  }
});

/** DOWNLOAD single audio message ========================== */
router.get('/download/:fileType/:fileName', async (request, response) => {
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
});

/** STREAM Audio message ========================== */
router.get('/resources/stream/:fileName', async (request, response) => {
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
});


/** DELETE single message Entry ========================== */
router.get('/resources/:rowKey', async (request, response) => {
  try {
    // 
    
  } catch (error) {
    
  }
});


module.exports = router;
