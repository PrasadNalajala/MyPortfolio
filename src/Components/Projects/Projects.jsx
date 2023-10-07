import React from "react";
import "./Projects.css";
import ProjectContainer from "./ProjectContainer";
import { projectsInformation } from "../../constants/projectsinformation";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
         {
          projectsInformation?.map((data) => {
            return <ProjectContainer key={data?.id} {...data}/>
          })
         }
        </div>
      </div>
    </>
  );
};
