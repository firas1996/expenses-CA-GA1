import React from "react";
import "./ChartBar.css";

const ChartBar = ({ title, value, max }) => {
  let h = Math.round((value / max) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: h }}></div>
      </div>
      <div className="chart-bar__label">{title}</div>
    </div>
  );
};

export default ChartBar;
