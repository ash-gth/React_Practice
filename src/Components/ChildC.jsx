import React from 'react'

function ChildC(props) {
    console.log("stock")
  return (
    <>
    <div>ChildC</div>
    <h2>stock : {props.stock.stock} </h2>
    </>
    
  )
}

export default ChildC