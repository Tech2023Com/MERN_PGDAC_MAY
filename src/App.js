import Navbar from "./Layout/Navbar";
import MainRouting from "./Routers/Toggle-Route";


import store from "./Store/Store";

import {Provider} from 'react-redux'


function App() {

  store.subscribe(()=>{
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()))
  })
  
  return (
    <div >
      <Provider  store={store} >
      <MainRouting/>

      </Provider>
    </div>
  );
}

export default App;
