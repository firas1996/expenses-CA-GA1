import { useState } from "react";
import "./AddExpenseItem.css";

const AddExpenseItem = ({ addExpense }) => {
  const [isColapsed, setIsColapsed] = useState(true);
  const handelColaps = () => {
    setIsColapsed(!isColapsed);
  };
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const dateSys = new Date(Date.now()).getFullYear();
  const maxDate = `${dateSys + 2}-12-31`;
  const minDate = `${dateSys - 2}-01-01`;
  const submitHandler = (event) => {
    event.preventDefault();
    addExpense({
      id: Math.random(),
      title: inputs.title,
      price: +inputs.price,
      date: new Date(inputs.date),
    });
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      {isColapsed ? (
        <button onClick={handelColaps}>Add New Expense</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                required
                placeholder="Title"
                onChange={inputChangeHandler}
                value={inputs.title}
                name="title"
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                required
                placeholder="Price"
                type="number"
                min="0"
                onChange={inputChangeHandler}
                value={inputs.price}
                name="price"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                required
                type="date"
                min={minDate}
                max={maxDate}
                onChange={inputChangeHandler}
                value={inputs.date}
                name="date"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={handelColaps}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddExpenseItem;
