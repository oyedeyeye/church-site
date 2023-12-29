const express = require('express');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const storageContainer = require('../utils/storage');
const mainTable = require('../utils/db');

const router = express.Router();

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");
const createReverseTimeStamp = require('../utils/util');
const resources = require('./controllers/resources');
const download = require('./controllers/download');
const stream = require('./controllers/stream');
const readSingle = require('./controllers/readMsg');
setLogLevel("info");


// Public Routes for files
/** Default home route ========================== */
router.get('/', (request, response, next) => {
  response.json({
    message: 'Welcome to Sepcam Resources Page',
  });
  next();
});

// Recent message API needed to return single most recent message preached
// Return Single most RECENT MESSAGe
router.get('/recent/', async (request, response) => await mainTable.mostRecent(request, response));

/**
   * Returns a single message
   */
router.get('/resources/:partitionKey/:rowKey', async (request, response) => readSingle(request, response));

/** READ Multiple files by page ========================== */
router.get('/resources', async (request, response) => await resources(request, response));

/** DOWNLOAD single audio message ========================== */
router.get('/download/:fileType/:fileName', async (request, response) => await download(request, response));

/** STREAM Audio message ========================== */
router.get('/resources/stream/:fileName', async (request, response) => await stream(request, response));


module.exports = router;
