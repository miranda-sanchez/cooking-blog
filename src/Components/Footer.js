import React from "react";
import { faLinkedin, faGithub } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>Miranda Sanchez &copy; {today.getFullYear()}</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/miranda--sanchez/">
            <faLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/miranda-sanchez">
            <faGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
