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
import CounterApp from "./Components/CounterApp"
import UseEffect from "./Components/UseEffect"
import UseMemo from "./Components/UseMemo"
import ChildA from './Components/ChildA'
import { createContext } from "react"

const PriceContext = createContext()
// create provider consumer

function App() {

  
  const price_1= 300;

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
      {/* <LearnLiftingStateUp getdata={getdata} /> */}
    {/* <NewCard data={info}/>  */}
      {/* <UseState /> */}
      {/* <CounterApp /> */}
      {/* <UseEffect /> */}
      {/* <UseMemo /> */}
      {/* <ChildA stock = {stock}/> */}
        <PriceContext.Provider value={price_1}>
          <ChildA />
        </PriceContext.Provider>


      </>
  )
}

export default App
export { PriceContext }