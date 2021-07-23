import React from 'react'
import {observer} from 'mobx-react-lite'

function FromPromiseComponent({assests}) {
    React.useEffect(() => {
        console.log(assests)
    })
    return (
        <>
        <div>
            {
              assests.state == "pending" ? <div>Loading</div> : assests.state == "fulfilled" ? <div>Done Loading</div> : <></>
                 
            }
        </div>
        </>
    )
}
export default  observer(FromPromiseComponent)