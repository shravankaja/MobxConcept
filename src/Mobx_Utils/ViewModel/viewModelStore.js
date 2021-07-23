import { makeAutoObservable } from "mobx";

class ViewModel {
    title = "Shravan"
    constructor() {
        makeAutoObservable(this)
    }
}

export default ViewModel;