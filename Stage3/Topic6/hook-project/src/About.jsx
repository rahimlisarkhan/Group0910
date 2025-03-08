import React from "react";
import withFetchTitle from "./withFetchTitle";

function About(props) {
  console.log("props", props);

  return (
    <div>
      About
      <ul>
        {props.data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default withFetchTitle(
  About,
  "https://jsonplaceholder.typicode.com/posts"
);
