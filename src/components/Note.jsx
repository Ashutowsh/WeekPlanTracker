import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import CalendarCard from "./CalenderCard";
function Note() {
  const { handleInput, handleSubmit, formData } = useContext(NoteContext);
  const [isActive, setActive] = useState(false);
  const showCalender = () => {
    setActive(true);
  };
  const notShowCalender = () => {
    setActive(false);
  };
  return (
    <>
      <CalendarCard notShowCalender={notShowCalender} isActive={isActive} />
      <button className="setDate" onClick={showCalender}>
        Set Date
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="center">
            <div className="keeper-box">
              <input
                name="title"
                className="title"
                placeholder="Day"
                autoComplete="off"
                onChange={handleInput}
                value={formData.title}
              ></input>
              <textarea
                name="content"
                className="content"
                autoComplete="off"
                placeholder="Plan your day..."
                onChange={handleInput}
                value={formData.content}
              ></textarea>
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Note;
