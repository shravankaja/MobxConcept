
import React from 'react'
import '../CSS/main.css'
import {observer} from 'mobx-react-lite'

function Loan({store}) {

    const sendToStore = (event) => { 
        store.calculateIntrest(event.target.value,12)
       
    }

    return(
        <>
            <div class = "example">

                <div>

                    <input onChange = {sendToStore} ></input>    
                    <button  >Click to calucate Intrest</button>
                    <div>Intrest Amount : {store.showIntrest()}</div>
                    <div>Emi 12 months : {store.emi()}</div>

                 </div>


            </div>

        </>
    )

}

export default observer(Loan);