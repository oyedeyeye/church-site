const express = require('express');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const storageContainer = require('../utils/storage');
const mainTable = require('../utils/db');

const router = express.Router();

const { BlobServiceClient } = require('@azure/storage-blob');
const { setLogLevel } = require("@azure/logger");

const resources = require('./controllers/resources');
const download = require('./controllers/download');
const stream = require('./controllers/stream');
const readMsg = require('./controllers/readMsg');
const recentMsg = require('./controllers/recentMsg');
const contactForm = require('./controllers/contactForm');
const searchTable = require('./controllers/search');
const { churchEvents, upcomingEvents} = require('./controllers/churchEvents');
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
// this route will not work based on AZURE Table's documentation

// router.get('/recent/', async (request, response) => await recentMsg(request, response));

/**
   * Returns a single message and downlad links for youtube, download link for audio and pdf,
   */
router.get('/resource', async (request, response) => await readMsg(request, response));

/** READ Multiple files by page ========================== */
router.get('/resources', async (request, response) => await resources(request, response));

/** STREAM Audio message ========================== */
router.get('/resource/stream/:fileName', async (request, response) => await stream(request, response));

/** Contact Form ========================== */
router.post('/contact', async (request, response) => await contactForm(request, response));

/** Search Endpoint ========================== */
router.get('/search', async (request, response) => await searchTable(request, response));

/** Church Events Endpoint ========================== */
router.get('/upcoming-events', async (request, response) => await upcomingEvents(request, response));

/** Church Events Endpoint ========================== */
router.get('/events', async (request, response) => await churchEvents(request, response));


module.exports = router;
