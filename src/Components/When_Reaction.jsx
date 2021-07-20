import React from 'react'
import {observer} from 'mobx-react-lite'
import '../CSS/main.css'

function WhenReaction({store}) {
    return (
        <>
        <div  class = "example">
        <div>To demonstrate 'When' which is a type of reaction</div>
        <div>{store.count}</div>
        <div>{store.showCountStatus()}</div>
        <button onClick = {() => store.inc()} >Inc Counter </button>
        <div>{store.msgOne}</div>
        </div>
        </>
    )
}

export default observer(WhenReaction)