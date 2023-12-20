const { TableClient, AzureNamedKeyCredential } = require('@azure/data-tables');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserAuth {
  constructor() {
    const account = process.env.ACCOUNT_NAME;
    const accountKey = process.env.ACCOUNT_KEY;
    this.tableClient = new TableClient(
      process.env.END_POINT,
      process.env.USER_TABLE,
      new AzureNamedKeyCredential(account, accountKey);
    );
  }

  async createUser(userData) => {
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
    const { username, password } = credentials;

    try {
      
    } catch (error) {
      
    }
  }

  async authenticateRequest(token) {}
};


module.exports = UserAuth;
