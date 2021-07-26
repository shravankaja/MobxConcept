import { observable,set, keys, remove, has , get } from 'mobx';
import {Observer} from 'mobx-react-lite'
import React from 'react'

function CollectionUtilites() {
 
    const [observabelObj] = React.useState(() => observable({
        arrayToTest : [1,2,3,4]
    }))

    const setArray = () => {
        set(observabelObj.arrayToTest, {"bruce" : "heelo"})
        set(observabelObj.arrayToTest,{1 : "Shravan"}) //set(collection, key, value) or set(collection, { key: value }) update the given collection with the provided key / value pair(s).
        console.log(observabelObj.arrayToTest)
    } 

    const getAllkeys = () => {
        console.log(keys(observabelObj.arrayToTest)) //returns the keys of the collection 
    }

    const removekey = () => {
        remove(observabelObj.arrayToTest,1)
    }

    const  getValueKey = () => {
        console.log(get(observabelObj.arrayToTest,1 ))
    }
 
 
    return (
        <>
        <button onClick = {setArray}>Set a value in array</button>
        <button onClick = {getAllkeys}>get all keys</button>
        <button onClick = {removekey}> remove according to key</button>
        <button onClick = {getValueKey} >get value form key</button>
        <Observer>
            {

                    () => (
                        <div>
                            <div>
                            {
                                observabelObj.arrayToTest.map((numbers) => (<div>{numbers}</div>))

                            }
                            </div>
                         </div>
                    )

            }

        </Observer>
        </>
    )
}

export default CollectionUtilites;