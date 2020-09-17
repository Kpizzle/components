import React from "react";
import faker from 'faker'

function CommentDetails() {
  return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="data"> Today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
      </div>
  );
}

export default CommentDetails;
