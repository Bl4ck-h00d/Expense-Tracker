import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterValue = (value) => {
    console.log(value);
    setFilteredYear(value);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  })

  return (
    <Card className="expenses">
      <ExpenseFilter onFilter={filterValue} />

      <ExpensesChart expenses={filteredExpenses}/>

      {filteredExpenses.length === 0 ? (
        <p className="expenseList">No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // <-------key
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      )}
    </Card>
  );
}

export default Expenses;
