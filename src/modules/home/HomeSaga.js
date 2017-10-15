import { call, put, take } from 'redux-saga/effects'
import { testAction } from './HomeAction'

function helloSaga() {
  return {data: 'hello Saga!'}
}

export function* callAPI() {
  while(true) {
    yield take('TEST');
    const { data } = yield call(helloSaga);
    yield put(testAction(data));
    
  }
}
