import React, { useContext, useState,useEffect } from "react";
import { TransactionContext } from "./transContext";
function ExpenseTracker() {
  let { transaction, AddTrans, delItem } = useContext(TransactionContext);
  const [newAmount, setAmount] = useState(0);
  const [newText, setText] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    if (newAmount === 0) {
      alert("Please enter some amount..!!");
    } else {
      AddTrans({
        amount: Number(newAmount),
        text: newText,
      });

      setText("");
      setAmount(0);
    }
  };
  const handleDelete = (i) =>{
      delItem(i)

  }
  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].amount > 0) {
        income += transaction[i].amount;
      }
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0) {
        expense += transaction[i].amount;
      }
    }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="heading">Expense Tracker </h1>
      <div className="blnc">
        <h3>
          Your Balance <br /> ${getIncome() - getExpense()}
        </h3>
      </div>
      <div className="expense-container">
        <h4>
          INCOME <br /> {getIncome()}
        </h4>
        <h4>
          EXPENSE <br /> {getExpense()}
        </h4>
      </div>
      <h3>History</h3>
      <hr />
      <div className="transaction-list">
        {transaction.map((trans, index) => {
          return (
            <li key={index}>
              {index + 1}) {trans.text} <span>{trans.amount}</span>
              <span className="btn" onClick={(i) => handleDelete(index)}>
                X
              </span>
            </li>
          );
        })}
      </div>
      <div className="add-trans">
        <h3>Add new transaction</h3>
        <hr />
        <form onSubmit={handleAdd}>
          <label>
            <input
              type="text"
              placeholder="Enter text"
              onChange={(e) => setText(e.target.value)}
              value={newText}
              required
            />
            <br />
            <input
              type="number"
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
              value={newAmount}
              required
            />
            <br />
            <input type="submit" value="Add transaction" />
          </label>
        </form>
      </div>
      <p>All rights reserved and created by Ahad &#169; </p>
    </div>
  );
}

export default ExpenseTracker;
