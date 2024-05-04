const express = require('express');
require('dotenv').config();
const { setLogLevel } = require("@azure/logger");
const UserAuth = require('./userControllers/userAuth');
setLogLevel("info");

const router = express.Router();
const userAuth = new UserAuth();

// Create User Route
router.post('/register', async (request, response) => {
  try {
    // Start the logic here
    if (!request.body) {
      return response.status(404).send({
        message: 'Please fill the registration form'
      });
    }

    await userAuth.createUser(request.body);
      response.status(201).send({
        message: 'User registered successfully'
      });
  } catch (error) {
    response.status(500).send({
      message: error.message
    });
  }
});

// Login User Route
router.post('/login', async (request, response) => {
  try {
    // Start the logic here
    const token = await userAuth.loginUser(request.body);
    response.status(200).send({ token });
    }
  } catch (error) {
    response.status(401).send({
      message: error.message
    });
  });


module.exports = router;
