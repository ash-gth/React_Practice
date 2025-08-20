import React from 'react'
import ChildC from './ChildC'


function ChildB(props) {
  return (
    <>
    <div>ChildB</div>
    <ChildC stock = {props.stock}/>
    </>
  )
}

export default ChildB