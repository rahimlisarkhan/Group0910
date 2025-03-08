import React from "react";
import useFetchTitle from "./useFetchTitle";

function About() {
  const { loading, data, error } = useFetchTitle(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      About
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
