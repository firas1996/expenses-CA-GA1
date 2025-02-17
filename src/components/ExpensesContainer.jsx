import React, { useState } from "react";
import Chart from "./Chart";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import Filter from "./Filter";

const ExpensesContainer = ({ data }) => {
  // ["all",2023,2024,2025]
  const years = [
    "All",
    ...new Set(data.map((i) => i.date.getFullYear()).sort()),
  ];
  const [date, setDate] = useState(years[0]);
  const filtredData = data.filter((i) => {
    return date === "All" ? true : i.date.getFullYear() == date;
  });
  return (
    <div className="expenses-container">
      <Filter years={years} setDate={setDate} />
      <Chart data={filtredData} />
      {filtredData.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
