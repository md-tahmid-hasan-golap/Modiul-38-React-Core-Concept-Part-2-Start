import React, { use } from "react";
import "./Posts.css";
import Post from "./Post";
const Posts = ({ postData }) => {
  const post = use(postData);
  console.log(post);
  return (
    <div className="posts">
      <h2>Post : {post.length}</h2>
      {post.map((posted) => (
        <Post key={posted.id} posted={posted}></Post>
      ))}
    </div>
  );
};

export default Posts;
