import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducer/authreducer';
import studentReducer from './reducer/studentreducer';
import logger from 'redux-logger';

const RouteReducer = combineReducers({ authReducer, studentReducer})

function configureStore() {
    return createStore(RouteReducer, {}, applyMiddleware(thunk, logger));
}

const store = configureStore();
export default store;