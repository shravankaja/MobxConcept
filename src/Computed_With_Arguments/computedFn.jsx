import { observable } from 'mobx'
import { computedFn } from 'mobx-utils'
import React from  'react'
import {Observer} from 'mobx-react-lite'



function ComputedFunction() {
    const [observableObj] = React.useState(() => observable({
        name : "Shravan",
        arr : [],
        com : computedFn(function(lastname) { // here we have used computedFn which is can act as a computed with arguments 
            return this.name+lastname
        })
    }))
    return (
        <>
        <Observer>
            {

                () => (

                <div>{observableObj.com("kaja")}</div>
                )
            }
        
        </Observer>
        </>
    )
}
export default ComputedFunction