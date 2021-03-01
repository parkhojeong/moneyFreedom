import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: {},
  },
  reducers: {
    calculate: (state, action) => {
      console.log("calculate / payload:", action.payload);
      state.result = { ...action.payload };
    },
  },
});

export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;
