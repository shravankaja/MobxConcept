import { fromPromise } from 'mobx-utils'
import React from 'react'
import {observer} from 'mobx-react-lite'
import { observable, observe, when } from 'mobx'
import mobx from '../Components/mobx'
import axios from 'axios'




function FromPromise () {
    
    const assests = fromPromise(axios.get('https://www.cryptingup.com/api/assets'))
    
    const [observabelObj] = React.useState(() => observable({
        name : "Shravbam",
        pending : "pending"
       
    }))

    axios.get('https://www.cryptingup.com/api/assets').then(resp => {
        console.log(resp)
    })

    when(()=>assests.state == "pending", () => { console.log("got", assests  ) })
    when(()=>assests.state == "fulfilled", () => { console.log("got", assests  ) })
    when(()=>assests.state == "rejected", () => { console.log("got", assests  ) })

    return(
        <>
        <div>
            {
                observabelObj.name
            }
          
        </div>
        </>
    )
}

export default FromPromise