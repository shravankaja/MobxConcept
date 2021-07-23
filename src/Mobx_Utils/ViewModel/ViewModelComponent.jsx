import React from 'react'
import {observer} from 'mobx-react-lite'
import {createViewModel} from 'mobx-utils'
import { action } from 'mobx'

function ViewModelComponent({actualModel}) {

    
    const proxyModel =  createViewModel(actualModel)
    // create viewModel takes an object as parameter with observable properties(model) here our object is the actual object of our 
    // ViewModel store. Since it has one obervable property title. Now using createViewModel we create a proxy model of our original 
    // store object and and enumrate all possible observable properties 

    // Points 
    // 1) As long as no new values are assigned our proxy model original model is returned 
    // 2) Any changes in the original model will immeiatley be visible in proxy model 
    // 3) Any changes made to the proxy model will not be visible to the actual model 
    // until unless we use proxyModel.submit() vice versa we can use proxyModel.reset()

    // METHODS - 
    // isDirty - gives us  any modifications in proxy model 
    // isProPertyDirty - sames as above property but specific to a property
    
 

    const changeProxy = () => {

        proxyModel.title = "Changed Using Proxy Model"
        proxyModel.submit()
      
    }

    const changeUsingActualModel = () => {
            actualModel.title = "Changed Usin Actual Model"
    }

    const changeNotToBeEffected = () => {
            proxyModel.title = "Change not to be Shown"
            proxyModel.reset()
    }

    
    return (
        <>
        <div>"Proxy model title  : "{proxyModel.title}</div>
        <div>"Actual model title  : "{actualModel.title}</div>
        <button onClick = {changeProxy}>Change both using Proxy</button>
        <button onClick = {changeUsingActualModel}>change using actual model </button>
        <button onClick = {changeNotToBeEffected}>Change should not be effected to actual model when trying to update from proxy model</button>
        </>
    )
}
export default observer(ViewModelComponent);