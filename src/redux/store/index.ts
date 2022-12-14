import {applyMiddleware, combineReducers, createStore } from 'redux';
import correctarium from '../reducers/correctarium';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    correctarium,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
