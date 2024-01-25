import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main>
      <p>Post not found.</p>
      <p>Head back to the home page for more interesting reads.</p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </main>
  );
};

export default Missing;
