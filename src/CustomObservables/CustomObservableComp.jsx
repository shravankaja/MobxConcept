import React from 'react'
import {observer} from 'mobx-react-lite'

function CustomObservableComp({store}) {
    store.sendData()
    
    React.useEffect(() => {
        console.log(store.getData())
    
    },[])

    return (
        <>
        <div>{store.arr.map((names) => (
            <div>{names} </div>
        ))}</div>
        </>
    )
}

export default observer(CustomObservableComp)