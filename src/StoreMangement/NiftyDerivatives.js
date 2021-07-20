import { makeAutoObservable, observable, observe } from "mobx"

class NiftyDerivative { // Domain object 2 
    // in this object which is basically a class whose instance is returned in main store that is stock.
    // here we can isolate our logic to buy a nifty derivative which is also part of a stock but it is one 
    // of its kind of stock so we have created this domain object to take care of the nifty derivative buying logic here and forward to general 
    // stock buying method in main store after preprocessing in this class buy method.
    working = ""
    constructor(store) { // as we have passed this as reference in argument in 
        // main store here we are using store as refernce to main store which will have main core methods
        makeAutoObservable(this,{working : observable})
        this.store=store 
    }

    buyDerivative(data) {
        let obj = {
            nameOfStock : data.nameOfStock,
            quantity : data.quantity,
            stockType : "Derivative",
            index : "Nifty"
        }
        this.store.buyStock(obj,"Shravan")
        // the above line comunicated with main core buy method of stock after pre processing

    }
}

export default NiftyDerivative;