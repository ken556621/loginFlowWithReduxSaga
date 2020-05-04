import { fork, take, cancel } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_CANCEL } from '../components/actions/Constants';
import { authorize, logInFlow, watchLogInRequest } from '../sagas/rootSaga';
import { createMockTask } from '@redux-saga/testing-utils';
import { assert } from 'chai';

describe("loginFlow", () => {
    const task = createMockTask();
    const iterator = logInFlow({
        type: LOGIN_REQUEST,
        userName: 'ken',
        password: '123456',
        redirect: undefined
    })
    
    it('should fork to authorize', () => {
        const expected = fork(authorize, {
            userName: 'ken',
            password: '123456',
            redirect: undefined
        })
        const actual = iterator.next().value
        assert.deepEqual(expected, actual)
    })
    
    it('should take cancel login action',  () => {
        const expected = take(LOGIN_CANCEL)
        const actual = iterator.next(task).value
        assert.deepEqual(expected, actual)            
    })
    it('should cancel the login task',  () => {
        const expected = cancel(task)
        const actual = iterator.next().value
        assert.deepEqual(expected, actual)            
    })
} )
