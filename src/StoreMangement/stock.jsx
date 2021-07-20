import React from 'react'
import '../CSS/main.css'
import {observer} from 'mobx-react-lite'
import BuySellNifty50 from './BuySellNifty50'
import BuyNiftyDerivative from '../StoreMangement/BuyNiftyDerivative'

function Stock({store}) {
    const [stock, setStock] = React.useState({nameOfStock : "" , index : "", quantity : 0})
    const nifity50 = store.buyNifty50Options()
    const niftyDerivative = store.buyNiftyDerivative()
    // above two lines we are creating instance of oujr domain objects (represeneted as classes)
    // since now we have single instance for each object we can pass them through out application 
    // instead of store

   const takeStockName = (event) => {
        setStock({...stock,nameOfStock : event.target.value})
   }

   const takeIndexName = (event) => {
       setStock({...stock,index : event.target.value})

   }

   const takeQuan = (event) => {
        setStock({...stock, quantity : event.target.value})
   }

   const submit = () => {
       store.addStock(stock)
   }
   React.useEffect(() => {
       console.log("hello")
   })

   return (
        <>
        <div class = "example1">
            <div class = "AddStocks">
             <p>Enter Stock Name :</p>
             <input onChange = {takeStockName}></input>
              <p>Enter Index Name :</p>
              <input onChange = {takeIndexName}></input>
              <p>Enter quantity : </p>
              <input onChange = {takeQuan}></input>
              <hr></hr>
            <button onClick = {submit}>Submit</button>
            </div>
            <div class = "StocksAva">
                <div>Available Stocks</div>
                {
                    store.stocks.map((stock) => (

                        <div>
                        <div>Name of the stock : {stock.name}</div>    
                        <div>Index : {stock.index}</div>    
                        <div>Quantity : {stock.quantity}</div>  
                        <div>-----------------------------------</div>  
                            
                            
                        </div>


                    ))
                }
                <div>MyStocks</div>
                {
                    store.buyers.map((obj) => (
                        <div>
                        <div>Name of Stock : {obj.nameOfStock}</div>
                        <div>Qunatity : {obj.quantity}</div>
                        <div>Name of Buyers : {obj.buyer} </div>
                        <div>Index : {obj.index}</div>

                            </div>
                    ))
                }
            </div>
            <div class = "BuySell">
                <BuySellNifty50  store = {nifity50}/>
                <BuyNiftyDerivative store = {niftyDerivative} />
            </div>
            {/* {in the above two lines we are passing domain objects to different components which have ui and interact according to the context with domain objects respectively} */}
        </div>
        </>
    )
}
export default  observer(Stock);