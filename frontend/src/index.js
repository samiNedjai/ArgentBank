import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import rootReucer from "./reducers/index"


const store = configureStore({
  reducer:rootReucer,
  devTools:true,

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


