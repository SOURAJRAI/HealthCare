import React from "react";

const CalendarDatesRow = ({ days }) => (
  <div className="calendar-dates-row">
    {days.map(day => (
      <div
        key={day.date}
        className={`calendar-date-num 
          ${day.isActive ? "active-column" : ""} 
          ${day.name === "Sun" ? "inactive-column" : ""}`}
      >
        {day.date}
      </div>
    ))}
  </div>
);

export default CalendarDatesRow;