import { useState } from "react";

export default function Bowler() {
  const [ball, setBall] = useState(0);
  const handleBall = () => {
    const newBall = ball + 1;
    if (newBall >= 6) {
      //   handleOver();
      setOver(over + 1);
      setBall(0);
    } else {
      setBall(newBall);
    }
    // setBall(newBall);
  };
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [run, setRun] = useState(0);
  const [wide, setWide] = useState(0);
  const [noBall, setNoBall] = useState(0);
  const handleWide = () => {
    const newWide = wide + 1;
    handleAddRun();
    setWide(newWide);
  };
  const handleNoBall = () => {
    const newNoBall = noBall + 1;
    handleAddRun();
    setNoBall(newNoBall);
  };
  const handleOver = () => {
    if (ball > 5) {
      const newOver = over + 1;
      setOver(newOver);
      //   handleBall();
      setBall(0);
    }
  };
  const handleWicket = () => {
    const newWicket = wicket + 1;
    handleBall();
    setWicket(newWicket);
  };
  const handleAddRun = () => {
    const newRun = run + 1;
    handleBall();
    setRun(newRun);
  };
  //   style
  const bowlerStyle = {
    border: "2px solid green",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={bowlerStyle}>
      <h2>Bowler Component</h2>
      <p>This is a simple Bowler component.</p>
      <p> Ball:{ball}</p>
      <p>wicket:{wicket}</p>
      <p>Over:{over}</p>
      <p>Run:{run}</p>
      <p>wide:{wide}</p>
      <p>noBall:{noBall}</p>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleWicket}>Wicket</button>
      <button onClick={handleAddRun}>Add Run</button>
      <button onClick={handleOver}>Over</button>
      <button onClick={handleWide}>Wide</button>
      <button onClick={handleNoBall}>No Ball</button>
    </div>
  );
}
