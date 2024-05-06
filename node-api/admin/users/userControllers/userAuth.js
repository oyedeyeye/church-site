const { TableClient, AzureNamedKeyCredential } = require('@azure/data-tables');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { response } = require('express');
const jwt = require('jsonwebtoken');


const blacklistedTokens = new Set(); // Initialize a new set to store blacklisted tokens

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

      if(!firstName || !lastName || !username || !email || !password || !role) {
        throw new Error('Missing important user data fields');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const entity =  {
        partitionKey: 'Users',
        rowKey: username,
        password: hashedPassword,
        email,
        firstName,
        lastName,
        role
      };

      console.log(entity);
      await this.tableClient.createEntity(entity);
    } catch (error) {
      console.error(error);
      throw new Error('Error registering user');
    }
  }

  async loginUser(credentials) {
    // Implement user login logic
    
    

    try {
      // Verify credentials and return authentication token
      const { username, password } = credentials;

      if (!username || !password) {
        throw new Error('Missing important field! Please input your login credentials')
      }

      const userEntity = await this.tableClient.getEntity('Users', username);
      const isValid = await bcrypt.compare(password, userEntity.password);

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
      throw new Error('Login failed');
    }
  }

  async authenticateRequest(request, response, next) {
    // Implement logic to authenticate requests using the token
    try {
      // Get token from request
      const token = request.headers.authorization?.split(' ')[1];

      if (!token || blacklistedTokens.has(token)) {
        // Redirect to login if authentication fails
        return response.redirect('/user/login');
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = decoded; // Add user info to the request object
      next();
    } catch (error) {
      // Redirect to login if authentication fails
      return response.redirect('/user/login');
    }
  }
};


module.exports = {UserAuth, blacklistedTokens};
