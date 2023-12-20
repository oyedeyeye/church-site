const express = require('express');
const mainTable = require('../../utils/db');
const storageContainer = require('../../utils/storage');
require('dotenv').config();
const router = express.Router();
const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");

const deleteMessage = require('./controllers/deleteMessage');
const uploadMessage = require('./controllers/uploadMessage');
const updateMessage = require('./controllers/updateMessage');
setLogLevel("info");



// Private Routes for files

/** Upload Blob files ========================== */
router.post('/admin/upload', async (request, response) => await uploadMessage(request, response));

/** DELETE single message Entry ========================== */
router.delete('/admin/:partitionKey/:rowKey/:filename', async (request, response) => await deleteMessage(request, response));


/** Update single message Entry ========================== */
router.put('/admin/update-entity/:partitionKey/:rowKey', async (request, response) => await updateMessage(request, response));


module.exports = router;
