const express = require('express');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const storageContainer = require('../utils/storage');
const mainTable = require('../utils/db');



const router = express.Router();

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");
const createReverseTimeStamp = require('../utils/util');
const MainTable = require('../utils/db');
setLogLevel("info");


// Public Routes for files
/** Default home route ========================== */
router.get('/', (request, response, next) => {
  response.json({
    message: 'Welcome to Sepcam Resources Page',
  });
  next();
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

// Private Routes for files

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

      // upload to block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.imageClient,
          request.body.messageThumbnail,
          blobName,
          (name) => {
            data['messageThumbnail'] = name;
          },
          (err) => {
            response.status(500).json({
              message: 'Message thumbnail upload failed!',
              data: err.message,
            });
          }
          );
    }

    // PDF file Blob ======================================================
    if (request.body.pdfFile !== null) {

      // Upload to pdf block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.pdfClient,
          request.body.pdfFile,
          (name) => {
            data['pdfFile'] = name;
          },
          (err) => {
            response.status(500).json({
              message: 'PDF file upload failed',
              data: err.message,
            });
          }
        )
    }

    if (request.body.audioFile !== null) {

      // Upload to audio block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.audioClient,
          request.body.audioFile,
          (name) => {
            data['audioFile'] = name;
          },
          (err) => {
            response.status(500).json({
              message: 'Audio file upload failed',
              data: err.message,
            });
          }
        )
    }

    // console.log(data);

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

/** DELETE single message Entry ========================== */
router.delete('/admin/:partitionKey/:rowKey/:filename', async (request, response) => {
  try {
    // pass the partitionKey and the rowkey of the file
    // to initiate the delete operation
    const { partitionKey, rowKey, fileName } = request.params;


    // delete the entity with the partitionKey and rowKey from the Azure table
    await mainTable.deleteRecord({ partitionKey, rowKey });

    // delete the files from the Blob containers
    // TO DO
    // Trim the file name to have it as the blobName
    const audioClient = storageContainer.audioClient,
          pdfClient = storageContainer.pdfClient,
          imageClient = storageContainer.imageClient;

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
});


/** Update single message Entry ========================== */
router.put('/admin/update-entity/:partitionKey/:rowKey', async (request, response) => {
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
    await MainTable.updateRecord(entity, 'Merge');

    response.status(200).send({
      message: 'Data updated successfully',
      entity
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send(`Error Updating data: ${error.message}`);
  }
});


module.exports = router;
