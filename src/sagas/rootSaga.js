import { all } from 'redux-saga/effects';
import { watchLogInRequest } from './loginSaga';

export default function* rootSaga() {
    yield all([
        watchLogInRequest()
    ])
}