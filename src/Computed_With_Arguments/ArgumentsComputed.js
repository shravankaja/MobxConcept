import { makeAutoObservable } from "mobx";

class ArgumentComputed {
    constructor() {
        makeAutoObservable(this)
    }

    isCalled(data) {
        if(data == "Shravan") {
            return true
        }
    }
}

export default ArgumentComputed;