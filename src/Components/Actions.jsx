import React from 'react'
import '../CSS/main.css'
import {observer} from 'mobx-react-lite'

function Assests({store}) {
    return (
        <>
        <div class = "example">
            <button onClick = {() =>store.getAssestsData()}>Show Data</button>
            <div>Using Action to handle state change  :   {store.status}</div>
            <button onClick = {() => store.useRunInAction()} >Asyn run in action</button>
            <div>{store.statusGivenByRunInAction}</div>
        </div>
        </>
    )
}

export default  observer(Assests);