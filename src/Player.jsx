import React, { useState } from "react";
import "./Player.css";
const Player = () => {
  const [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);
  const singlaRun = () => {
    const updateRun = runs + 1;
    setRuns(updateRun);
  };
  const fourRuns = () => {
    const updateRun = runs + 4;
    setRuns(updateRun);
  };
  const sixRuns = () => {
    const updateRun = runs + 6;
    const totleSix = six + 1;
    setSix(totleSix);
    setRuns(updateRun);
  };
  return (
    <div>
      <h2>Bangladeshi Batsman</h2>
      <p>
        <strong>Total Score</strong> : {runs}
      </p>
      <p>Totle Six : {six}</p>
      {six >= 5 && <p>Just wow --- congrats</p>}
      {runs >= 50 && <p>congratulation : Half sentury</p>}

      <button onClick={singlaRun}>Single</button>
      <button onClick={fourRuns}>Fure</button>
      <button onClick={sixRuns}>Six</button>
    </div>
  );
};

export default Player;
