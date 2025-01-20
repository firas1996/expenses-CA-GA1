import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>date</div>
      <div className="expense-item__description">
        <h3>title</h3>
        <div className="expense-item__price">price</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
