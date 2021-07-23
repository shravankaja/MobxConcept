import { observable } from 'mobx';
import React from 'react'
import {queueProcessor, chunkProcessor} from 'mobx-utils'

function QueueProcessor() {
    
    const [title] = React.useState(() => observable({
        arr : [],
        name : "Shravam",
        arrTwo : []
    }))

    const stop = queueProcessor(title.arr, () => { console.log("hello") })
    // queueProcessor parameters  
    // observable Array 
    // processor - which executes every time item is added to an array 
    // debounce - to alter the processor exccution, with 0 it will be synchronous

    const chunk = chunkProcessor(title.arrTwo, () => { console.log(" this will execute only after 10 additions")}, 100 ,10 )
    // chunkProcessor works simlar to queueProcessor but it takes additonal parameter as chunk size it calls only 
    // when chunk of itmes are added 

    title.arr.push("yes")
    title.arr.push("so totally we can see hello twice in console")
        for(let i =0 ; i < 11 ; i++) {
            title.arrTwo.push("Yell")
        }
    
    return (
        <>
        <div>{title.name}</div>
        </>
    )
}

export default QueueProcessor;