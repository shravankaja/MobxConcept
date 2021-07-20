import React from 'react'
import {observer} from 'mobx-react-lite'

function BuySellNifty50({store}) { // this store is actuallu a domain object which is nifty50options 
    const [stock, setStock] = React.useState({nameOfStock : "", lots : 0})
   
    const takeStockName = (event) => {

        setStock({...stock,nameOfStock : event.target.value})
    }

    const takelots = (event) => {
        setStock({...stock, lots : event.target.value})

    }

    const buy = () => {
        store.buy(stock,"Shravan") // we are calliing domain object method

    }


    return(
        <>
        <div> 
            <p style = {{color : "Red"}}>Buy Nifty Options</p>
                <p>Enter Stock Name</p>
                <input onChange = {takeStockName}></input>
                <p>Enter lot size</p>
                <input onChange = {takelots}></input>
                <button onClick = {buy} >Buy</button>
        </div>
        </>
    )
}

export default observer(BuySellNifty50);