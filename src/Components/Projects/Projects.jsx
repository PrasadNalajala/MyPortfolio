import React from "react";
import "./Projects.css";
import zoomcar from "../imgss/zoomcar.jpg";
import times from "../imgss/times.png";
import video from "./she.mp4";
import zbayVideo from "../Projects/Zbay.mp4";
import cs from "./cs.jpeg";
import { FaReact, FaHardHat } from "react-icons/fa";
import VideoPlayer from "./Videoplayer";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import marketPlaceVideo from '../Projects/Cut-CMP.mp4'
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project" style={{ paddingBottom: "39px" }}>
              <div className="project_videocontainer">
                <div>
                  <video
                    autoPlay
                    muted
                    controls
                    src={video}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SHEQONOMI</h2>
                <p>
                  The State of Women is the ‘voice’ and the platform that
                  shares, connects, promotes, and works towards gender equity
                  through conversation, connection, community, and creativity.
                  SHEQONOMI is the ‘vessel’ that distributes that ‘voice’ and
                  message around the world.
                </p>
                <div>
                  <IoLogoJavascript />
                  <SiExpress />
                  <SiMongodb />
                  <SiNodedotjs />
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sheqonomi2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <VideoPlayer videoId="E8heNNlwLd8" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ad Yogi</h2>
                <p>
                  As a Premier Google Partner & Facebook Agency Partner, our
                  digital marketing specialists offer unmatched expertise in
                  paid search for e-commerce companies, starting from campaign
                  creation to final conversion optimization. Sit back and relax
                  while we focus our energy on getting just the right set of
                  people to visit your online store and make purchases, thereby
                  scale your business in quite time.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiExpress />
                  <SiMongodb />
                  <SiNodedotjs />
                  <FaReact />
                  <SiReactrouter />
                </div>
                <div>
                  <a
                    href="https://marketplace.adyogi.com/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project" style={{ paddingBottom: "68px" }}>
              <div className="project_videocontainer">
                <div>
                  <img src={cs} alt="Rockstar Games" />
                </div>
              </div>
              <div className="project_information">
                <h2>Controlshift.in</h2>
                <p>
                  We're a team of dedicated professionals who are passionate
                  about helping businesses succeed. We take the time to get to
                  know our clients and candidates on a personal level, and we're
                  committed to building strong, lasting relationships that
                  benefit everyone involved
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiExpress />
                  <SiMongodb />
                  <SiNodedotjs />
                  <FaReact />
                  <SiReactrouter />
                </div>
                <div>
                  <a
                    href="https://controlshift.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <video
                    autoPlay
                    muted
                    controls
                    src={zbayVideo}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Z-Bay</h2>
                <p>
                  ZBay is a unique, full-lifestyle shopping destination, with a
                  mostly exclusive assortment of clothing, shoes, accessories,
                  and many more. I have tried my best to make a fully-functional
                  clone of Popular E-bay website that provides a minimal user
                  experience & additional functionalities like PDF Bill
                  Download, Stripe Payment Gateway Etc.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiReactrouter />
                </div>
                <div>
                  <a
                    href="https://z-bay.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Rickey07/Z-BAY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

       


          <div className="projects_container" data-aos="fade-right">
            <div className="project" style={{ paddingBottom: "39px" }}>
              <div className="project_videocontainer">
                <div>
                <video
                    autoPlay
                    muted
                    controls
                    src={marketPlaceVideo}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Compare Marketplace</h2>
                <p>
                   It is a web app that compares different products from different sectors like Tech, Healthcare Etc and suggest you cheapest and best products out there.(React Js,Node Js)
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiReactrouter />
                </div>
                <div>
                  <a
                    href="https://github.com/Rickey07/compare-marketplace"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};
