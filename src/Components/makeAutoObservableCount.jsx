import React from 'react'
import '../CSS/main.css'
import {observer}  from 'mobx-react-lite'


function CountWithAutoObservabel({ store }) {
    const incone = () => {
        store.inc()
    }
    
    return (
        <>
            <div class="example">
                <div>
                    Count : {store.count}

                </div>
                <div>
                    statement : {store.showStatement()}
                </div>
                <div>
                    <button onClick = {incone}>Inc</button>
                    <button  onClick = {() => store.dec()} >  dec</button>
                </div>
            </div>
        </>
    )
}

export default  observer(CountWithAutoObservabel);