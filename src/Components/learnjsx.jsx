import React from 'react';

const h2element = React.createElement("h2" , null , "learnjsx")

const Learnjsx = () => {
    let Stock = 'Reliance'
    let clName = 'flex flex-col justify-center items-center' 
    return (
        <>  
         {h2element}
        <h1>Name of the stock is: {Stock}</h1>
        <h2>Price of the stock {Stock} is {30+40}</h2>
        <h3 classname='clName'>It is a container</h3>
        <h3 classname={clName}>It is a container</h3>
        </>
    )
}
export default Learnjsx