import React from "react";
import VideoPlayer from "./Videoplayer";

const ProjectContainer = ({
  video,
  isVideo,
  image,
  description,
  isLiveCode,
  liveLink,
  codeLink,
  isGithubCode,
  projectName,
  TechStack,
  isYoutubeVideo,
  youtubeVideoId,
}) => {
  return (
    <div>
      <div className="projects_container" data-aos="fade-right">
        <div className="project" style={{ paddingBottom: "39px" }}>
          <div className="project_videocontainer">
            <div>
              {isVideo ? (
                isYoutubeVideo ? (
                  <VideoPlayer videoId={youtubeVideoId} />
                ) : (
                  <video
                    autoPlay
                    muted
                    controls
                    src={video}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )
              ) : (
                <img src={image} alt={"project"} />
              )}
            </div>
          </div>
          <div className="project_information">
            <h2>{projectName}</h2>
            <p title={description}>
             
              {description?.length > 120 ? description?.slice(0,120 ) + "..." : description}
            </p>
            <div>
              {TechStack?.map((stack) => {
                return stack;
              })}
            </div>
            <div>
              {isLiveCode ? (
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
              ) : null}
              {isGithubCode ? (
                <a href={codeLink} target="_blank" rel="noreferrer">
                  <span type="button" className="btns onbt onbt">
                    View Code
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
