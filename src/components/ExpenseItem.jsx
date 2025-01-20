import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("ar-TN", { month: "long" });
  const day = props.date.toLocaleString("ar-TN", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">$ {props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
