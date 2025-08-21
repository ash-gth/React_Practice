import React from "react";
import useCounter from '../Hooks/useCounter'


const CustomHooks = () => {
    const {count,increment, decrement, reset} = useCounter();

  return (
<>
        <h2>Count :{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>R</button>
</>
  )
}

export default CustomHooks;
