import "./AddExpenseItem.css";

const AddExpenseItem = () => {
  const dateSys = new Date(Date.now()).getFullYear();
  console.log(dateSys);
  const maxDate = `${dateSys + 2}-12-31`;
  const minDate = `${dateSys - 2}-01-01`;
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input placeholder="Title" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input placeholder="Price" type="number" min="0" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min={minDate} max={maxDate} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseItem;
