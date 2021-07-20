
import React from 'react'
import {observer} from 'mobx-react-lite'

function BuyNiftyDerivative({store}) { // stpre is actually a domain object 
    const [stock, setObj] = React.useState({nameOfStock : "", quantity : 0})

    const takeName = (event) => {

        setObj({...stock,nameOfStock : event.target.value})

    }

    const takeQuan = (event) => {
        setObj({...stock,quantity : event.target.value})
    }

    const buy = () => {
        console.log("hello")
        store.buyDerivative(stock)
    }


    return(
        <>
        <div style = {{color : "green"}}>Buy Derivative Stock</div>
        <p>Enter the stock Name</p>
        <input onChange = {takeName}></input>
        <p>Enter quantity</p>
        <input onChange = {takeQuan}></input>
        <button onClick = {buy}>Buy</button>
        </>
    )
}

export default observer(BuyNiftyDerivative)