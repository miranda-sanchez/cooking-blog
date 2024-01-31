import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Missing from "./Missing";
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleEdit = (id) => {
    const dateTime = format(new Date(), "mm/dd/yyyy pp");
    const updatedPost = { id, dateTime, title: editTitle, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`);
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
              type="button"
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
