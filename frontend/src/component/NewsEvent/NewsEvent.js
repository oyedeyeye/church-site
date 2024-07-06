import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Bible Study',
    start: new Date(2024, 6, 1),
    end: new Date(2024, 6, 1),
  },
  // Add more events here if needed
];

const MyCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    alert(event.title);
  };

  const handleSelectSlot = ({ start }) => {
    const event = events.find(
      (event) => moment(event.start).isSame(start, 'day')
    );
    if (event) {
      alert(event.title);
      setSelectedEvent(event.title);
    } else {
      alert('No events on this day.');
      setSelectedEvent('No events on this day.');
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
      {selectedEvent && (
        <div style={{ marginTop: 20 }}>
          <h3>Selected Event:</h3>
          <p>{selectedEvent}</p>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
