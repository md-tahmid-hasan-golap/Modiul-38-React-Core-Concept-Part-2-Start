import React from "react";

const Post = ({ posted }) => {
  const { title, body, id } = posted;
  return (
    <div className="child">
      <p>title : {title}</p>
      <p>body : {body}</p>
      <h2>id : {id}</h2>
    </div>
  );
};

export default Post;
