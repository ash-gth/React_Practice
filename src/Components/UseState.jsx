import {useState} from 'react'

const UseState = () => {
    const [num,setNum] = useState(0);
    const handleNum = () =>{
        setNum(10);

    }
      const [stockPrice, setstockPrice] = useState({stock: 'Apple', price: '200', quantity: '1 tonn'})   
      console.log(stockPrice);

      const updateStockPrice = () =>{
        setstockPrice({ ...stockPrice, stock : 'Orange', price: 400});
        console.log(stockPrice)
      }
  return (
   <>
      <h2>{stockPrice.stock} : {stockPrice.price} : {stockPrice.quantity}</h2>
      <button onClick={() => updateStockPrice()}> Click Me to upadate stock price</button>
     <button onClick={handleNum}>Click Here: {num}</button>
   </>
  )
}

export default UseState