import { takeLatest, all, put, call } from 'redux-saga/effects';
import { LOGIN_SUCCESS, UPDATE_USER, LOGIN_ERROR } from '../components/actions/Constants';

async function loginAPI(){
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Finish checking")
        }, 4000)
    })
    const response = await fetchData;
    return response;
}

function* logInFlow(action){
    try {
        yield call(loginAPI);
        yield put({ type: UPDATE_USER, userName: action.userName, password: action.password });
        yield put({ type: LOGIN_SUCCESS });
        yield call(function(){ action.redirect() });
    }catch(error) {
        yield put({ type: LOGIN_ERROR });
    }
}

function* watchLogInRequest(){
    yield takeLatest('LOGIN_REQUEST', logInFlow)
}

export default function* rootSaga() {
    yield all([
        watchLogInRequest()
    ])
}