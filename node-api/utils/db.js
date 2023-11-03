const { TableServiceClient, TableClient, AzureNamedKeyCredential, odata } = require("@azure/data-tables");
require('dotenv').config();

// Configuration
const tableConfig = {
  tableEndpoint: process.env.END_POINT,
  azureAccount: process.env.ACCOUNT_NAME,
  azureAccessKey: process.env.ACCOUNT_KEY,
};

// ==== Asynchronous CRUD operation ===== //
const main = async () => {
  const credential = new AzureNamedKeyCredential(tableConfig.azureAccount, tableConfig.azureAccessKey);

  // Creating the Table client change sepcammsg to sepcamMessages in production
  const tableClient = new TableClient(tableConfig.tableEndpoint, 'sepcamMessages', credential);

  // Create entity
  try {
    await tableClient.createEntity({
      partitionKey: 'hometasks',
      rowKey: '1',
      description: 'Set your life in order',
      dueDate: new Date()
    });
    await tableClient.createEntity({
      partitionKey: 'hometasks',
      rowKey: '2',
      description: 'Set your life in order - Part 2',
      dueDate: new Date()
    });
  } catch (error) {
    console.log(error);
  }

  // read multiple Entries
  const entities = await tableClient.listEntities({
    queryOptions: {filter: odata`PartitionKey eq 'hometasks'`}
  });
  for await (const entity of entities) {
    console.log('query result', entity);
  }

  // Read One
  try {
    const task1 = await tableClient.getEntity('hometasks', '1');
    console.log('read result', task1);
  } catch (error) {
    console.log(error);
  }

  // Update
  try {
    const task1 = await tableClient.getEntity('hometasks', '1');
    delete task1['odata.metadata'];
    task1.description = 'task 1 updated';
    await tableClient.updateEntity(task1, 'Replace');

    //  read updated task
    const updatedTask1 = await tableClient.getEntity('hometasks', '1');
    console.log('updated result', updatedTask1);
  } catch (error) {
    console.log(error);
  }

  // Delete operation
  try {
    await tableClient.deleteEntity('hometasks', '1');
  } catch (error) {
    console.log(error);
  }

  // list tables
  const serviceCLient = new TableServiceClient( tableConfig.tableEndpoint, credential);
  let tablesIter = serviceCLient.listTables();
  let i = 1;
  for await (const table of tablesIter) {
    console.log(`Table${i}: ${table.name}`);
    i += 1;
  }
};

main();

module.exports = main;



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
