import { makeAutoObservable } from "mobx";
import {lazyObservable} from 'mobx-utils'
import axios from 'axios'

class LazyObservable {
    constructor() {
        makeAutoObservable(this)
    }

    fetchData() {
        const assests = lazyObservable(sink => fetch('https://www.cryptingup.com/api/assets').then(resp => sink("hello")))
        return assests
    }
}
export default LazyObservable