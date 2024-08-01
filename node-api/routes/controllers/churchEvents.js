const calendarEvents = require("../../utils/calendar");


const churchEvents = async (request, response) => {
  let NO_OF_EVENTS = 100;
  try {
    const events = await calendarEvents(NO_OF_EVENTS)
    return response.status(200).json(events);
  } catch (error) {
    response.status(500).send({
      message: error.message
    });
  }
}

const upcomingEvents = async (request, response) => {
  try {
    const upcoming = await calendarEvents()
    return response.status(200).json(upcoming);
  } catch (error) {
    response.status(500).send({
      message: error.message
    });
  }
}

module.exports = { churchEvents, upcomingEvents};
