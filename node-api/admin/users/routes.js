const express = require('express');
const router = express.Router();
require('dotenv').config();
const { setLogLevel } = require("@azure/logger");
setLogLevel("info");

// Create User Route
router.post('/admin/create', async (request, response) => {
  try {
    // Start the logic here
    if (!request.body) {
      response.status(404).send(
        message: 'Please fill the registration form'
      );
    }
  } catch (error) {
    
  }
});

// Login User Route
router.post('/admin/login', async (request, response) => {
  try {
    // Start the logic here
    
    }
  } catch (error) {
    
  }
});


module.exports = router;
