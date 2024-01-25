import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>Miranda Sanchez &copy; {today.getFullYear()}</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/miranda--sanchez/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/miranda-sanchez">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
