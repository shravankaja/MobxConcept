import { makeAutoObservable } from "mobx";



class ReactionStore {

    bankBalance = 0
    msg =""
    msg2 =""

    constructor() {
        makeAutoObservable(this)
    }


    depositBalance(amount) {

        this.bankBalance = this.bankBalance+amount
    }

    get isMinimumBalanceReached() {
        return this.bankBalance > 1000
    }


}

export default ReactionStore