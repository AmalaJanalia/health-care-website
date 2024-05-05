// Calendar.js

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { Link } from "react-router-dom";
const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        
      />
      <button><Link to="/notes">Takenotes</Link></button>
    </div>
  );
};

export default Calendar;
