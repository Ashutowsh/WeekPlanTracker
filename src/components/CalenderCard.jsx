import React, { useContext } from "react";
import Calendar from "react-calendar";
import { NoteContext } from "../context/NoteContext";
function CalendarCard({ notShowCalender, isActive }) {
  const { date, handleDateOnchange } = useContext(NoteContext);
  return (
    <>
      {isActive && (
        <div className="calender-card">
          <button className="close-button" onClick={notShowCalender}>
            ❌
          </button>
          <div className="calender">
            <Calendar onChange={handleDateOnchange} value={date} />
          </div>
          <div>
            <p>{date.toString().substring(0, 15)}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default CalendarCard;
