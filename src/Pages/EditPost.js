import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Missing from "./Missing";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

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
