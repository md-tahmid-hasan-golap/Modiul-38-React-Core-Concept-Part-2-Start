import React, { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);
  const handleSignal = () => {
    const updateteRun = runs + 1;
    setRuns(updateteRun);
  };

  const handleFour = () => {
    const updateteRun = runs + 4;
    setRuns(updateteRun);
  };
  const handleSix = () => {
    const updateteRun = runs + 6;
    setRuns(updateteRun);
  };

  return (
    <div>
      <h2>player : Bangla Batsman</h2>
      {runs > 50 && <p>Your Score : 50</p>}
      <h1>Score : {runs}</h1>
      <button onClick={handleSignal}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};

export default Batsman;
