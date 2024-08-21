import { useReducer } from "react";
import "./index.css";
import { Button } from "./components/Button";


const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
const deposit = 150;
const withdraw = 50;
const loanDefault = 5000;

function reducer(state, action) {
  
  switch (action.type) {
    case "opened":
      const opened = state.isActive
        ? { ...state }
        : { ...state, balance: 500, isActive: true };
      return opened;
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return {
        ...state,
        balance:
          state.balance > 0 ? state.balance - action.payload : 0,
      };
    case "requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        requestLoan: true,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: state.loan - state.loan,
        requestLoan: false,
      };
    case "closed":
      if (state.balance > 0 || state.loan > 0) return state
      return initialState;
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [{ isActive, balance, loan }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <Button onClick={() => dispatch({ type: "opened" })}>Open account</Button>
      <Button
        onClick={() => dispatch({ type: "deposit", payload: deposit })}
        isActive={isActive}
      >
        Deposit 150
      </Button>
      <Button
        onClick={() => dispatch({ type: "withdraw", payload: withdraw })}
        isActive={isActive}
      >
        Withdraw 50
      </Button>
      <Button
        onClick={() => dispatch({ type: "requestLoan", payload: loanDefault })}
        isActive={isActive}
      >
        Request a loan of 5000
      </Button>
      <Button
        onClick={() => dispatch({ type: "payLoan" })}
        isActive={isActive}
      >
        Pay loan
      </Button>
      <Button onClick={() => dispatch({ type: "closed" })} isActive={isActive}>
        Close account
      </Button>
    </div>
  );
}
