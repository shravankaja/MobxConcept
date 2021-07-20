import { action, makeAutoObservable, runInAction, when } from "mobx";


class WhenReactionStore {
    count = 0   
    msg = ""
    msgOne = ""

    constructor() {
        makeAutoObservable(this)
        when(() => this.isCounterTen , () => this.dispose()) // when take mainly two arguments 
        // first one it the predicate and second one is the function that has to run when the predicate 
        // function returns true 
      

    }

    inc() {
        this.count= this.count + 1
        when(() => this.isCounterMoreThenTen , () => this.dispose()) // in this when 
        when(() => this.isCountAtFive).then(() => {this.msgOne = "Counter is halfway"})  // other way of writin when 
        // we run the preicate till that the count is less than equal to 10  and if it is more than 10 
        // the pedicate funicition is given false value due to which the the second argumen which is the function 
        // will get executed.
        // so when runs the predicate function unitl it recives false as soon as it recives true it it goes to the 
        // second argument and runs the function
    }

    dispose() {
        console.log("hello i got triggered")
        this.count = 0
    }

    get isCountAtFive() {
        return this.count == 5
    }

    showCountStatus() {
        
        if(this.isCounterTen) {
            return this.msg = "Counter will reset soon"

        }
        else if(!this.isCounterTen) {
            return this.msg = "counter is less than 10"
        }
    }
    
    get isCounterTen() {
        
        return this.count >  8
    }

    get isCounterMoreThenTen() {
        return this.count > 10 
    }


}
export default WhenReactionStore;