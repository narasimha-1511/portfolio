import React from "react";
import ProjectBox from "./ProjectBox";
import "./css/projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectName="ChatApp" />
        <ProjectBox projectName="AutoOtp" />
        <ProjectBox projectName="BookyAPI" />
        {/* <ProjectBox projectName="Chat App" /> */}
        {/* <ProjectBox projectName="Tindog" /> */}
      </div>
    </div>
  );
};

export default Projects;
