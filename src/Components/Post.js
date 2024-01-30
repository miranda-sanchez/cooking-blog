import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`} className="post-data">
        <span className="postDate">{post.datetime}</span>
        <h2>{post.title}</h2>
        <p className="postBody">
          {post.body.length <= 100
            ? post.body
            : `${post.body.slice(0, 100)}...`}
        </p>
        <button>
          Read more <FaAngleRight />
        </button>
      </Link>
    </article>
  );
};

export default Post;
