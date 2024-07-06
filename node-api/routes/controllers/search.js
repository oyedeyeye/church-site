const mainTable = require("../../utils/db");
const filterResources = require("../../utils/filterResources");


// Search by message title
const searchTable = async (request, response) => {
  try {
    const { keyword } = request.query;

    if (!keyword) {
      return response.status(400).send({ message: 'Missing search parameters' });
    }

    const result = await mainTable.searchByMessageTitle(keyword)

    // console.log('Search results:', result);
    const modifiedResult = await filterResources({entites: result});
    console.log('Modified results: ', modifiedResult);
    return response.status(200).json(modifiedResult);
  } catch (error) {
    return response.status(500).send({
      message: error.message
    });
  }
};


module.exports = searchTable;
