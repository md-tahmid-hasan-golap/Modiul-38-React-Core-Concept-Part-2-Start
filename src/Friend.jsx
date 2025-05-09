import React from "react";

const Friend = ({ use }) => {
  const { name, email, phone, username } = use;
  console.log(use);
  return (
    <div className="card">
      <h2>Name : {name}</h2>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <p>username : {username}</p>
    </div>
  );
};

export default Friend;
