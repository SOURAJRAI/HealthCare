import React from 'react';
import { FiPlus } from 'react-icons/fi';
import avatar from '../assets/user-avatar.svg';
import { calendarData } from '../data/calendarData';
import CalendarHeader from './CalendarSectionPages/CalendarHeader';
import CalendarDaysRow from './CalendarSectionPages/CalendarDaysRow';
import CalendarDatesRow from './CalendarSectionPages/CalendarDatesRow';
import CalendarSlotsGrid from './CalendarSectionPages/CalendarSlotsGrid';
import CalendarAppointmentsRow from './CalendarSectionPages/CalendarAppointmentsRow';
import CalendarUpcoming from './CalendarSectionPages/CalendarUpcoming';
import './styles/CalendarPanel.css';

const CalendarPanel = () => (
  <div className="calendar-panel-outer">
    {/* Top user row */}
    <div className="calendar-user-row">
      <div className="calendar-avatar">
        <img src={avatar} alt="User avatar" />
      </div>
      <button className="calendar-plus-btn">
        <FiPlus />
      </button>
    </div>

    {/* Calendar section */}
    <div className="calendar-panel">
      <CalendarHeader month={calendarData.month} />
      <CalendarDaysRow days={calendarData.days} />
      <CalendarDatesRow days={calendarData.days} />
      <CalendarSlotsGrid days={calendarData.days} />
    </div>

    <CalendarAppointmentsRow appointments={calendarData.appointments} />
    <CalendarUpcoming upcomingSchedule={calendarData.upcomingSchedule} />
  </div>
);

export default CalendarPanel;