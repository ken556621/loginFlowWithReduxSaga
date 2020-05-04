import { take, takeLatest, all, put, call, fork, cancel } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_USER, LOGIN_ERROR, LOGIN_CANCEL } from '../components/actions/Constants';

async function loginAPI(){
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Finish checking")
        }, 4000)
    })
    const response = await fetchData;
    return response;
}

function* authorize({userName, password, redirect}){
    try {
        yield call(loginAPI)
        yield put({ type: LOGIN_SUCCESS });
        yield put({ type: UPDATE_USER, userName, password });
        yield call(function(){ 
            redirect() 
        }); 
    } catch (error) {
        yield put({ type: LOGIN_ERROR })
    }
}

function* logInFlow(action){
    try {
        const task = yield fork(authorize, { 
            userName: action.userName,
            password: action.password,
            redirect: action.redirect 
        }); 
        yield take(LOGIN_CANCEL);
        yield cancel(task);
    }catch(error) {
        yield put({ type: LOGIN_ERROR });
    }
}

function* watchLogInRequest(){
    yield takeLatest(LOGIN_REQUEST, logInFlow)
}

export default function* rootSaga() {
    yield all([
        watchLogInRequest()
    ])
}