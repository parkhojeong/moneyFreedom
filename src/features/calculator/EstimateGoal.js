import React from "react";
import { useSelector } from "react-redux";

export default function EstimateGoal() {
  const { result } = useSelector((state) => state.calculator);
  console.log(result);
  return (
    <div>
      EstimateGoal:
      <span>
        {Object.keys(result).map((key) => (
          <span>{result[key]}</span>
        ))}
      </span>
    </div>
  );
}
