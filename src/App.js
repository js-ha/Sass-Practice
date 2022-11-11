import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button
          size="large"
          onClick={() => console.log("클릭됐다 룰루!!!!!!!!!")}
        >
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="purple">
          BUTTON
        </Button>
        <Button color="purple">BUTTON</Button>
        <Button size="small" color="purple">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink" outline>
          BUTTON
        </Button>
        <Button color="orange" outline>
          BUTTON
        </Button>
        <Button size="small" color="purple" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink" fullWidth>
          BUTTON
        </Button>
        <Button color="orange" fullWidth>
          BUTTON
        </Button>
        <Button size="small" color="purple" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
