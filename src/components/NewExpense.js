import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
 
  const [isOpen, setOpen] = useState(false);
   
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  const openForm = () => {
    setOpen(true);
  };
    
    const closeForm = () => {
        setOpen(false);
  }

  return (
    <div className="new-expense">
      
      {isOpen === false ? (
        <button onClick={openForm}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeForm} />
      )}
    </div>
  );
}

export default NewExpense;
