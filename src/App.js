
import './App.css';
import StoreOne from './Stores/storeOne';
import Mobx from './Components/mobx'
import CounterMakeObservable from '../src/Stores/makeObservable_Store'
import CountMakeObservable from '../src/Components/makeObservableCount'
import CountWithAutoObservabel from '../src/Components/makeAutoObservableCount'
import MakeAutoObservableStore from '../src/Stores/makeAutoObservable_Store'
import { makeAutoObservable, when } from 'mobx';
// import ActionStore from './Stores/Actions_Store';
// import Assests from '../src/Components/Actions'
import ComputedStore from '../src/Stores/Computed_Store'
import Loan from '../src/Components/Computed'
import Reaction from '../src/Components/Reactions'
import ReactionStore from '../src/Stores/Reactions_Store'
import WhenReaction from './Components/When_Reaction';
import WhenReactionStore from './Stores/When_Store'
import LocalObservable from '../src/Components/LocalObservable'
import StockStore from '../src/StoreMangement/StockStore'
import Stock from '../src/StoreMangement/stock'
import stock from '../src/StoreMangement/stock';

function App() {
  // const store = new StoreOne()
  // const makeObservableStore = new CounterMakeObservable()
  // const makeAutoObservableStore = new MakeAutoObservableStore()
  // const actionStore = new ActionStore()
  // const compStore = new ComputedStore()
  // const reactionStore = new ReactionStore()
  // const whenStore = new WhenReactionStore()
  const stockstore = new StockStore()
  return (
    //  <Mobx store = {store} />
    // <CountMakeObservable  store = {makeObservableStore} />
    //  < CountWithAutoObservabel  store = {makeAutoObservableStore} />
    // <Assests store={actionStore} />
    // <Loan  store = {compStore}/>
    // <Reaction store = {reactionStore} />
    // <WhenReaction  store = {whenStore} />
    // <LocalObservable />
    <Stock store = {stockstore} />
  );
}

export default App;
