
import './App.css';
import StoreOne  from './Stores/storeOne';
import Mobx from './Components/mobx'
import CounterMakeObservable from '../src/Stores/makeObservable_Store'
import CountMakeObservable from '../src/Components/makeObservableCount'
import CountWithAutoObservabel from '../src/Components/makeAutoObservableCount'
import MakeAutoObservableStore from '../src/Stores/makeAutoObservable_Store'
import { makeAutoObservable } from 'mobx';


function App() {
  // const store = new StoreOne()
  // const makeObservableStore = new CounterMakeObservable()
  const makeAutoObservableStore = new MakeAutoObservableStore()

  return (
  //  <Mobx store = {store} />
  // <CountMakeObservable  store = {makeObservableStore} />
 < CountWithAutoObservabel  store = {makeAutoObservableStore} />
  );
}

export default App;
