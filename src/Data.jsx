import React, { use } from "react";
import Friend from "./Friend";

const Data = ({ fetchData }) => {
  const useData = use(fetchData);
  console.log(useData);
  return (
    <div className="card2">
      <h2>Data : {useData.length} </h2>
      {useData.map((use) => (
        <Friend key={use.id} use={use}></Friend>
      ))}
    </div>
  );
};

export default Data;
