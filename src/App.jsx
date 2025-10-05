import "./App.css";
import Batsman from "./batsman";
import Bowler from "./bowler";
import Counter from "./counter";

function App() {
  function handleClick1() {
    alert("Button 1 clicked");
  }
  const handleClick3 = () => {
    alert("Button 3 clicked");
  };
  const add5 = (num) => {
    let result = num + 5;
    alert(result);
  };
  return (
    <>
      <Bowler />
      <Batsman />
      <Counter />
      <h1>Vite + React</h1>
      <button onClick={handleClick1}>Test Button 1</button>
      <button
        onClick={function handleClick2() {
          alert("Button 2 clicked");
        }}
      >
        Test Button 2
      </button>
      <button onClick={handleClick3}>Test Button 3</button>
      <button
        onClick={() => {
          alert("Button 4 clicked");
        }}
      >
        Test Button 4
      </button>
      <button
        onClick={() => {
          add5(10);
        }}
      >
        Test Button 5
      </button>
      <button
        onClick={() => {
          add5(20);
        }}
      >
        Test Button 6
      </button>
    </>
  );
}

export default App;
