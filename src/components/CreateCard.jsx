import React, { useContext } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function CreateCard(props) {
  const path = "/note1/" + props.title + "/" + props.content;
  const id = new Date().getTime().toString();
  return (
    <Link to={path}>
      <Card key={id} title={props.title} date={props.date} />;
    </Link>
  );
}

export default CreateCard;
