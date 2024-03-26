const express = require('express');
const mainTable = require('../../utils/db');
const storageContainer = require('../../utils/storage');
const UserAuth = require('../users/userControllers/userAuth');
require('dotenv').config();

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");

const deleteMessage = require('./controllers/deleteMessage');
const uploadMessage = require('./controllers/uploadMessage');
const updateMessage = require('./controllers/updateMessage');

const resources = require('../../routes/controllers/resources');
const userAuth = new UserAuth();
const router = express.Router();
setLogLevel("info");


// Private Routes for files
/** Default home route ========================== */
router.get('/', (request, response, next) => {
  response.json({
    message: 'PLease Login',
  });
  next();
});

/** Upload Blob files ========================== */
router.post('/upload', /* userAuth.authenticateRequest, */ async (request, response) => await uploadMessage(request, response));

/** DELETE single message Entry ========================== */
router.delete('/delete', /* userAuth.authenticateRequest, */ async (request, response) => await deleteMessage(request, response));


/** Update single message Entry ========================== */
router.put('/update', /* userAuth.authenticateRequest, */ async (request, response) => await updateMessage(request, response));

/** Read multiple message Entry ========================== */
router.get('/dashboard', /* userAuth.authenticateRequest, */ async (request, response) => await resources(request, response));



module.exports = router;
