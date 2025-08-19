import {useState} from 'react'

const UseState = () => {
    const [num,setNum] = useState(0);
    const handleNum = () =>{
        setNum(10);

    }
  return (
   <>
     <button onClick={handleNum}>Click Here: {num}</button>
   </>
  )
}

export default UseState