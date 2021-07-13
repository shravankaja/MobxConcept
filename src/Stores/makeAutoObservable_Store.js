import { action, makeAutoObservable, observable } from "mobx"



class MakeAutoObservableStore {
    count = 0
    statement = "conter no action"
    actionType = ""

    constructor() {
        makeAutoObservable(this, {
            count : observable,
            inc : action  
        }) // using makeautoobservable we need not specify actions and observabels and flows 
        // but we can override by providing annotations
    }

    inc() {
        console.log(this.count)
        this.count = this.count+1
        this.actionType = "+"
       
    }

    dec() {
        this.count = this.count-1 
        this.actionType = "-"
       
    }

    showStatement () {
        return this.statementType
    }

    get statementType () {
        if(this.actionType.includes("+")) {
            return this.statement = "Counter is incremented "
        }
        else if(this.actionType.includes("-")) {
            return this.statement = "Counter is decremented"
        }

    }
} 

export default MakeAutoObservableStore;

