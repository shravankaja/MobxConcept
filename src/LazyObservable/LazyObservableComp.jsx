import React from 'react'
import {observer} from 'mobx-react-lite'

function LazyObservabelComp({store}) {
    console.log(store)
    return (
        <>
        <div>Hello from lazy observable</div>
        <div>{store.car}</div>
        <div>{store.bike}</div>
        </>
    )
}

export default observer(LazyObservabelComp)