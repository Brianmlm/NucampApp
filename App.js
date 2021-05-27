import React from 'react'
import Main from './components/MainComponent'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore' //Creates, configures and returns the redux store
import { PersistGate } from 'redux-persist/es/integration/react'
import Loading from './components/LoadingComponent'

console.disableYellowBox = true //Disables Yellow error messages

const { persistor, store } = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
} //PersistGate prevents app from rendering until component has fully re-hydrated from the redux store
