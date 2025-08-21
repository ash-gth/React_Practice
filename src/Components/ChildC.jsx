import React from 'react'
import { PriceContext } from '../App'
function ChildC(props) {
    console.log("stock")
  return (
    <>
    {/* <div>ChildC</div>
    <h2>stock : {props.stock.stock} </h2> */}

    <PriceContext.Consumer>

      {
        (price) => {
          return(
            <>
              <h2>Child C</h2>
              <h3>Price is : {price}</h3>
            </>
          )
        }
      }

    </PriceContext.Consumer>
    </>
    
  )
}

export default ChildC