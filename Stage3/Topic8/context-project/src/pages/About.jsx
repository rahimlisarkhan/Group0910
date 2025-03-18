import React from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../provider/global/GlobalProvider";

function About() {
  const { user } = useGlobalContext();

  return (
    <div>
      <Header />
      <h2>About :{user?.name}</h2>
    </div>
  );
}

export default About;
