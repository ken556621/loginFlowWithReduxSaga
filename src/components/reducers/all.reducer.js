import { combineReducers } from 'redux';
import loginReducer from './login.reducer';

const allReducers = combineReducers({
    user: loginReducer
})

export default allReducers;