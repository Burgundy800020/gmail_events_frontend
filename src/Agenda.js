import React, { useEffect, useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import {apiGet} from './api';

const localizer = momentLocalizer(moment);

// Custom event component to show all event details
function EventBlock({ event }) {
  return (
    <div>
      <strong>{event.name}</strong>
      <div>{moment(event.start).format('ddd, MMM D, h:mm A')}</div>
      <div>Location: {event.location}</div>
      {event.items && event.items.length > 0 && (
        <div>Items: {event.items.join(', ')}</div>
      )}
    </div>
  );
}

export default function Agenda() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Adjust the URL to your backend endpoint
      const response = await apiGet('events');
      // Map backend events to calendar format
      const calendarEvents = response.data.map(ev => ({
        ...ev,
        title: ev.name,
        start: new Date(ev.datetime),
        end: moment(ev.datetime).add(2.5, 'hour').toDate(),
      }));
      setEvents(calendarEvents);
    } catch (err) {
      setError('Failed to load events');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div style={{ height: '90vh', padding: 24 }}>
      <h2>Weekly Agenda</h2>
      {loading && <div>Loading events...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={['week']}
        components={{ event: EventBlock }}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh' }}
      />
    </div>
  );
} 