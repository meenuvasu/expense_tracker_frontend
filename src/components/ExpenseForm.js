import { useState } from "react";
import API from "../services/api";

function ExpenseForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("", {
      title,
      amount,
      date,
    });
    setTitle("");
    setAmount("");
    setDate("");
    refresh();
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Add Expense</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
