import { action, autorun, reaction, dispose } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import '../CSS/main.css'

function Reaction({store}) {
    
    //     During the execution of the provided function, MobX keeps track of all observable and computed values that are directly or indirectly read by the effect. Once the function finishes, MobX will collect and subscribe to all observables that were read and wait until any of them changes again. Once they do, the autorun will trigger again, repeating the entire process.

    React.useEffect(()=>{

        if(store.msg == "Deposited") {
            console.log("caught")

            setTimeout(() => {
                const display = document.querySelector('.actionStatus')
                display.innerHTML = " "
               
            },2000)
        }
    })

    autorun(() => {
       if(store.bankBalance > 0) {
           console.log("helo")
           const display = document.querySelector('.actionStatus')
                display.innerHTML = "Deposited"
                store.msg = "Deposited"
       }
        
    })


    // reaction gives a fine grained control than autorun as we can decided based on predicate when to trigger a
    // action. Unlike autorun where it would run for every observable state change 

    reaction(()=>store.isMinimumBalanceReached, isMinimumBalanceReached => {
        if(isMinimumBalanceReached) {
            store.msg2 = "You have minimum Balance now"
        }
    })
    
    
    return (
        <>
        <div class = "example">
            <div>{store.bankBalance}</div>
            <button onClick= {() => store.depositBalance(100)}>Deposit</button>
         <div class = "actionStatus">{store.msg}</div>
         <div>{store.msg2}</div>
        </div>
        </>
    )
}

export default observer(Reaction)