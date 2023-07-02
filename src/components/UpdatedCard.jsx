import React from "react";
import { useParams } from "react-router-dom";
function UpdatedCards() {
  const { title, content } = useParams();
  return (
    <div className="center">
      <div className="keeper-box">
        <input name="title" className="title" value={title}></input>
        <textarea
          name="content"
          className="content1"
          value={content}
        ></textarea>
      </div>
    </div>
  );
}

export default UpdatedCards;
