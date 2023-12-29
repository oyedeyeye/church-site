const mainTable = require("../../utils/db");

async function recentMsg(request, response) {
  try {
    // call mostRecent static method of the db object
    const result = await mainTable.mostRecent();
    response.status(200).send({ result });
  } catch (error) {
    response.status(500).send({
      message: `Error: ${error.message}`
    });
  }
}


module.exports = recentMsg;
