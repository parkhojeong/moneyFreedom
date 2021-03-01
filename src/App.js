import React from "react";
// import { Counter } from "./features/counter/Counter";
import Calculator from "./features/calculator/Calculator";
import EstimateGoal from "./features/calculator/EstimateGoal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <Calculator />
        <EstimateGoal />
      </header>
    </div>
  );
}

export default App;
