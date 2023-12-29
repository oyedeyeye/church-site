const mainTable = require("../../utils/db");

const readSingle = async (request, response) => {
   // retrieves the message entity object from the table
  try {
    const result = await mainTable.readRecord(partitionKey, rowKey);
    return response.status(200).send({
      result
    });
  } catch (error) {
    response.status(500).send({
      message: error.message
    });
  }
};

module.exports = readSingle;
