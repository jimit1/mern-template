import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hi from About</h1>
    </div>
  );
};

export default About;
