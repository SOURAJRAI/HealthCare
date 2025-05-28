import React from "react";

const CalendarSlotsGrid = ({ days }) => (
  <div className="calendar-slots-grid">
    {[0, 1, 2].map(rowIndex => (
      <React.Fragment key={`row-${rowIndex}`}>
        {days.map((day, dayIndex) => {
          const slot = day.slots[rowIndex];
          return (
            <div
              key={`r${rowIndex}c${dayIndex}`}
              className={`calendar-slot
                ${slot.time === null ? ' calendar-slot-empty' : ''}
                ${slot.highlight ? ' calendar-slot-highlight' : ''}
                ${day.isActive ? ' active-column' : ''}
                ${day.name === "Sun" ? ' inactive-column' : ''}`}
            >
              {slot.time || '—'}
            </div>
          );
        })}
      </React.Fragment>
    ))}
  </div>
);

export default CalendarSlotsGrid;