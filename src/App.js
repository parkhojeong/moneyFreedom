import React from "react";
import Calculator from "./features/calculator/Calculator";
import EstimateGoal from "./features/calculator/EstimateGoal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>경제적 자유를 위하여!</h2>
        <Calculator />
        <EstimateGoal />
      </header>
    </div>
  );
}

export default App;
