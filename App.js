import React from 'react'
import Main from './components/MainComponent'
import { Provider } from 'react-redux' 
import { ConfigureStore } from './redux/configureStore' //Creates, configures and returns the redux store
console.disableYellowBox = true //Disables Yellow error messages

const store = ConfigureStore(); 

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
    
  )
}


