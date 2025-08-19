

const LearnLiftingStateUp = (props) =>  {
    const data = {
        name : '',
        age : '',
        dob : ''
    }

    const handleChange = (e) => {
        data[e.target.name] = e.target.value
        console.log(data)
    }
    const handleClick =() => {
        props.getdata(data);
        console.log("data : ", data)
    }
    

  return (
    <>
    <label htmlFor="name">Name: </label>
    <input placeholder='Enter Your Name' type="text" name="name" onChange={(e) => {handleChange(e)}}/>
    <br />
    <label htmlFor="age">Age: </label>
    <input placeholder='Enter Your Age' type="text" name="age" onChange={(e) => {handleChange(e)}}/>
    <br />
    <label htmlFor="dob">D.O.B: </label>
    <input placeholder='Enter Your D.O.B' type="text" name="dob" onChange={(e) => {handleChange(e)}}/>
    <br />
    <button onClick={handleClick}>Print data</button>
    </>
  )
}

export default LearnLiftingStateUp