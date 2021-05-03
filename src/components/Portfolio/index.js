import React, { useState, useEffect } from "react";
import projectOne from "../../Images/ralph.jpg";
import Projects from "../Projects";
function Portfolio() {
  const [projectInfo, setProjectinfo] = useState([
    {
      name: "Dad Joke Pup Forecast",
      description: "Tells a random dad joke with a random dog picture after you select a city you want the weather forecast for.",
      image: projectOne,
      githubLink: "https://github.com/kebiernat5/Dad-Joke-Pup-Forecast.git",
      liveLink: "https://kebiernat5.github.io/Dad-Joke-Pup-Forecast/",
    },
    {
      name: "Rate My Pet",
      description: "An animal version of Reddit. Rate, view, and comment on people's animals that they post.",
      image: projectTwo,
      githubLink: "https://github.com/JamesvanHoke/Rate-My-Pet.git",
      liveLink: "https://project2-pet-rater.herokuapp.com/",
    },
    {
      name: "Rediscovered",
      description: "Users can only post pictures and comments on places they are GPS tracked to currently when posting. Every two and a half years the database is wiped to keep places current and new. Brings back a sense of discovery to an already mapped world.",
      image: projectThree,
      githubLink: "https://github.com/kebiernat5/rediscovered.git",
      liveLink: "NOT FINISHED, WORKING ON STILL.",
    },
  ]);
  return (
    <div>
      <h1>portfolio</h1>
      {projectInfo.map((project, index) => (
        <div key={index}>
          <Projects project={project}></Projects>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
