const { TableServiceClient, TableClient, AzureNamedKeyCredential, odata } = require("@azure/data-tables");
require('dotenv').config();

// Configuration
const tableConfig = {
  tableEndpoint: process.env.END_POINT,
  azureAccount: process.env.ACCOUNT_NAME,
  azureAccessKey: process.env.ACCOUNT_KEY,
  azureTable: process.env.AZURE_TABLE
};

// // ==== Asynchronous CRUD operation ===== //
// const main = async () => {

//   // list tables
//   const serviceCLient = new TableServiceClient( tableConfig.tableEndpoint, credential);
//   let tablesIter = serviceCLient.listTables();
//   let i = 1;
//   for await (const table of tablesIter) {
//     console.log(`Table${i}: ${table.name}`);
//     i += 1;
//   }
// };

// main();

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
    credential
    );

  static async uploadMessage(data) {
    // Create the entity in the table
     // Create entity
    try {
      const result = await this.tableClient.createEntity(data);
      return result;
    } catch (error) {
      console.error('Error creating Entity', error);
      return `Error creating entity: ${error.message}`;
    }
  }

  static async readMessage(params) {
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

  static async updateMessage(params) {
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

  static async deleteMessage(params) {
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

  static async readMultiple() {
    // read multiple Entries
    try {
      // read params should be last 20 entries by date created
      const entities = await this.tableClient.listEntities({
        queryOptions: {filter: odata`PartitionKey eq 'hometasks'`}
      });
      for await (const entity of entities) {
        console.log('query result', entity);
      }
    } catch (error) {
      
    }
  }
}

module.exports = MainTable;



/**
// Creating Table Service client from a shared key
// Azure Table Storage connection
const tableService = new TableServiceClient( //.fromConnectionString('DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;')
  endpoint,
  credential
  );

// Create table
tableService.createTable('sepcam-msg');



// CREATE
// Add entity to the table
const task = {
  partitionKey: 'hometasks',
  rowKey: '1',
  description: 'Set your life in order',
  dueDate: new Date(2023, 10, 18)
};

const result = tableClient.createEntity(task);

console.log(result);

// UPDATE an entity */
