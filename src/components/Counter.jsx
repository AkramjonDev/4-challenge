import React from 'react';
import { useGlobalContext } from '../context/useGlobalContext';
import useFetch from '../hooks/useFetch';

const Counter = () => {
  const { state, dispatch } = useGlobalContext();
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log('API Data:', data);
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Counter: {state.count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Decrement
      </button>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">API Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Counter;
