import { combineReducers } from "redux";

import counterReducer from "../features/counter/counterSlice";
import calculatorReducer from "../features/calculator/calculatorSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  calculator: calculatorReducer,
});

export default rootReducer;
