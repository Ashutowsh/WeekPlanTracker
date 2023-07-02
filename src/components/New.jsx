import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/NoteContext";
function New() {
  const { setAllIdeas } = useContext(NoteContext);
  return (
    <div className="new">
      <div>
        <p className="quote">Plan your Week !!</p>
        <p className="msg">
          Stay organized and maximize productivity with this week planning tool.
          Plan your tasks, set goals, and stay on top of your schedule
          effortlessly!
        </p>
      </div>
      <Link to="/note">
        <div
          className="new-box"
          onClick={() => {
            setAllIdeas([]);
          }}
        >
          <p>New Week</p>
        </div>
      </Link>
    </div>
  );
}

export default New;
