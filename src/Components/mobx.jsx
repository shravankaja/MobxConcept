import { observer } from 'mobx-react-lite';
import React from 'react'


function Mobx({store}) {
    
    const incCount  = () => {
        store.setCount()
    }
   
    return (
        <>
        <div>{store.count}</div>
        <button  onClick = {incCount}>Click on me </button>
        </>
    )
}

export default observer(Mobx);