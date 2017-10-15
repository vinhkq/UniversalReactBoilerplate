import { all, fork } from 'redux-saga/effects'
import HomeSaga from '../modules/home/HomeSaga'

export default function* rootSaga() {
    yield fork(HomeSaga)
}
