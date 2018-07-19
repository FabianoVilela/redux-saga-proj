import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers/index'
import sagas from './sagas/index'

import Info from './Info'
import UserAgente from './UserAgent'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Info />
          <br />
          <UserAgente />
        </div>
      </Provider>
    )
  }
}

export default App
