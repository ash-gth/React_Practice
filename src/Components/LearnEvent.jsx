
import { useState } from "react"
const LearnEvent = () => {
        const [message, setMessage] = useState('');
    
    const handleClick = () => {
        setMessage('Click')
        
    }
    const handleEmpty = () => {
        setMessage('')
        
    }
    
    const handleClickAgain = (param) => {
        setMessage(param)
    }

    return(
        <>
        <button onClick={handleClick}>Click Me </button>
        <button onClick={handleEmpty}>Empty</button>
        <h1>{message}</h1>
        <br />
        <button onClick={() => handleClickAgain("Clicked Me Again")}>Click Me Again</button>
        
        </>
    )
}
export default LearnEvent