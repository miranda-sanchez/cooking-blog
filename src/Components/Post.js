import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <span className="postDate">{post.datetime}</span>
        <h2>{post.title}</h2>
        <p className="postBody">
          {post.body.length <= 100
            ? post.body
            : `${post.body.slice(0, 100)}...`}
        </p>
        <button>
          Read more <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </Link>
    </article>
  );
};

export default Post;
