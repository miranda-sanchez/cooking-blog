import React from "react";
import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Missing from "./Missing";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "mm/dd/yyyy pp");
    const updatedPost = { id, dateTime, title: editTitle, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main>
      {editTitle && (
        <>
          <h1>Edit post</h1>
          <form onSubmit={(e) => e.preventDefault()} className="newpost">
            <div className="form-floating mb-3">
              <input
                id="postTitle"
                type="text"
                className="form-control"
                placeholder="Title"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <label htmlFor="postTitle">Title</label>
            </div>

            <div className="form-floating">
              <textarea
                id="postBody"
                className="form-control"
                placeholder="Post"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              ></textarea>
              <label htmlFor="postBody">Post</label>
            </div>

            <button
              className="call-to-action"
              type="submit"
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && <Missing></Missing>}
    </main>
  );
};

export default EditPost;
