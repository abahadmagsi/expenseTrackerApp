import { createContext, useReducer } from "react";
import TransReducer from "./transReducer";
const initailTransactions = [
  { amount: 100, text: "Demo" },
];

export const TransactionContext = createContext(initailTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransReducer, initailTransactions);

  function AddTrans(tranObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: Number(tranObj.amount),
        text: tranObj.text,
      },
    });
  }
  function delItem(index){
      console.log('Called from context');
    dispatch({
        type:'DELETE_ITEM',
        payload:{
            id:index
        }
    })
  }
  return (
    <TransactionContext.Provider
      value={{
        transaction: state,
        AddTrans,
        delItem,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
