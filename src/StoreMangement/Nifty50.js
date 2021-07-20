import { makeAutoObservable, observable } from "mobx";




class Nifty50Options { // Domain object 1 refere to explanantion given in domain object 2 

    activated = "Shravan"
    lotSize = 1000
    
    
    constructor(store) {
        makeAutoObservable(this, {activated : observable})
        this.store = store

    }

    buy (data,name) {
        let lot = data.lots
        let quantity = lot*this.lotSize
        let indexName = "Nifty50"
        let obj= {
            nameOfStock : data.nameOfStock,
            quantity : quantity,
            index : indexName,
            stockType : "Option"
        }
        this.store.buyStock(obj,name)

    }
    
    
}

export default Nifty50Options;