import React from "react";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

const CalendarHeader = ({ month }) => (
  <div className="calendar-header-row">
    <h2 className="calendar-month">{month}</h2>
    <div className="calendar-nav">
      <button className="nav-button"><RiArrowLeftFill /></button>
      <button className="nav-button"><RiArrowRightFill /></button>
    </div>
  </div>
);

export default CalendarHeader;