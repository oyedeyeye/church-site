const mainTable = require("../../utils/db");
const filterResources = require("../../utils/filterResources");

// Search by message title
const searchTable = async(request, response) => {
  try {
    const { searchTerm } = request.query;

    if (!searchTerm) {
      return response.status(400).send({ message: 'Missing search parameters' });
    }

    const result = await mainTable.searchByMessageTitle(searchTerm)

    console.log(result);
    const modifiedResult = await filterResources(result);
    return response.status(200).json(modifiedResult);
  } catch (error) {
    return response.status(500).send({
      message: error.message
    });
  }
};


module.exports = searchTable;
