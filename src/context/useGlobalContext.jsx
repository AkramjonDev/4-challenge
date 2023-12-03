import { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();

const initialState = {
  count: localStorage.getItem('count') || 0,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newCount = state.count + 1
      localStorage.setItem('count', newCount)
      return { ...state, count: newCount };
    case 'DECREMENT':
      const minusCount = state.count - 1
      localStorage.setItem('count', minusCount)
      return { ...state, count: minusCount };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(CounterContext);
};

export { CounterProvider, useGlobalContext };