import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const NewPost = () => {
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "mm/dd/yyyy pp");
    const newPost = { id, dateTime, title: postTitle, body: postBody };
    savePost(newPost);
    navigate("/");
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
