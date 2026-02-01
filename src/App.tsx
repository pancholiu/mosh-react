import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "d1", amount: 10, category: "Utilities" },
    { id: 2, description: "d2", amount: 20, category: "Utilities" },
    { id: 3, description: "d3", amount: 30, category: "Utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
