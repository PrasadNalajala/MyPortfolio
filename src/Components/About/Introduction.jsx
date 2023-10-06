import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Prabs.jpeg";
 

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I,m {" "}
                <span className="different">Prabadhya Upadhyay A Self Taught Full Stack Developer </span> from{" "}
                <span className="different">
                  {" "}
                  Indore,Madhya Pradesh (India).
                </span>
                I have completed my Graduation in Bcom Honours from{" "}
                <span className="different">
                Devi Ahilya Vishwavidyalaya, Indore (M.P).
                </span>
                Later I discovered that my interest{" "}
                <span className="different"> is in Tech & coding</span> and I started my 
                coding Journey.
              </h4>
              <h4> Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Football{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Books{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
