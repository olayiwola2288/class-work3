import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  return (
    <div>
      <p>welcome to SQI {id}</p>
    </div>
  );
};

export default About;
