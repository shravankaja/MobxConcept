import {makeObservable, observable} from 'mobx'


class StoreOne {

    count = 14 // this is an observable with its inital state and can be an array or an
    // object 

    constructor() {
        makeObservable(this, {count : observable})
    }

    setCount = () => {
        this.count = this.count+1
    }

}

export default StoreOne