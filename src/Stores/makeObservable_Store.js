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

// aviable annotation for makeObservabel are 
// 1) observabel.deep which is observable which would work on inner content of map array object etc 
// 2) observabel.shallow content inside would be untouched 
// 3) observable.struct any value which is structurally equal will be ingnored 
// 4) action.bound will bind to a instance so that this will always be set 
// 5) computed can be used for getter 
// 6) computed.struct expects it to be structrally equal to calue computed 
// 7) 