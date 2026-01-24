import { useEffect, useState } from "react";
import "./App.css";
import API from "./services/api";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import MonthlySummary from "./components/MonthlySummary";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState(1);

  const loadExpenses = async () => {
    const res = await API.get("");
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div className="container">

      <h2>Expense Tracker</h2>

      <label>Select Month: </label>
      <select onChange={(e) => setMonth(Number(e.target.value))}>
        {[...Array(12)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <MonthlySummary expenses={expenses} month={month} />

      <ExpenseForm refresh={loadExpenses} />
      <ExpenseList expenses={expenses} refresh={loadExpenses} />
    </div>
  );
}

export default App;
