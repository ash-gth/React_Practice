import React from "react" 

const LearnEvent = () => {
    const handleClick = () => {
        console.log ("Clicked");
    }
    const handleClickAgain = (param) => {
        console.log (param);
    }

    return(
        <>
        <button onClick={handleClick}>Click Me </button>
        <br />
        <button onClick={() => handleClickAgain("Clicked Me Again")}>Click Me Again</button>
        
        </>
    )
}
export default LearnEvent