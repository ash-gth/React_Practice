import React from 'react'

const LearnMap = () => {
    const names = ['as', 'jh' , 'hg', 'jk'];
  return (
    <>
    <div>LearnMap</div>
    <ul>
       {names.map((name)=> (
        <li>{name}</li>
       ))}
    </ul>
    </>
  )
}

export default LearnMap