import React from 'react'
import ChildB from './ChildB'



function ChildA(props) {
  return (
    <>
    <div>ChildA</div>
    <ChildB stock = {props.stock}/>
    </>
  )
}

export default ChildA