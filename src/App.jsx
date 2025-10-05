import { Suspense } from "react";
import "./App.css";
import Batsman from "./batsman";
import Bowler from "./bowler";
import Counter from "./counter";
import Users from "./user";
import Friends from "./friends";
import { Posts } from "./posts";
// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (response) => response.json()
// );
const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
// const fetchFriends = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

// return response.json();
// };

function App() {
  const postsPromise = fetchPost();
  // const friendsPromise = fetchFriends();
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
      <Suspense fallback={<h2>posts are loading...</h2>}>
        <Posts postsPromise={postsPromise} />
      </Suspense>
      {/* <Suspense fallback={<h2>friends are comming for treat...</h2>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense> */}
      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUser={fetchUser} />
      </Suspense> */}

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
