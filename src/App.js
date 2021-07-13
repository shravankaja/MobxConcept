
import './App.css';
import StoreOne  from './Stores/storeOne';
import Mobx from './Components/mobx'


function App() {
  const store = new StoreOne()

  return (
   <Mobx store = {store} />
  );
}

export default App;
