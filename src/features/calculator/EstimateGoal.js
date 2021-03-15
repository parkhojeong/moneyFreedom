import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

export default function EstimateGoal() {
  const { yearlytTotalMoneyList, yearlyDeposiMoneyList } = useSelector(
    (state) => state.calculator
  );

  const chartData = yearlytTotalMoneyList.map((money, index) => {
    return Math.floor(money / 10000);
  });
  const labelData = yearlytTotalMoneyList.map(
    (money, index) => index + "년 뒤"
  );

  const chartData2 = yearlyDeposiMoneyList.map((money, index) => {
    return Math.floor(money / 10000);
  });

  const data = {
    labels: labelData,
    datasets: [
      {
        label: "총 자산",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData,
      },
      {
        label: "해당 년도 저축액",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(35,32,192,0.4)",
        borderColor: "rgba(35,32,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(35,32,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(35,32,192,1)",
        pointHoverBorderColor: "rgba(5,32,192,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData2,
      },
    ],
  };

  console.log(data);

  return (
    <div>
      <div>
        <h3>
          당신의 목표 금액을 모으기 위해서는{" "}
          {yearlytTotalMoneyList.length === 0
            ? "?"
            : yearlytTotalMoneyList.length - 1}
          년 걸립니다
        </h3>
      </div>
      <Line data={data} />
    </div>
  );
}
