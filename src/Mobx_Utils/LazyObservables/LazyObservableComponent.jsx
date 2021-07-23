import React from 'react'
import {observer} from 'mobx-react-lite'

function LazyObservableComponent({lazyObservable}) {
    
    console.log(lazyObservable)

    return(
        <>
        <div>Hello from lazy observable</div>
        </>
    
    )
}
export default observer(LazyObservableComponent)