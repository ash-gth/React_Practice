import React, { useMemo, useState } from 'react'

function UseMemo() {
    const[count, setCount] = useState(0)
    const[number,setNumber] = useState(10000000)
    const increaseNumber = () => {
        if(count === 10){
            setNumber(999999999)
        }
        setCount(count+1);
    }
    const sumOfnumbers = useMemo( () => {
        let sum = 0;
            for (let i = 0; i <= number; i++)
            {
                sum = sum+i;
            }
                return sum;  

    } , [number])
        console.log(`the sum of number is : ${sumOfnumbers}` )
  return (


    <>


    <h2>Count: {count}</h2>
    <button onClick={increaseNumber}>Increase Number</button>  
    </>
  )
}
export default UseMemo