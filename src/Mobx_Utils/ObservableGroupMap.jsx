import { observable } from 'mobx'
import React from 'react'
import {ObservableGroupMap} from 'mobx-utils'

function Observablegroupmap() {

    const [observableObj] = React.useState(()=> observable({
        arr : [ { day: "mo", hours: 12 },
        { day: "tu", hours: 2 },]
    }))

    
    const slicesByDay = new ObservableGroupMap(observableObj.arr, (slice) => slice.day)
    // ObservableFroupMap is used to logically group the target array based on the property 
    // the result array is only read only and not open for modifications

    console.log(slicesByDay)
    return (
        <>
        </>
    )
}

export default Observablegroupmap