import React from "react";

const CalendarAppointmentsRow = ({ appointments }) => (
  <div className="calendar-appointments-row">
    {appointments.map((appointment, index) => (
      <div key={index} className={`calendar-appointment-card ${appointment.color}`}>
        <div className="card-text-column">
          <div className="card-title-row">
            <span className="calendar-appointment-title">{appointment.title}</span>
            <span className="calendar-appointment-icon">{appointment.icon}</span>
          </div>
          <div className="card-time-row">{appointment.time}</div>
          <div className="card-doctor-row">{appointment.doctor}</div>
        </div>
      </div>
    ))}
  </div>
);

export default CalendarAppointmentsRow;