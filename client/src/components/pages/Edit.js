import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const About = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <h1>Hi from About</h1>
      <Card />
    </div>
  );
};

export default About;
