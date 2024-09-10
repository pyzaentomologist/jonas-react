import { createContext, useReducer } from "react";
import FAKE_USER from "../data/user.json";

export const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: ""
}

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "error":
      return {
        ...state,
        error: action.payload
      };

    default:
      throw new Error("This action doesn't exist");
  }
}

export function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error}, dispatch] = useReducer(reducer, initialState);
  async function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({type: "login", payload: FAKE_USER})
    } else {
      dispatch({type: "error", payload: "Uncorrect login or password"} )
    }
  }
  async function logout() {
    dispatch({ type: "logout" });
  }
  return <AuthContext.Provider
  value={{user, isAuthenticated, login, logout, error}}>
    { children }
  </AuthContext.Provider>
}