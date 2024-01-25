import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <section className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </section>
  );
};

export default Feed;
