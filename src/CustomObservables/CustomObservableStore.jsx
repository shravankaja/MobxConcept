import { createAtom, autorun } from "mobx"


class CustomObservableStore {
    atom
    arr = []
    constructor() {
         // Creates an atom to interact with the MobX core algorithm.
        this.atom = createAtom(
            // 1st parameter:
            // - Atom's name, for debugging purposes.
            "Custom",
             // 2nd (optional) parameter:
            // - Callback for when this atom transitions from unobserved to observed.
            () => this.sendData() ,
            // 3rd (optional) parameter:
            // - Callback for when this atom transitions from observed to unobserved.
             () =>this.stopSendingData())
    }

    sendData() {
        this.arr.push("hellos")
        this.atom.reportChanged()  // Let MobX know that this data source has changed.
    }

    getData() {
        return this.arr
    }

    stopSendingData () {
        console.log("observing stopped")
    }

     getOnlyOnReactionOnArray() {
       // reportObserved will return true if the atom is currently being observed
        // by some reaction. If needed, it will also trigger the startTicking
        // onBecomeObserved event handler.
        if(this.atom.reportObserved()) {
            
            return this.arr
        }
    }

}
export default CustomObservableStore