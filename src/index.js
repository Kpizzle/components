import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CommentDetail from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Kyle Potter" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
