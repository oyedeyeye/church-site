import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Helper function to generate recurring events for Sundays and Wednesdays
const generateRecurringEvents = (year, month) => {
  const events = [];
  const startOfMonth = moment([year, month]);
  const endOfMonth = moment(startOfMonth).endOf('month');

  for (let day = moment(startOfMonth); day <= endOfMonth; day.add(1, 'days')) {
    if (day.day() === 0) { // Sunday
      events.push({
        title: 'Sunday Worship Service',
        start: new Date(day.year(), day.month(), day.date(), 10, 0), // 10:00 AM
        end: new Date(day.year(), day.month(), day.date(), 11, 30) // 11:30 AM
      });
    }
    if (day.day() === 3) { // Wednesday
      events.push({
        title: 'Bible Study',
        start: new Date(day.year(), day.month(), day.date(), 19, 0), // 7:00 PM
        end: new Date(day.year(), day.month(), day.date(), 20, 30) // 8:30 PM
      });
    }
  }
  return events;
};

const CustomToolbar = ({ label, onNavigate }) => {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('PREV')}>
          &lt;
        </button>
        <span className="rbc-toolbar-label">{label}</span>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          &gt;
        </button>
      </span>
    </div>
  );
};

const MyCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentDate, setCurrentDate] = useState(moment());

  const events = generateRecurringEvents(currentDate.year(), currentDate.month());

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

  const handleNavigate = (action) => {
    let newDate;
    if (action === 'PREV') {
      newDate = moment(currentDate).subtract(1, 'month');
    } else if (action === 'NEXT') {
      newDate = moment(currentDate).add(1, 'month');
    } else {
      newDate = moment();
    }
    setCurrentDate(newDate);
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
        views={['month']}
        defaultView="month"
        components={{
          toolbar: (props) => <CustomToolbar {...props} onNavigate={handleNavigate} />
        }}
        date={currentDate.toDate()}
        onNavigate={handleNavigate}
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
