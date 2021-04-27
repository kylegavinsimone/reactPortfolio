import React, { useState, useEffect } from "react";
import projectOne from "../../Images/ralph.jpg";
function Portfolio() {
  const [projectInfo, setProjectinfo] = useState([
    {
      name: "project 1",
      description: "my project 1",
      image: projectOne,
      githubLink: "",
      liveLink: "",
    },
    {
      name: "project 2",
      description: "my project 2",
      image: "",
      githubLink: "",
      liveLink: "",
    },
    {
      name: "project 3",
      description: "my project 3",
      image: "",
      githubLink: "",
      liveLink: "",
    },
  ]);
  return (
    <div>
      <h1>portfolio</h1>
      {projectInfo.map((project) => (
        <div>
          <h1>{project.name}</h1>
          <h2>{project.description}</h2>
          <img src={project.image}></img>
          <a href={project.githubLink}>
            <p>github</p>
          </a>
          <a href={project.liveLink}>
            <p>liveLink</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
