import { makeAutoObservable, onBecomeObserved, onBecomeUnobserved } from "mobx";

class LazyObservable {
    arr = []
    car = "hello"
    bike = "hellobike"
    constructor() {
        makeAutoObservable(this)
        onBecomeObserved(this, "car", this.startCar) // only when we use car observable startCar methods triggers and runs 
        onBecomeUnobserved(this,"bike", this.stopCar)

        //Functions onBecomeObserved and onBecomeUnobserved can be used to attach lazy behavior or side effects to existing observables. They are hooks into the observability system of MobX and get notified when the observables start and stop becoming observed. They both return a disposer function that detaches the listener.
    }

    startCar() {
        console.log("started car")
    }
    
    stopCar() {
        console.log("car stopped")
    }
}

export default LazyObservable