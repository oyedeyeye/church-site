const { TableServiceClient, TableClient, AzureNamedKeyCredential, odata } = require("@azure/data-tables");
require('dotenv').config();

// Configuration
const tableConfig = {
  tableEndpoint: process.env.END_POINT,
  azureAccount: process.env.ACCOUNT_NAME,
  azureAccessKey: process.env.ACCOUNT_KEY,
  azureTable: process.env.AZURE_TABLE
};

/*
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
*/

const data = {
  theme: 'Christian Home Series',
  title: 'Christian Home',
  description: 'What is Christian Home? It has to do with the father, the mother, the children, and the way they all relate, and what gives birth to a Christian home is marriage. Marriage is a lifelong journey that requires adequate preparation.\n' +
    "The foundation of every structure that will last is very important. The type of structure will determine the type of foundation. The problem in so many families today is foundational. A lot of people today just enter into a marriage they did not prepare for. They don't even know what it is they just enter it, and they are causing trouble. If you want to understand a thing you go to the foundation of that thing. How much preparation did you make before entering that marriage? if there is no preparation then you are prepared for a failed home.",
  partitionKey: 'Radio',
  youtubeLink: '',
  blobName: 'Radio-1700000985684',
  preacher: 'Pastor S. P. Ayodeji',
  preacherThumbnail: 'data_file/thumbnail/Ayodeji_S.P.jpg',
  rowKey: '8ee04e34-f6ff-4861-bc65-5189923ba5ff',
  messageThumbnail: 'sepcam-media-img',
  pdfFile: 'sepcam-media-pdf' ,
  audioFile: 'sepcam-media-001'
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

  static async listRecords(params) {
    // read multiple Entries
    try {
      // read params should be last 20 entries first from table
      // set continuation token for paginated list
      const continuationToken = params ? params : undefined;
      const iterator = this.tableClient
        .listEntities()
        .byPage({ maxPageSize: 3, continuationToken });

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
        return { entites: [] };
      }

    } catch (error) {
      console.error(error);
      return `error listing page record from table: ${error.message}`;
    }
  }
}

// MainTable.createRecord(data);

module.exports = MainTable;
