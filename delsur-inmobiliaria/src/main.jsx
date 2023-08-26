import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/App.css"
import { ChakraProvider } from '@chakra-ui/react'
import { persistor, store } from '../src/redux/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </PersistGate>
</Provider>
)
