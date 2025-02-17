import { useState } from "react";
import "./AddExpenseItem.css";

const AddExpenseItem = () => {
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
  const x = 0;
  console.log(x);
  const dateSys = new Date(Date.now()).getFullYear();
  console.log(dateSys);
  const maxDate = `${dateSys + 2}-12-31`;
  const minDate = `${dateSys - 2}-01-01`;
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              placeholder="Title"
              onChange={inputChangeHandler}
              value={inputs.title}
              name="title"
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
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
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseItem;
