import React from "react";

const Project = (props) => {
  return (
    <>
      <img src={props.img} className="project-image" />
      <h5 className="project-name">{props.name}</h5>
      <p className="project-langage">{props.langages}</p>
    </>
  );
};

export default Project;
