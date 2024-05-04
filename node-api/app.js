const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// import the route
const publicRouter = require('./routes/routes');
const adminRouter = require('./admin/adminRoutes/routes');
const userRouter = require('./admin/users/routes');

const app = express();

// Use cors middleware
app.use(cors());

// body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registering the routes
app.use('/', publicRouter);
app.use('/admin', adminRouter)
app.use('/user', userRouter)


module.exports = app;
