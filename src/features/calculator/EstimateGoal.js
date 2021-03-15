import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

export default function EstimateGoal() {
  const { yearlyIncreasedMoneyList } = useSelector((state) => state.calculator);

  const chartData = yearlyIncreasedMoneyList.map((money, index) => {
    return Math.floor(money / 10000);
  });
  const labelData = yearlyIncreasedMoneyList.map(
    (money, index) => index + "년 뒤"
  );

  const data = {
    labels: labelData,
    datasets: [
      {
        label: "경제적 자유를 위하여!",
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
    ],
  };

  console.log(data);

  return (
    <div>
      <div>
        <h2>
          당신의 목표 금액을 모으기 위해서는{" "}
          {yearlyIncreasedMoneyList.length === 0
            ? "?"
            : yearlyIncreasedMoneyList.length - 1}
          년 걸립니다
        </h2>
      </div>
      <Line data={data} />
    </div>
  );
}
