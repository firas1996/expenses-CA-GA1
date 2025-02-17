import { useState } from "react";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, price, date }) => {
  // const ExpenseItem = (props) => {
  // const { title, price, date } = props;
  const year = date.getFullYear();
  const month = date.toLocaleString("ar-TN", { month: "long" });
  const day = date.toLocaleString("ar-TN", { day: "2-digit" });
  // const [title, setTitle] = useState(props.title);
  // const titleChangeHandler = () => {
  //   setTitle("New Title !");
  //   console.log(title);
  // };
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h3>{title}</h3>
        {/* <button onClick={titleChangeHandler}>Update Title !!!</button> */}
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
