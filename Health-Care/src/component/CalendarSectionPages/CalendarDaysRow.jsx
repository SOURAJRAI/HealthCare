import React from "react";

const CalendarDaysRow = ({ days }) => (
  <div className="calendar-days-row">
    {days.map(day => (
      <div
        key={day.name}
        className={`calendar-day-name 
          ${day.isActive ? "active-column" : ""} 
          ${day.name === "Sun" ? "inactive-column" : ""}`}
      >
        {day.name}
      </div>
    ))}
  </div>
);

export default CalendarDaysRow;