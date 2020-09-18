import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CommentDetail from "./CommentDetails";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Kyle Potter"
        timePosted="Today at 5:00pm"
        comment="Nice blog"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
