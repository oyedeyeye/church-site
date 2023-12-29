const mainTable = require("../../utils/db");

const readSingle = async (request, response) => {
   // retrieves the message entity object from the table
  try {
    const { partitionKey, rowKey } = request.query;
    console.log(request.query);

    if (!partitionKey || !rowKey) {
      return response.status(400).send({ message: 'Missing required parameters' });
    }

    const result = await mainTable.readRecord(partitionKey, rowKey);
    response.status(200).send({
      result
    });
  } catch (error) {
    response.status(500).send({
      message: error.message
    });
  }
};


module.exports = readSingle;
