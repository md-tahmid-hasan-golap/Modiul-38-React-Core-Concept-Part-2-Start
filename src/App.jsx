import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Player from "./Player";
import Users from "./Users";
import UseState from "./UseState";
import "./UseState.css";
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
      <Users></Users>
      <Player></Player>
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
