import React from 'react';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { fetchDevotionals } from './actions'
import rootReducer from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))
)

store
  .dispatch(fetchDevotionals())
  .then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();