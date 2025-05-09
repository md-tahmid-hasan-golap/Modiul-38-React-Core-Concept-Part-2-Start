import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Player from "./Player";
import Users from "./Users";
import UseState from "./UseState";
import "./UseState.css";
import Friends from "./Friends";
import Data from "./Data";
import Posts from "./Posts";
// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchData = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const postData = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);
function App() {
  // function handleClick() {
  //   alert("I am Clicked");
  // }

  // function clickedButton() {
  //   alert("Click the button");
  // }

  // const arrowFunction = () => {
  //   alert("Arrow function");
  // };

  // const arrowFunction2 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };
  return (
    <>
      <Suspense fallback={<h3>Loading ... ! </h3>}>
        <Posts key={postData.id} postData={postData}></Posts>
      </Suspense>
      {/* <Suspense fallback={<h2>lodding ...........</h2>}>
        <Data fetchData={fetchData}></Data>
      </Suspense> */}
      {/* <Friends></Friends> */}
      {/* <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}
      {/* <Player></Player> */}
      {/* <Batsman></Batsman> */}
      {/* <UseState></UseState>
      <h1>Vite + React</h1>
      <Counter></Counter> */}
      {/* amra java script a ai vabe event handlar diye kaj kori */}
      {/* <button onClick="handleClick()">Click Me</button> */}

      {/* <button
        style={{
          marginBottom: "10px",
        }}
        onClick={handleClick}
      >
        Click Me
      </button>
      <br />
      <button onClick={clickedButton}>Button</button>

      <button onClick={arrowFunction}>Arrow function</button>

      <br />
      <button
        onClick={function golap() {
          alert("Golap");
        }}
      >
        Golap
      </button>
      <br />
      <button onClick={() => arrowFunction2(5)}>Count</button> */}
    </>
  );
}

export default App;
