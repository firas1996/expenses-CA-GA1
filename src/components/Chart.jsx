import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = () => {
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
  return (
    <div className="chart">
      {chartData.map((item) => {
        return <ChartBar title={item.title} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
