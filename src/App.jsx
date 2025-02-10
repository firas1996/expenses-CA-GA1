import AddExpenseItem from "./components/AddExpenseItem";
import Chart from "./components/Chart";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";

function App() {
  const data = [
    {
      id: 1,
      title: "Car",
      price: 1234,
      date: new Date(2025, 1, 20),
    },
    {
      id: 2,
      title: "Education",
      price: 2222,
      date: new Date(2023, 9, 15),
    },
    {
      id: 3,
      title: "New Phone",
      price: 3333,
      date: new Date(2024, 10, 1),
    },
    {
      id: 4,
      title: "PC",
      price: 4444,
      date: new Date(2025, 5, 20),
    },
  ];
  return (
    <div>
      <AddExpenseItem />
      <ExpensesContainer data={data} />
    </div>
  );
}

export default App;
