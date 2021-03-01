import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import calculatorReducer from "../features/calculator/calculatorSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    // calculator: calculatorReducer,
  },
});
