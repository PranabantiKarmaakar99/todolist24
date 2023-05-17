

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";

import { todoReducer } from './reducer/todoReducer';
// import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos: todoReducer
    // currentTab: tabReducer
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// export default store;



