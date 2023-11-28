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

/*
// // CONNECTION TO AZURE BLOB using CONNECTION_STRING
// const blobServiceClient = BlobServiceClient.fromConnectionString(
//   process.env.CONNECTION_STRING
// );

// FRONTEND DATA NEEEED

const frontEndData = {
  theme: 'Christian Home Series',
  title: 'Christian Home',
  description: 'What is Christian Home? It has to do with the father, the mother, the children, and the way they all relate, and what gives birth to a Christian home is marriage. Marriage is a lifelong journey that requires adequate preparation.\n' +
    "The foundation of every structure that will last is very important. The type of structure will determine the type of foundation. The problem in so many families today is foundational. A lot of people today just enter into a marriage they did not prepare for. They don't even know what it is they just enter it, and they are causing trouble. If you want to understand a thing you go to the foundation of that thing. How much preparation did you make before entering that marriage? if there is no preparation then you are prepared for a failed home.",
  partitionKey: 'Radio',
  youtubeLink: '',
  preacher: 'Pastor S. P. Ayodeji',
  preacherThumbnail: 'data_file/thumbnail/Ayodeji_S.P.jpg',
  rowKey: '8ee04e34-f6ff-4861-bc65-5189923ba5ff',
  messageThumbnail: [ 'Radio-1700000985684', 'sepcam-media-img' ],
  pdfFile: [ 'Radio-1700000985684', 'sepcam-media-pdf' ],
  audioFile: [ 'Radio-1700000985684', 'sepcam-media-001' ]
};
*/

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

/** READ and DOWNLOAD Blob files ========================== */
router.get('/resources', async (request, response) => {
  try {
    // GET List of Uploaded Content from Table Storage

    // Send continuation token if available to the backend to fetch next page
    const continuationToken = request.query.continuationToken ? JSON.parse(decodeURIComponent(request.query.continuationToken)) : undefined;
    mainTable.listRecords(continuationToken)
      .then((result) => {
        console.log(result);
        response.status(200).json(result)
      })
      .catch((err) => {
        console.error(err.message)
      });

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
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
