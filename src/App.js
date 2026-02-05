import React, { useEffect, useState } from "react";
import axios from "axios";

//const API = "http://localhost:8080/expenses";
// Backend API URL from environment variable
//const API = `${process.env.REACT_APP_API_URL}/expenses`;
const API = import.meta.env.VITE_API_URL + "/expenses";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

  const [month, setMonth] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const res = await axios.get(API);
    setExpenses(res.data);
  };

  // ✅ ADD / UPDATE
  const handleSubmit = async () => {
    if (!title || !amount || !date) {
      alert("Fill all fields");
      return;
    }

    const data = {
      title,
      amount: parseFloat(amount),
      date,
    };

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, data);
        setEditId(null);
      } else {
        await axios.post(API, data);
      }

      setTitle("");
      setAmount("");
      setDate("");
      loadExpenses();
    } catch (err) {
      alert("backend error - check server");
      console.error(err);
    }
  };

  // ✅ EDIT
  const handleEdit = (exp) => {
    setEditId(exp.id);
    setTitle(exp.title);
    setAmount(exp.amount);
    setDate(exp.date);
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    loadExpenses();
  };

  // ✅ MONTH FILTER
  const loadByMonth = async () => {
    if (!month) return;

    const res = await axios.get(`${API}/month/${month}`);
    setExpenses(res.data);

    const totalRes = await axios.get(`${API}/month/${month}/total`);
    setTotal(totalRes.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Expense Tracker</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <hr />

      <h3>Filter by Month</h3>
      <input
        type="number"
        placeholder="Month (1-12)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <button onClick={loadByMonth}>Search</button>

      <h4>Monthly Total: ₹ {total}</h4>

      <hr />

      <h3>Expense List</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td>
              <td>{e.amount}</td>
              <td>{e.date}</td>
              <td>
                <button onClick={() => handleEdit(e)}>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
