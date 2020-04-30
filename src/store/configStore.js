import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import allReducers from "../components/reducers/all.reducer";
// import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const initiaState = {};

const store = createStore(
    allReducers,
    initiaState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

// sagaMiddleware.run(mySaga);

export default store;