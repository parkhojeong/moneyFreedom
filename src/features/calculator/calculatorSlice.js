import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    yearlyIncreasedMoneyList: [],
  },
  reducers: {
    calculate: (state, action) => {
      console.log("calculate / payload:", action.payload);

      const {
        currentMoney,
        depositIncreaseRate,
        investingGainRate,
        goalMoney,
      } = action.payload;

      let yearlytTotalMoneyList = [];
      let yearlyDeposiMoneyList = [];
      let increasedMoney = currentMoney;
      let depositMoney = currentMoney;
      let totalMoney = currentMoney;
      yearlytTotalMoneyList.push(currentMoney);
      yearlyDeposiMoneyList.push(currentMoney);

      while (totalMoney < goalMoney) {
        increasedMoney = totalMoney * (1 + investingGainRate * 0.01); // monthly increase rate
        depositMoney = depositMoney * (1 + depositIncreaseRate * 0.01); // monthly increase rate

        totalMoney = increasedMoney + depositMoney;
        yearlyDeposiMoneyList.push(depositMoney);
        yearlytTotalMoneyList.push(totalMoney);
      }

      yearlytTotalMoneyList.push(totalMoney);

      state.yearlyIncreasedMoneyList = yearlytTotalMoneyList;
    },
  },
});

export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;
