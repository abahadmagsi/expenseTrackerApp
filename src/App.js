import React from "react";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import { TransactionProvider } from "./components/transContext";
function App() {
  return (
    <TransactionProvider>
      <ExpenseTracker />
    </TransactionProvider>
  );
}

export default App;
