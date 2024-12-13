import { createContext, useContext, useReducer } from "react";
import propTypes from "prop-types";

const ContextProvider = createContext();
const currentState = {
  open: false,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        open: true,
      };
    case "close":
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};
const UseContext = ({ children }) => {
  const [{ open }, dispatch] = useReducer(Reducer, currentState);

  return (
    <ContextProvider.Provider value={{ open, dispatch }}>
      {children}
    </ContextProvider.Provider>
  );
};
function UseValue() {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("UseValue must be used within a UseContext provider");
  }
  return context;
}
UseContext.propTypes = {
  children: propTypes.object,
};

export { UseContext, UseValue };
