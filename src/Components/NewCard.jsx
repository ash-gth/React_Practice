
import React from 'react'

const NewCard = (props) => {
  return (
  <>
    <div>Name:{props.data.name}</div>
    <div>Age:{props.data.age}</div>
    <div>DOB:{props.data.dob}</div>
    </>
  )
}

export default NewCard