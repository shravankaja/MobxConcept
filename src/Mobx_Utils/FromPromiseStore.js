import { makeAutoObservable } from "mobx";
import { fromPromise } from 'mobx-utils'
import axios from 'axios'

class FromPromiseStore {

    constructor() {
        makeAutoObservable(this)
    }

    getAssests() {
        const assests = fromPromise(axios.get('https://www.cryptingup.com/api/assets')) 
        // this formPromise takes promise as argument and returns two observables state and value 
        // state will be of three types pending fulfilled rejected and value is the value resolved or rejected from
        // the promise 
        // by using this we can make our promise also observable in other words we can make 
        // observe the status of the promise and update our ui accordingly
        return assests
    }

}
export default FromPromiseStore