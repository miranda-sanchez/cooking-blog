import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useStoreState } from "easy-peasy";

const Footer = () => {
  const today = new Date();
  const postCount = useStoreState((state) => state.postCount);
  return (
    <footer>
      <p>
        {postCount} {postCount === 1 ? "Blog Post" : "Blog Posts"}
      </p>
      <p>Miranda Sanchez &copy; {today.getFullYear()}</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/miranda--sanchez/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/miranda-sanchez">
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
