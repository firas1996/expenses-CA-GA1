import ExpenseItem from "./components/ExpenseItem";

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
}

export default App;
