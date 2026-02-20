// components/Calendar.jsx
import React, { useState, useEffect } from 'react';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    color: '#667eea'
  });

  // Load events from localStorage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage
  const saveEvents = (updatedEvents) => {
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Format date to YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Get events for a specific date
  const getEventsForDate = (date) => {
    const dateStr = formatDate(date);
    return events.filter(event => event.date === dateStr);
  };

  // Handle date click
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setEventForm({
      ...eventForm,
      date: formatDate(date)
    });
    setShowEventModal(true);
  };

  // Add event
  const addEvent = () => {
    if (eventForm.title.trim()) {
      const newEvent = {
        id: Date.now(),
        ...eventForm
      };
      const updatedEvents = [...events, newEvent];
      saveEvents(updatedEvents);
      setShowEventModal(false);
      setEventForm({
        title: '',
        date: '',
        color: '#667eea'
      });
    }
  };

  // Delete event
  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    saveEvents(updatedEvents);
  };

  // Change month
  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  // Week days
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Render calendar days
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Fill days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateStr = formatDate(date);
      const dayEvents = getEventsForDate(date);
      const isToday = formatDate(new Date()) === dateStr;
      const isSelected = formatDate(selectedDate) === dateStr;

      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <span className="day-number">{day}</span>
          {dayEvents.length > 0 && (
            <div className="event-dot" style={{ backgroundColor: dayEvents[0].color }}></div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-small">
      {/* Header */}
      <div className="calendar-small-header">
        <button onClick={() => changeMonth(-1)} className="small-nav-btn">←</button>
        <h3>
          {currentDate.toLocaleString('default', { month: 'short' })} {currentDate.getFullYear()}
        </h3>
        <button onClick={() => changeMonth(1)} className="small-nav-btn">→</button>
      </div>

      {/* Week days */}
      <div className="calendar-small-weekdays">
        {weekDays.map(day => (
          <div key={day} className="small-weekday">{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="calendar-small-grid">
        {renderDays()}
      </div>

      {/* Events list for selected date */}
      {events.filter(e => e.date === formatDate(selectedDate)).length > 0 && (
        <div className="calendar-small-events">
          <p className="events-label">Events for {selectedDate.getDate()}:</p>
          {events
            .filter(e => e.date === formatDate(selectedDate))
            .map(event => (
              <div key={event.id} className="small-event-item">
                <span className="event-bullet" style={{ backgroundColor: event.color }}></span>
                <span className="event-title">{event.title}</span>
                <button 
                  className="small-delete-event"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteEvent(event.id);
                  }}
                >×</button>
              </div>
            ))}
        </div>
      )}

      {/* Mini Add Event Modal */}
      {showEventModal && (
        <div className="mini-modal-overlay">
          <div className="mini-modal">
            <h4>Add Event</h4>
            <input
              type="text"
              value={eventForm.title}
              onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
              placeholder="Event title"
              className="mini-input"
              autoFocus
            />
            <div className="mini-color-picker">
              {['#667eea', '#4caf50', '#f44336', '#ff9800'].map(color => (
                <div
                  key={color}
                  className={`mini-color-option ${eventForm.color === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setEventForm({...eventForm, color})}
                ></div>
              ))}
            </div>
            <div className="mini-modal-actions">
              <button onClick={() => setShowEventModal(false)} className="mini-cancel">Cancel</button>
              <button onClick={addEvent} className="mini-save">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;