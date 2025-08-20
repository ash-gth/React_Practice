import React, { useState } from 'react'

const CounterApp = () => {


    const[Count, setCount] = useState(0)
    
    // const add = () => {
    //     let a = Count;
    //     a++;
    //     setCount(a);

    // }
    // const subtract = () => {
    //      let a = Count;
    //     a--;
    //     setCount(a= a-1);
    // }
    // const reset = () => {
    //      let a = Count;
    //     a = 0;
    //     setCount(a) ;

    const add = () => {
        setCount((prev) => prev + 1)
    }
    const subtract = () => {
        setCount((prev) => prev - 1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <> 
    <h1>{Count}</h1>
    <button onClick={() => add()}>++</button>
    <button onClick={() => subtract()}>--</button>
    <button onClick={() => reset()}>"R"</button>
    
    </>
  )
}

export default CounterApp