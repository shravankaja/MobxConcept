import { makeAutoObservable } from "mobx";
import Nifty50Options from "./Nifty50";
import NiftyDerivative from '../StoreMangement/NiftyDerivatives'

class StockStore { // this is our domain store which have the main core interaction either with api or any other 
    // transport layer. this class should be testable and can also run on backend and can be resused on any other frontend as well
     stocks = [{nameOfStock : "INFY" , index : "Nifty50", quantity : 1500}, {nameOfStock : "United" , index : "Nifty200" , quantity : 336}]
      buyers = []
      
    
     constructor() {
        makeAutoObservable(this)
    }
    
    addStock(data) {
        this.stocks.push(data)
    }

    buyNifty50Options() {  // by this method we create a domain object which can be passed over th whole application intead of 
        // of our original store. Here Nifty50Options is the domain object(which is a class) it has it own methods and properties.
        // But we can isolate a partiular context of the main store. Instead of putting whole logic in the store itself. Here we are 
        // returning an object nifty50 which can be passed to a component to which it can be used.
        const nifty50 = new Nifty50Options(this)
        
        return nifty50
    }
    
    buyNiftyDerivative() { 
        //same as the above methods.
        const niftyDerivative = new NiftyDerivative(this)
        this.buyHandlers = []
        return niftyDerivative;
    }



    buyStock(data, name) { //this is the one of the core method of the store which is called by domain objects to interact with api,
        // transport lay or update any local observable related to stock domain in our case
        data.buyer = name 
        this.buyers.push(data)
        this.changeQuantity(data)
        console.log(this.stocks)
        console.log(this.buyers)
    }

    changeQuantity(data) {
        this.stocks.forEach((objData) => { if(objData.nameOfStock == data.nameOfStock) { 
            objData.quantity = objData.quantity - data.quantity
        } })
    }

}

export default StockStore;