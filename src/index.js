import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk'

import reducers from './reducers'
const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

// Init config
firebase.initializeApp({
  apiKey: 'AIzaSyDlYX-HWBAcWywKspDGshPHlU6x80uZhvk',
  authDomain: 'hacktiv8-tentarapelajar.firebaseapp.com',
  databaseURL: 'https://hacktiv8-tentarapelajar.firebaseio.com',
  projectId: 'hacktiv8-tentarapelajar',
  storageBucket: 'hacktiv8-tentarapelajar.appspot.com',
  messagingSenderId: '534014278856'
})

import App from './App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
