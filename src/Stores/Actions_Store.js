import { action, makeAutoObservable, runInAction } from "mobx";


class ActionStore {
    data = []
    status = "loading"
    statusGivenByRunInAction = "loading"

    constructor() {
        makeAutoObservable(this)
    }

    getAssestsData () {
        fetch('https://www.cryptingup.com/api/assets').then(
       
        action(resp => {  // every step (tick) that updates observables in an asynchronous process should be marked as action.
            console.log(resp)
            if(resp.status == 200) {
                this.status = "loaded"
            }
        })          )
    }

   async  useRunInAction () {
        const data = await fetch('https://www.cryptingup.com/api/assets')
       runInAction(() => { // it is always safe to update observables in runinaction in case of await since steps are not on same tick or to group 
        // them logically
           this.statusGivenByRunInAction = "done loading"
       })
    }

}

export default ActionStore;