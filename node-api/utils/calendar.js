require('dotenv').config();
const { google } = require('googleapis');


const { CAL_ID, CAL_API } = process.env;

// console.log('Starting the script.......');
async function calendarEvents (NO_OF_EVENTS=3) {
  const calendar = google.calendar({ version: 'v3', auth: CAL_API });

  try {
    const result = await calendar.events.list({
      calendarId: CAL_ID,
      timeMin: new Date().toISOString(),
      maxResults: NO_OF_EVENTS,
      singleEvents: true,
      orderBy: 'startTime',
    });

    // console.log('Successfully retrieved the events.......');
    const events = result.data.items;
    // console.log(events);
    return events;
  } catch (error) {
    console.error('Error retrieving events', error);
  }
}

// calendarEvents()
//   .then(() => console.log('End the script.......'))
//   .catch((err) => console.error('Script ended with error:', err));


module.exports = calendarEvents;
