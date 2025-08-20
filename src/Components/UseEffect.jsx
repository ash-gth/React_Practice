import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
        const increment = () => {
        setCount((prev) => prev + 1  );

    }
    const [random, setRandomNum] = useState(0);

        const randomNum = () => {
        const randomNum= Math.floor(Math.random() * 10)
        setRandomNum(randomNum);

    }

    useEffect(()=> {console.log("Mounted")}, [count] )
  return (
    <>
        <h2> Count : {count}</h2>
        <button onClick={() => increment()}>Increase Me</button>
        <br />
        <h2>Random Number: {random}</h2>
        <button onClick={() => randomNum()}>Random Number</button>
    
    </>
  )
}

export default UseEffect