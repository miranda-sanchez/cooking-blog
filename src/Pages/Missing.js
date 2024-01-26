import React from "react";
import { Link } from "react-router-dom";
import image from "../Img/missing.PNG";

const Missing = () => {
  return (
    <main className="missing">
      <h1>Error</h1>
      <p>Post not found.</p>
      <p>Head back to the home page for more interesting reads.</p>
      <figure>
        <img
          className="missing-drawing"
          src={image}
          alt="Simple illustration of a bewildered cook"
        />
      </figure>
      <button>
        <Link to="/">Home</Link>
      </button>
    </main>
  );
};

export default Missing;
