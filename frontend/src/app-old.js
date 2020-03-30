import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function increment (){
    setCounter(counter + 1);
  }
  function decrement () {
    setCounter(counter - 1);
  }
  function reset () {
    setCounter(counter * 0);
  }

  return (
    <div>
       <Header>Contador: {counter}</Header>
       <button onClick={increment}>Incrementar</button>
       <button onClick={decrement}>Decrementar</button>
       <button onClick={reset}>Resetar</button>
    </div>
    
  );
}

export default App;
