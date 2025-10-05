import { useState } from "react";
export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [four, setFour] = useState(0);
  const handleFourCount = () => {
    const newFour = four + 1;
    setFour(newFour);
  };
  const [six, setSix] = useState(0);
  const handleAddRun1 = () => {
    const newRuns = runs + 1;
    setRuns(newRuns);
  };
  const handleRun4 = () => {
    const newRuns = runs + 4;
    handleFourCount();
    setRuns(newRuns);
  };
  const handleRun6 = () => {
    const newRuns = runs + 6;
    const newSix = six + 1;
    setSix(newSix);

    setRuns(newRuns);
  };
  const batsmanStyle = {
    border: "2px solid orange",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={batsmanStyle}>
      <h2>Batsman Component</h2>
      {runs > 50 && <h4>Congratulation you score a half century</h4>}
      {runs >= 100 && (
        <h3>Wow! you are a great batsman, you score a century</h3>
      )}
      <p>This is a simple Batsman component.</p>
      <p>Runs:{runs} </p>
      <p>4:{four}</p>
      <p>6:{six}</p>
      <button onClick={handleAddRun1}>Score 1 Run</button>
      <button onClick={handleRun4}>Score 4 Runs</button>
      <button onClick={handleRun6}>Score 6 Runs</button>
    </div>
  );
}
