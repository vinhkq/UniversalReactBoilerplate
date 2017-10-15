import { all, fork } from 'redux-saga/effects'
import { callAPI } from '../modules/home/HomeSaga'

export default function* rootSaga() {
  yield all([
    yield fork(callAPI)
  ])
}
