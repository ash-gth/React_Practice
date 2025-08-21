import React,{UseState, useState, useRef}  from 'react'
const UseRef = () => {

    const [name, setName] = useState('');
    const refElement = useRef('');
    const prevName = useRef('');

    const handleElement = (e) => {
        setName(e.target.value);
        prevName.current = name;

    }

    const clearText = () => {
        setName('');
        refElement.current.focus();

    }
  return (
    <>
    
    <h2>Name : {name}</h2>
    <input ref={refElement} type="text" value={name} onChange={handleElement}/>
    <button onClick={clearText}>Clear</button>
    <p>Previous Name: {prevName.current}</p>
    
    
    
    </>
  )   
}

export default UseRef