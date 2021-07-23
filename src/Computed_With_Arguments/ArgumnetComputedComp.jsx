import React from 'react'
import {observer} from 'mobx-react-lite'
import { computed } from 'mobx'

function ArgumentComputedCom({store}) {
    console.log(store)

    const isCall = computed(() => store.isCalled("Shravan")).get()
    //We create a fresh computed value in the middle of a reaction. This works fine and does introduce that additional caching point, avoiding all components having to directly respond to every selection change
    // from the above compute method we make our own local computed derivative which would work on observable and create an additional caching point so that we limit our 
    // reacctivity of our individual components using computed locally as each component might not want to change for every observable change 

    console.log(isCall)


    return (
        <>
        <div>Testing value returned form computed derivative form computed : {isCall ? "true" : "false"} </div>
        </>
    )
}
export default observer(ArgumentComputedCom)