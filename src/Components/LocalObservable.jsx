
import React, { useState } from 'react'
import '../CSS/main.css'
import { useLocalObservable, Observer } from "mobx-react-lite"
import { observable } from 'mobx'

function LocalObservable() {
    const [task,setTask] = React.useState("")
    const [login] = useState(() => observable({  // we can also make used of useState hook to intilaize local observable
        username: ""
    }))

    const takeInput = (event) => {
            setTask(event.target.value)
    }

    const saveInput = () => {
        toDo.todoList.push(task)
    }

    const takeUsername = (event) => {
        login.username = event.target.value
    }

    const toDo = useLocalObservable(() => ({  // using localObservable hook we are initating a local observabel state instead of creating a store itself
        todoList : [],
        name : "Shravan"
    }))
    
    return (
        <>
        <div class = "example">
            <Observer>
                { 
                    () => (
                

                    <div>Tasks of : {toDo.name}
                    <p>Enter the username</p>

                    <input onChange ={takeUsername} ></input>
                    <div>Username entered is {login.username}</div>
                    
                    <p>Enter tasks of {toDo.name}</p>
                    
                        <input onChange = {takeInput} ></input>
                        <br></br>
                      <button onClick = {saveInput} style = {{height : "20px"}} >Submit</button> 
                    <p>Tasks of {toDo.name}</p>
                    { toDo.todoList.map((task) => (

                        <div>{task}</div>
                    ))


                    }


                    </div> )
                }
            </Observer>
        </div>
        </>
    )
}

export default LocalObservable