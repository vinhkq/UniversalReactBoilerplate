
import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'
import reducer from '../common/rootReducer'
import saga from '../common/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const initStore = (reducer, initialState) => {
  const buildStore = () => {
    const store = createStore(
      combineReducers({...reducer}),
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
    store.sagaTask = sagaMiddleware.run(saga)
    return store
  }
  return buildStore
}

const configureStore = ({ Page, reducer }) => (
  withRedux(
    initStore(reducer),
    null
  )(Page)
)

export default configureStore
