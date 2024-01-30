import React from "react";
import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "mm/dd/yyyy pp");
    const newPost = { id, dateTime, title: postTitle, body: postBody };
    try {
      const response = await api.post("./posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main>
      <h1>New post</h1>
      <form onSubmit={handleSubmit} className="newpost">
        <div className="form-floating mb-3">
          <input
            id="postTitle"
            type="text"
            className="form-control"
            placeholder="Title"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postTitle">Title</label>
        </div>

        <div className="form-floating">
          <textarea
            id="postBody"
            className="form-control"
            placeholder="Post"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
          <label htmlFor="postBody">Post</label>
        </div>

        <button className="call-to-action" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
