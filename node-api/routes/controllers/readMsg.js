const mainTable = require("../../utils/db");
const filteredResource = require("../../utils/filteredResource");

const readMsg = async (request, response) => {
   // retrieves the message entity object from the table
  try {
    const { partitionKey, rowKey } = request.query;

    if (!partitionKey || !rowKey) {
      return response.status(400).send({ message: 'Missing required parameters' });
    }

    const result = await mainTable.readRecord(partitionKey, rowKey);
    // console.log(result);
    const modifiedResult = await filteredResource(result);
    response.status(200).json(modifiedResult);
  } catch (error) {
    response.status(500).send({
      message: error.message
    });
  }
};


module.exports = readMsg;
