import React from 'react';
import { CounterProvider } from './context/useGlobalContext';
import Counter from './components/Counter';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
