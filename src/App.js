
import './App.css';
import StoreOne from './Stores/storeOne';
import Mobx from './Components/mobx'
import CounterMakeObservable from '../src/Stores/makeObservable_Store'
import CountMakeObservable from '../src/Components/makeObservableCount'
import CountWithAutoObservabel from '../src/Components/makeAutoObservableCount'
import MakeAutoObservableStore from '../src/Stores/makeAutoObservable_Store'
import { makeAutoObservable } from 'mobx';
// import ActionStore from './Stores/Actions_Store';
// import Assests from '../src/Components/Actions'
import ComputedStore from '../src/Stores/Computed_Store'
import Loan from '../src/Components/Computed'

function App() {
  // const store = new StoreOne()
  // const makeObservableStore = new CounterMakeObservable()
  // const makeAutoObservableStore = new MakeAutoObservableStore()
  // const actionStore = new ActionStore()
  const compStore = new ComputedStore()

  return (
    //  <Mobx store = {store} />
    // <CountMakeObservable  store = {makeObservableStore} />
    //  < CountWithAutoObservabel  store = {makeAutoObservableStore} />
    // <Assests store={actionStore} />
    <Loan  store = {compStore}/>
  );
}

export default App;
