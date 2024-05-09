const express = require('express');
require('dotenv').config();
const { setLogLevel } = require("@azure/logger");
const { UserAuth, blacklistedTokens } = require('./userControllers/userAuth');
setLogLevel("info");

const router = express.Router();
const userAuth = new UserAuth();


/** Default home route ========================== */
router.get('/', (request, response, next) => {
  // response.json({
    // message: 'Please Login',
  // });
  return response.redirect('/user/login');
  
  next();
});


// Handle all get request to the login page
router.get('/login', (request, response) => {
  response.json({message: 'Please fill the login form with your credentials'});
  // response.sendFile(path.join(__dirname, 'path-to-login.html')); // Adjust path the path accordingly
});


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
    if (!request.body) {
      return response.redirect('/user/login'); 
    }
    const token = await userAuth.loginUser(request.body);
    response.status(200).send({ token });
    } catch (error) {
      response.status(401).send({
        message: error.message
      });
    }
});


// Logout User Route
router.post('/logout', async (request, response) => {
  try {
    // Start the logic here
    const token = request.headers.authorization?.split(' ')[1];

    if (token) {
      blacklistedTokens.add(token);
    }
    response.status(200).send({ message: 'Logged out succesfully' });
    } catch (error) {
      response.status(401).send({
        message: error.message
      });
    }
});


module.exports = router;
