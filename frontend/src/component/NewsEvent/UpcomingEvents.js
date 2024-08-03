import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './UpcomingEvents.css'; // Assuming we have a CSS file for the styles

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://sepcamwebapp.azurewebsites.net/upcoming-events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="saved-colored-section-inner">
      <div className="saved-colored-section-content saved-centered-large">
        <div className="saved-colored-section-entries">
          {events.map((event) => (
            <article key={event.id} className="saved-colored-section-entry post-event">
              <time className="saved-colored-section-label" dateTime={event.start.dateTime}>
                {formatDate(event.start.dateTime)}
              </time>
              <h3 className="saved-colored-section-title">
                <a href={event.htmlLink} title={event.summary}></a>
                {event.summary}
                
              </h3>
              <div className="saved-colored-section-meta">
                {formatTime(event.start.dateTime)}
              </div>
            </article>
          ))}
        </div>
        <div className="saved-colored-section-button">
          <a href="https://sepcam.org/events/" className="saved-button saved-button-light saved-button-no-hover-line">
            <span className="saved-colored-section-button-full">More Events</span>
            <span className="saved-colored-section-button-short">More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
