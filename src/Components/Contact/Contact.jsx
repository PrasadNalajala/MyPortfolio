import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/prabadhya-upadhyay-4272881a1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Rickey07"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:Rickeyrickey747@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+8770898508" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
            <a
            href="https://twitter.com/Prabadhya_U"
            aria-label="twitter"
            // className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://prabadhya-blogs.hashnode.dev/"
            aria-label="twitter"
            // className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <SiHashnode />
          </a>
          </div>
         
        </div>
      </div>
    </>
  );
};
