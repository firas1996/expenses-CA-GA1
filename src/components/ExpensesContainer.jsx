import React from "react";
import Chart from "./Chart";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses-container">
      <Chart />
      {data.map((expense) => {
        return (
          <ExpenseItem
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
