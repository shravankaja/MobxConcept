import { observer } from 'mobx-react-lite';
import React from 'react'
import '../CSS/main.css'

function CountMakeObservable({store}) {
    return (
        <>
        <div  class = "example">
        <div  style = {{ margin : '100px'}}>
            <div> Count   : {store.count}</div>
            <button  onClick = {() => store.increment()} >Inc counter</button>
            <div>Double : {store.showDouble()}</div>
        </div>
        </div>
        </>
    )
}

export default observer(CountMakeObservable);