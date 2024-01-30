import React from "react";
import Feed from "./Feed";
import { FaExclamationTriangle, FaSadCry } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main>
      {isLoading && <p className="status-msg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <FaExclamationTriangle className="me-2" />
          <div>{fetchError}</div>
        </div>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults}></Feed>
        ) : (
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <FaSadCry className="me-2" />
            <div>No posts to display.</div>
          </div>
        ))}
    </main>
  );
};

export default Home;
