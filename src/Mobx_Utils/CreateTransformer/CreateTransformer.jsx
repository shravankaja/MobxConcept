import { observable } from 'mobx'
import { Observer } from 'mobx-react-lite'
import React from 'react'
import {createTransformer} from 'mobx-utils'

function CreateTransformer() {
   
    const [observableObj] = React.useState(() => observable({
        usersPassed : [],
        usersIDs :[],
        userType : [],
        users : [{name : "Shravan", id : "123", type : "Admin"}, {name : "Mark", id : "345", type : "Engineer"},{name : "VSccode", id : "123", type : "Admin"}, {name : "Fark", id : "345", type : "Engineer"}]

    })) 

    // here we have to populate three arrays when an user enter room. This means we also have to maitain state of them. 
    // So ther has to be different transformer functions for these different aarays to be appllied which make it difficult to maintian state 

    // with createTransformer transformation functions can be composed so that we can build tree with lot of tranformation functions
    //createTransformer turns a function (that should transform value A into another value B) into a reactive and memoizing function. In other words, if the transformation function computes B given a specific A, the same B will be returned for all other future invocations of the transformation with the same A. However, if A changes, the transformation will be re-applied so that B is updated accordingly. And last but not least, if nobody is using the transformation of a specific A anymore, its entry will be removed from the memoization table.

    // const states = []

    // autorun(() => {
    //     states.push(transformerFunctionn(observableObj))
    // })

    // by using the the above autorun we can maintaina a state easily as we get result from transformerFunction which is managing three diiferent arrays


    const enterIntoRoom = () => {
        const rndInt = Math.floor(Math.random() * 2) + 1
        let user = observableObj.users[rndInt]
        transformerFunctionn(user)
        
    }

    const transformerFunctionn = createTransformer((user) => {
        observableObj.usersPassed.push(user.name)
        observableObj.usersIDs.push(user.id)
        observableObj.userType.push(user.type)
    })
    //In this example the state is serialized by composing three different transformation functions. The autorunner triggers the serialization of the store object,

    const changeDetails = () => {

        for(let i=0; i<observableObj.usersPassed.length ; i++) {
            console.log(observableObj.usersPassed[i])
            if(observableObj.usersPassed[i] == "Shravan" || observableObj.usersPassed[i] == "Mark") {
                observableObj.usersPassed[i] = "ChangedFromShravan"
            }
        }
    }



    return (
        <>
        <div>Create Tranformer Example</div>
        <button onClick = {enterIntoRoom} >Enter into Room</button>
        <button onClick = {changeDetails}>Change Details of Shravan  or Mark in the room if entered</button>
        <div>Users In the  Room</div>
       <Observer>
            {
                () => (
                    <div>{observableObj.usersPassed.map((name) => (
                        <div>{name}</div>
                    ))}</div>
                )
            }
       </Observer>
        </>

    )
}
export default CreateTransformer