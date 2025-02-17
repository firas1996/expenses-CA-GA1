import React from "react";
import "./Filter.css";
const Filter = ({ years, setDate }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year</label>
      <select
        onChange={(event) => {
          setDate(event.target.value);
        }}
      >
        {years.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
