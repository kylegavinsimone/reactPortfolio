import React from "react";

function Projects(props) {
  const project = props.project;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          alt={project.name}
          src={project.image}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a className="btn btn-primary" href={project.githubLink}>
            <p>github</p>
          </a>
          <a className="btn btn-primary" href={project.liveLink}>
            <p>liveLink</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
