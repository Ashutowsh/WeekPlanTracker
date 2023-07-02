import React, { useContext } from "react";
import New from "./New";
import CreateCard from "./CreateCard";
import { NoteContext } from "../context/NoteContext";
import { Link } from "react-router-dom";

function Home() {
  const { allIdeas } = useContext(NoteContext);
  return (
    <div className="home">
      <div className="new">
        <New />
      </div>
      <div className="idea-box" id="idea">
        <div className="current">
          <h2>My Work</h2>
          <Link to="/note">
            <button>Add</button>
          </Link>
        </div>
        <div className="ideas">{allIdeas.map(CreateCard)}</div>
      </div>
    </div>
  );
}
export default Home;
