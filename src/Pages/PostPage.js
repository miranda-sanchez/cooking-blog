import React from "react";
import { useParams } from "react-router-dom";
import Missing from "./Missing";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main>
      <article className="postPage">
        {post && (
          <>
            <span className="postDate">{post.datetime}</span>
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        )}
        {!post && <Missing></Missing>}
      </article>
    </main>
  );
};

export default PostPage;
