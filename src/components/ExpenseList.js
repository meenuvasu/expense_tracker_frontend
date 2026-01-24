import API from "../services/api";

function ExpenseList({ expenses, refresh }) {
  const deleteExpense = async (id) => {
    await API.delete(`/${id}`);
    refresh();
  };

  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.title} - ₹{e.amount} - {e.date}
            <button onClick={() => deleteExpense(e.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
