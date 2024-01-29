import React from "react";

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
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
