const mainTable = require("../../utils/db");
const filterResources = require("../../utils/filterResources");

const resources = async (request, response) => {
  try {
    // GET List of Uploaded Content from Table Storage

    // Send continuation token if available to the backend to fetch next page
    const continuationToken = request.query.continuationToken ? JSON.parse(decodeURIComponent(request.query.continuationToken)) : undefined;
    const result = await mainTable.listRecords(continuationToken);
    console.log(result);

  const modifiedResult = await filterResources(result)


    response.status(200).json(modifiedResult);
  } catch (err) {
    response.status(500).json({
      error: err.message
    });
  }
}

module.exports = resources;
