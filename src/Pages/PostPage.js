import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Missing from "./Missing";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deletePost(id);
    navigate("/");
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
