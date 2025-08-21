import React, {useContext} from 'react'
import { PriceContext, UserContext } from '../App'

function ChildC() {
  
      const userData = useContext(UserContext);

      console.log(userData);
  return (
    <>
    {/* <div>ChildC</div>
    <h2>stock : {props.stock.stock} </h2> */}

    {/* <PriceContext.Consumer>
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
    </PriceContext.Consumer> */}
 
    <h2>user's username is : {userData.username}</h2>
   
    </>
    
  )
}

export default ChildC