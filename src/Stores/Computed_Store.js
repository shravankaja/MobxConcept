import { makeAutoObservable } from "mobx";


class ComputedStore  {
    loanAmount = 0
    intrest = 0.078
    noMonths = 0
    intrestAmount 


    constructor() {
        makeAutoObservable(this)
    }

    calculateIntrest(loan,noOfMonths) {
        this.loanAmount = loan
        this.noMonths = noOfMonths
    }

    showIntrest() {
       return  this.intrestAmountCalc
    }

    emi() {
        return this.months
    }

    

    get intrestAmountCalc() {  //Computed values can be created by annotating JavaScript getters with computed
      return      this.intrestAmount =  this.loanAmount * this.intrest
        console.log(this.intrestAmount)
    }

    get months () {
        return this.loanAmount / this.noMonths
    }
}

export default ComputedStore

// computed has option where we can use computed.struct where the check happens on with the stucture like for an object 
// if the struct remains smame computed will not compute and give output as it caches the computed and look for any change
// in observable state only when it would execute