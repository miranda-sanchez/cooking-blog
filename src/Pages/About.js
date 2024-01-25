import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <h2>About us</h2>
      <p>
        Welcome to Code Cooking, where cooking meets code! <br />
        As a frontend developer passionate about React, I've created a space for
        our community to share and celebrate culinary delights. You're not just
        a reader; you can add your recipes and even remove them. Join the fun!
        <br /> Let's explore the intersection of cooking and coding together!
      </p>
      <button>
        <Link to="/post">Add a post!</Link>
      </button>
    </main>
  );
};

export default About;
