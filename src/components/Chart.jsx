import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  const chartData = [
    { value: 0, title: "JAN" },
    { value: 0, title: "FEB" },
    { value: 0, title: "MAR" },
    { value: 0, title: "APR" },
    { value: 0, title: "MAY" },
    { value: 0, title: "JUN" },
    { value: 0, title: "JUL" },
    { value: 0, title: "AUG" },
    { value: 0, title: "SEP" },
    { value: 0, title: "OCT" },
    { value: 0, title: "NOV" },
    { value: 0, title: "DEC" },
  ];
  for (const expense of data) {
    chartData[expense.date.getMonth()].value += expense.price;
  }

  const max = Math.max(...chartData.map((i) => i.value));
  // console.log(max);
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            key={item.title}
            title={item.title}
            value={item.value}
            max={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
