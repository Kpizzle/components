import React from "react";


function CommentDetails(props) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data"> {props.timePosted} </span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
}

export default CommentDetails;
