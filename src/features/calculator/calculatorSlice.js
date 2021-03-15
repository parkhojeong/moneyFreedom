import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    yearlytTotalMoneyList: [],
    yearlyDeposiMoneyList: [],
  },
  reducers: {
    calculate: (state, action) => {
      console.log("calculate / payload:", action.payload);

      const {
        initialDepositMoney,
        depositIncreaseRate,
        depositPeriod,
        investingGainRate,
        goalMoney,
        initialMoney,
      } = action.payload;

      let yearlytTotalMoneyList = [];
      let yearlyDeposiMoneyList = [];
      let depositMoney = initialDepositMoney;
      let totalMoney = initialDepositMoney + initialMoney;
      yearlytTotalMoneyList.push(totalMoney);
      yearlyDeposiMoneyList.push(depositMoney);

      let cnt = 1;

      while (totalMoney < goalMoney) {
        cnt++;

        totalMoney = totalMoney * (1 + investingGainRate * 0.01); // monthly increase rate

        if (cnt <= depositPeriod) {
          depositMoney = depositMoney * (1 + depositIncreaseRate * 0.01); // monthly increase rate
          totalMoney = totalMoney + depositMoney;
          yearlyDeposiMoneyList.push(depositMoney);
        } else {
          totalMoney = totalMoney;
          yearlyDeposiMoneyList.push(0);
        }

        yearlytTotalMoneyList.push(totalMoney);
      }

      state.yearlytTotalMoneyList = yearlytTotalMoneyList;
      state.yearlyDeposiMoneyList = yearlyDeposiMoneyList;
    },
  },
});

export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;
