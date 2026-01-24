function MonthlySummary({ expenses, month }) {
  const total = expenses
    .filter(
      (e) => new Date(e.date).getMonth() + 1 === month
    )
    .reduce((sum, e) => sum + e.amount, 0);

  return <h3>Month {month} Total: ₹{total}</h3>;
}

export default MonthlySummary;
