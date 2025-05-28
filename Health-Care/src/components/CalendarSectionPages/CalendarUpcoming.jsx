import React from "react";

const CalendarUpcoming = ({ upcomingSchedule }) => (
  <div className="calendar-upcoming">
    <div className="calendar-upcoming-title">The Upcoming Schedule</div>
    {upcomingSchedule.map((schedule, scheduleIndex) => (
      <div key={scheduleIndex} className="calendar-upcoming-group">
        <div className="calendar-upcoming-day">On {schedule.day}</div>
        <div className="calendar-upcoming-cards">
          {schedule.appointments.map((appointment, appointmentIndex) => (
            <div key={appointmentIndex} className="calendar-upcoming-card">
              <div className="upcoming-card-row">
                <div className="upcoming-card-text">
                  <span>{appointment.title}</span>
                  <span>{appointment.time}</span>
                </div>
                <span className="upcoming-card-icon">{appointment.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CalendarUpcoming;