import React from "react";
import Feed from "../Components/Feed";

const Home = ({ posts }) => {
  return (
    <main>
      <h1>Latest posts</h1>
      {posts.length ? (
        <Feed posts={posts}></Feed>
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
