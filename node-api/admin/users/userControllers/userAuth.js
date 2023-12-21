const { TableClient, AzureNamedKeyCredential } = require('@azure/data-tables');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { response } = require('express');
const jwt = require('jsonwebtoken');


class UserAuth {
  constructor() {
    const account = process.env.ACCOUNT_NAME;
    const accountKey = process.env.ACCOUNT_KEY;
    this.tableClient = new TableClient(
      process.env.END_POINT,
      process.env.USER_TABLE, // Name of table where userdata is stored
      new AzureNamedKeyCredential(account, accountKey)
    );
  }

  async createUser(userData) {
    // Implement user registration logic
    // Store user data in Azure Table Storage
    try {
      const { firstName, lastName, username, email, password, role } = userData;
      const hashedPassword = await bcrypt.hash(password, 10);

      const entity =  {
        partitionKey: 'Users',
        rowkey: username,
        password: hashedPassword,
        firstName,
        lastName,
        role
      };

      await this.tableClient.createEntity(entity);
    } catch (error) {
      console.error(error);
      throw new Error('Error registering user');
    }
  }

  async loginUser(credentials) {
    // Implement user login logic
    // Verify credentials and return authentication token
    const { username, password } = credentials;

    try {
      const userEntity = await this.tableClient.getEntity('Users', username);
      const isValid = await bcrypt.compare(password, userEntity.password)
      
      if (!isValid) {
        throw new Error('Invalid credentials');
      }

      // Sign with Json Web Tokens
      const token = jwt.sign({
        username,
        role: userEntity.role
        },
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
      );

      return token;

    } catch (error) {
      throw new Error('Login failed')
    }
  }

  async authenticateRequest(request, response, next) {
    // Implement logic to authenticate requests using the token
    try {
      // Get token from request
      const token = request.headers.authorization?.split(' ')[1]

      if (!token) {
        return response.status(401).send({
          message: 'Access Denied: Please login'
        });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = decoded; // Add user info to the request object
      next();
    } catch (error) {
      response.status(401).send({
        message: 'Access Denied: Please login'
      });
      // throw new Error('Authentication failed');
    }
  }
};


module.exports = UserAuth;
