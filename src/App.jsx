import HelloWorld from "./Components/HelloWorld"
import LearnReact from "./Components/LearnReact"
import Learnjsx from "./Components/learnjsx"
import LearnProps from "./Components/LearnProps"
import PropsCard from "./Components/PropsCard"
import LearnEvent from './Components/LearnEvent'
function App() {
  const price_1= 300;
  const data = {
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

      <LearnEvent />
      
      </>
  )
}

export default App
