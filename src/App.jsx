import HelloWorld from "./Components/HelloWorld"
import LearnReact from "./Components/LearnReact"
import Learnjsx from "./Components/learnjsx"
import LearnProps from "./Components/LearnProps"
import PropsCard from "./Components/PropsCard"
import LearnEvent from './Components/LearnEvent'
import LearnLiftingStateUp from './Components/LearnLiftingStateUp'
import NewCard from "./Components/NewCard"
import { useState } from "react"
import UseState from "./Components/UseState"


function App() {
  const price_1= 300;
  const data1 = {
    stock1: {
     name:'reliance',
     price:200,
    },
    stock2: { 
     name:'tesla',
     price:300,
    },
    stock3: {
     name:'iron',
     price:500,
    },
  } 
  const list = [
    {
      name : "apple",
      price : 300
    },
    {
      name : "Tesla",
      price : 900
    },
    {
      name : "VI",
      price : 100
    },
    
  ]
  const getdata = (data) => {
         setinfo(data);
  }
  const dummyData = {
    name: '',
    age: '',
    dob:''
  }
  
  const[info, setinfo] = useState(dummyData)
  return (
    <>
      <h1>Learn React</h1> 
      {/* <Learnjsx /> */}
      {/* <LearnProps stock= 'Tesla' price= {price_1}/> */}
      {/* <PropsCard name = {data.stock1.name} price = {data.stock1.price}    />
      <PropsCard name = {data.stock2.name} price = {data.stock2.price}    />
      <PropsCard name = {data.stock3.name} price = {data.stock3.price}    /> */}
      {/* {
        list.map((stock, index) => (
          <> 
            <PropsCard name={stock.name} price={stock.price} key={index} />
          </>
        ))
      } */}

      {/* <LearnEvent /> */}
      {/* <div>Name: {info.name}</div>
      <div>Age: {info.age}</div>
      <div>DOB: {info.dob}</div> */}
      {/* // <LearnLiftingStateUp getdata={getdata} />
      // <NewCard data={info}/> */}
      <UseState />
      
      </>
  )
}

export default App
