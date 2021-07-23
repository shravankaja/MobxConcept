import { makeAutoObservable, observable } from "mobx";
import {fromResource, toStream} from 'mobx-utils'

class FromResourceStore  {
    
    constructor() {
        makeAutoObservable(this)
    }


    user = observable({
        name : 'Shravanm'
    })



   

    returnfromResource(obj) {
        this.user.from(() => this.user.name).scan(nameChange => nameChange +1 , 0)
        let currentSubscription 
        return fromResource(
            (sink) => {
                sink(obj)
                currentSubscription = obj.onUpdated(()=> {
                    sink(obj)
                })
            },
            () => {
                obj.unsubscribe(currentSubscription)
            }
        )
    }


}

export default FromResourceStore