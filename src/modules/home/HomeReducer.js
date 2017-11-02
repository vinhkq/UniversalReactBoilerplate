import { handleActions } from 'redux-actions'
import {
  testAction
} from './HomeAction'

const defaultState = {
  test: '---'
}

const handlers = {
  [testAction]: (state, action) => {
    return ({...state,
      ...{ test: action.payload }
    });
  }
}

export default handleActions(handlers, defaultState)
