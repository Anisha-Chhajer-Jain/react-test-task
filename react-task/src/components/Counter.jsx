// import React, { useState } from "react";

// function Counter() {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <h2
//         style={{
//           color: value === 0 ? "red" : "green",
//         }}
//       >
//         {value}
//       </h2>

//       <button onClick={() => setValue(value + 1)}>
//         Increment
//       </button>

//       <button
//         onClick={() =>
//           setValue(value > 0 ? value - 1 : 0)
//         }
//       >
//         Decrement
//       </button>

//       <button onClick={() => setValue(0)}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

// components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => Math.max(0, prev - 1));
  };

  const reset = () => {
    setCount(0);
  };

  const getCountColor = () => {
    return count === 0 ? 'red' : 'green';
  };

  return (
    <div className="counter-page">
      <h1>Counter App</h1>
      
      <div className="counter-container">
        <h2 
          className="counter-value" 
          style={{ color: getCountColor() }}
        >
          {count}
        </h2>
        
        <div className="counter-buttons">
          <button onClick={increment} className="btn increment">
            Increment
          </button>
          <button onClick={decrement} className="btn decrement">
            Decrement
          </button>
          <button onClick={reset} className="btn reset">
            Reset
          </button>
        </div>
        
        <p className="counter-hint">
          {count === 0 ? "Can't go below 0" : 'Keep going!'}
        </p>
      </div>
    </div>
  );
}

export default Counter;