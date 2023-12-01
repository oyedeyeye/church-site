const { TableServiceClient, TableClient, AzureNamedKeyCredential, odata } = require("@azure/data-tables");
require('dotenv').config();

// Configuration
const tableConfig = {
  tableEndpoint: process.env.END_POINT,
  azureAccount: process.env.ACCOUNT_NAME,
  azureAccessKey: process.env.ACCOUNT_KEY,
  azureTable: process.env.AZURE_TABLE
};


class MainTable {

  // Static Property
  static credential = new AzureNamedKeyCredential(
    tableConfig.azureAccount, 
    tableConfig.azureAccessKey
    );

  // Creating the Table client change sepcammsg to sepcamMessages in production
  static tableClient = new TableClient(
    tableConfig.tableEndpoint,
    tableConfig.azureTable,
    this.credential
    );

  static async createRecord(data) {
    // Create the entity in the table
    // Takes a json object

    try {
      const result = await this.tableClient.createEntity(data);
      return result;
    } catch (error) {
      console.error('Error creating Entity', error);
      return `Error creating entity: ${error.message}`;
    }
  }

  static async readRecord(params) {
    // destructure partitionKey and rowKey from args
    const { partitionKey, rowKey } = params;

    // Read One
    try {
      const result = await this.tableClient.getEntity(partitionKey, rowKey);
      return result;
    } catch (error) {
      console.error(error);
      return `error retrieving record from table: ${error.message}`;
    }
  }

  static async updateRecord(params) {
    const { partitionKey, rowKey, data } = params;

    // Update a single Entity
    try {
      const updateTask = await this.tableClient.getEntity(partitionKey, rowKey);
      delete updateTask['odata.metadata'];
      updateTask.description = data;
      await this.tableClient.updateEntity(updateTask, 'Replace')
      .then((result) => console.log(result));

      //  read updated task
      const updated = await this.tableClient.getEntity(partitionKey, rowKey);
      console.log('updated result', updated);
    } catch (error) {
      console.error(error);
      return `error updating record: ${error.message}`;
    }
  }

  static async deleteRecord(params) {
    const { partitionKey, rowKey } = params;

    // Delete operation
    try {
      const result = await this.tableClient.deleteEntity(partitionKey, rowKey);
      return result;
    } catch (error) {
      console.error(error);
      return `error deleting record from table: ${error.message}`;
    }
  }

  static async listRecords(continuationToken) {
    // read multiple Entries
    try {
      // read params should be last 20 entries first from table
      // set continuation token for paginated list

      const iterator = this.tableClient
        .listEntities()
        .byPage({ maxPageSize: 10, continuationToken });

      const page = await iterator.next();

      // checks if the page contains any entities.
      // If page.done is true, it means there are no more pages left to iterate over.
      if (!page.done) {
        let nextContinuationToken = null;
        if (page.value.continuationToken) {
          nextContinuationToken = encodeURIComponent(JSON.stringify(page.value.continuationToken));
        }

        return {
          entites: page.value,
          nextContinuationToken: nextContinuationToken
        };
      } else {
        return { entities: [] };
      }

    } catch (error) {
      console.error(error);
      throw new Error(`error listing page record from table: ${error.message}`);
    }
  }
}


module.exports = MainTable;
