
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
import FromPromise from './Mobx_Utils/FromPromise';
import FromPromiseComponent from './Mobx_Utils/FromPromiseComponent';
import FromPromiseStore from './Mobx_Utils/FromPromiseStore';
import React from 'react';
import LazyObservableComponent from './Mobx_Utils/LazyObservables/LazyObservableComponent';
import LazyObservableStore from '../src/Mobx_Utils/LazyObservables/LazyObservableStore.';
import FromResourceComponent from './Mobx_Utils/FromResources/fromResourceComponent';
import FromResourceStore from './Mobx_Utils/FromResources/fromResources';
import ViewModelComponent from './Mobx_Utils/ViewModel/ViewModelComponent';
import ViewModel from './Mobx_Utils/ViewModel/viewModelStore';
import {createViewModel} from 'mobx-utils'
import QueueProcessor from './Mobx_Utils/qeueProcessor';
import Observablegroupmap  from './Mobx_Utils/ObservableGroupMap';
import CreateTransformer from './Mobx_Utils/CreateTransformer/CreateTransformer';
import ArgumentComputed from './Computed_With_Arguments/ArgumentsComputed';
import ArgumentComputedCom from '../src/Computed_With_Arguments/ArgumnetComputedComp'
// import ComputedFunction from '../src/Computed_With_Arguments/computedFn'
// import CustomObservableStore from './CustomObservables/CustomObservableStore';
// import  CustomObservableComp from '../src/CustomObservables/CustomObservableComp'

function App() {
  // const store = new StoreOne()
  // const makeObservableStore = new CounterMakeObservable()
  // const makeAutoObservableStore = new MakeAutoObservableStore()
  // const actionStore = new ActionStore()
  // const compStore = new ComputedStore()
  // const reactionStore = new ReactionStore()
  // const whenStore = new WhenReactionStore()
  // const stockstore = new StockStore()
  // const fromPromiseStore = new FromPromiseStore()
  // const assests = fromPromiseStore.getAssests()
  // React.useEffect(()=> {
  // })
  // const lazyObservable = new LazyObservableStore()
  // const lazyObservableObject = lazyObservable.fetchData()
  // const fromResourceStore = new FromResourceStore()
  // let obj = {
  //   name : "Shravam"
  // }
  // const fromesourceObj = fromResourceStore.returnfromResource(obj)
  // const model = new ViewModel()
  // const argumentComputed = new ArgumentComputed()
  // const customStore = new CustomObservableStore()
  
 

  return (
    //  <Mobx store = {store} />
    // <CountMakeObservable  store = {makeObservableStore} />
    //  < CountWithAutoObservabel  store = {makeAutoObservableStore} />
    // <Assests store={actionStore} />
    // <Loan  store = {compStore}/>
    // <Reaction store = {reactionStore} />
    // <WhenReaction  store = {whenStore} />
    // <LocalObservable />
    // <Stock store = {stockstore} />
  //  <div> <FromPromise />
  //   <FromPromiseComponent  assests = {assests}/>
  //   </div>
  // <LazyObservableComponent lazyObservable = {lazyObservableObject}  />
  // <FromResourceComponent  fromResource = {fromesourceObj} />
  // <div></div>
  // <QueueProcessor />
  // <ViewModelComponent   actualModel = {model}  />
  // <Observablegroupmap />
    // <CreateTransformer />
    
    // <ArgumentComputedCom  store = {argumentComputed}/>
    <div>
      {/* <ComputedFunction /> */}
      {/* < CustomObservableComp store = {customStore} /> */}

    </div>
    
    );
}

export default App;
