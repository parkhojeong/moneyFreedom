import React from "react";
import Calculator from "./features/calculator/Calculator";
import EstimateGoal from "./features/calculator/EstimateGoal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
        <EstimateGoal />
      </header>
    </div>
  );
}

export default App;
