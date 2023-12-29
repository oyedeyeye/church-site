const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");
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

  // Create the record of the entity in the table
  static async createRecord(data) {
    // Create the entity in the table
    // Takes a json object

    try {
      const result = await this.tableClient.createEntity(data);
      return result;
    } catch (error) {
      console.error('Error creating Entity', error);
      throw new Error(`Error creating entity: ${error.message}`);
    }
  }

  // Completed Read a single record from table
  static async readRecord(partitionKey, rowKey) {
    // Read One
    try {
      const result = await this.tableClient.getEntity(partitionKey, rowKey);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(`error retrieving record from table: ${error.message}`);
    }
  }

  // Untested update record function
  static async updateRecord(data, option) {
    // update the record
    try {
      const updateTask = await this.tableClient.updateEntity(data, option);
      return updatedTask;
    } catch (error) {
      console.error(error);
      throw new Error(`error updating record: ${error.message}`);
    }
  }

  // Completed Delete single records from table
  static async deleteRecord(params) {
    const { partitionKey, rowKey } = params;

    // Delete operation
    try {
      const result = await this.tableClient.deleteEntity(partitionKey, rowKey);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(`error deleting record from table: ${error.message}`);
    }
  }

  // Completed Read multiple records from table and paginate it
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

  static async mostRecent() {
    try {
      // Using Timestamp field to get the most recent entry
      const queryOptions = { queryOptions: { filter: 'Timestamp ne null', top: 1 } };
      const entities = await this.tableClient.listEntities(queryOptions);

      let mostRecentEntity = null;
      for await (const entity of entities) {
        if (!mostRecentEntity || entity.Timestamp > mostRecentEntity.Timestamp) {
          mostRecentEntity = entity;
        }
      }

      // return response
      if (mostRecentEntity) {
        return mostRecentEntity;
      }
    } catch (error) {
      console.error('Error fetching the most recent entity: ', error);
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}


module.exports = MainTable;
