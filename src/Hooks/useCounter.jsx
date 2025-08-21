import React, { useState } from 'react'

const useCounter = (intitialValue = 0) => {
const [count,setCount] = useState(intitialValue)
    const increment = () => {setCount((prev) => prev + 1)}
    const decrement = () => {setCount((prev) => prev - 1)}
    const reset = () => {setCount(0)}
  return { count,increment,decrement,reset}
}

export default useCounter