// makeObservable can be used to trap exsisting object properties and make them observable 
// makeObservable(target, annotations , otpions) any js object can be target 
// is used in constructor of class, first argument is this 

import { action, computed, makeObservable, observable } from "mobx"

class CounterMakeObservable {
    count  = 0// state variable

    constructor() {
        makeObservable(this,{
            count : observable, // this is to specify we are now watching count for any changes in its state
            increment : action, // only actions in mobx can change state of the count or any state variable
            double : computed // value from getter mostly or simple computed value after a state change 
        })
    }

    get double() {
        return this.count *2
    }

    showDouble () {
        return this.double
    }

    increment () {
        this.count = this.count +1
    }
}

export default CounterMakeObservable;