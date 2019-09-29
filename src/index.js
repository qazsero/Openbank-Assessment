import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import {IntlProvider} from 'react-intl'
import text_en from './locale/en.json'
import text_es from './locale/es.json'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

import App from './pages/App'
import reducers from './reducers'

//Application css import
import './assets/styles/base.scss'

const messages = {
  en: text_en,
  es: text_es
}
const usersLocale = navigator.language.split(/[-_]/)[0]

const middleware = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

ReactDOM.render(
  <Provider  store={createStoreWithMiddleware(reducers)}>
    <IntlProvider messages={text_es} locale={usersLocale} key={usersLocale} defaultLocale='es'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
