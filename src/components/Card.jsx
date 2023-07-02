import React from "react";
function Card(props) {
  return (
    <div className="card">
      <p className="center card-title">{props.title}</p>
      <p className="center date">{props.date}</p>
    </div>
  );
}

export default Card;
