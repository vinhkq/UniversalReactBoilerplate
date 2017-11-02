
import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'
import reducer from '../common/rootReducer'
import saga from '../common/rootSaga'
import Layout from '../common/layout/Layout'

const sagaMiddleware = createSagaMiddleware()

const initStore = (initialState = {}) => {
  const buildStore = () => {
    const store = createStore(
      combineReducers({ reducer }),
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
    store.sagaTask = sagaMiddleware.run(saga)
    return store
  }
  return buildStore
}

const configureStore = (Page) => (
  withRedux(initStore())(Layout(Page))
)

export default configureStore
