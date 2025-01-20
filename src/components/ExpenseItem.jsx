import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{props.date.toString()}</div>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
