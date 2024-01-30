import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Missing from "./Missing";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const PostPage = ({}) => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main>
      <article className="postPage">
        {post && (
          <>
            <span className="postDate">{post.datetime}</span>
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${id}`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
        {!post && <Missing></Missing>}
      </article>
    </main>
  );
};

export default PostPage;
