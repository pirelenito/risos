import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import store from './store'
import App from './App'
import keyboardEffect from './keyboardEffect'
import resizeEffect from './resizeEffect'
import smoothScroll from 'smoothscroll-polyfill'
import './style.css'

smoothScroll.polyfill()
keyboardEffect(store)
resizeEffect(store)

window.store = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
