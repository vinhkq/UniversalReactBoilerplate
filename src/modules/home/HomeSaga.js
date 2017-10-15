import { call, put, take, fork } from 'redux-saga/effects'
import { testAction } from './HomeAction'

function helloSaga() {
  return {data: 'hello Saga!'}
}

function* callAPI() {
  while(true) {
    yield take('TEST');
    const { data } = yield call(helloSaga);
    yield put(testAction(data));
    
  }
}


export default function* HomeSaga() {
  yield fork(callAPI)
}