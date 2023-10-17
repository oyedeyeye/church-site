const { TableServiceClient, TableClient, AzureNamedKeyCredential, odata } = require("@azure/data-tables");
require('dotenv').config();


// Azure Table Storage connection
const tableService = TableServiceClient.fromConnectionString('DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;');

// Create table
await tableService.createTable('sepcam-msg');

// Creating the Table client

