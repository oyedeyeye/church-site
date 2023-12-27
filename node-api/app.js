const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// import the route
const publicRoutes = require('./routes/routes');
const authRoutes = require('./admin/adminRoutes/routes');

const app = express();

// Use cors middleware
app.use(cors());

// body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registering the routes
app.use('/', publicRoutes);
app.use('/admin', authRoutes)


module.exports = app;
