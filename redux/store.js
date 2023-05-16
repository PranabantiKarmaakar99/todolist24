// import {createStore,combineReducers, applyMiddleware} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import todosReducers from './reducer/todoReducer';



// const middleware =[thunk]




// const store = createStore(

//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware)),
// )

// export default store;

// import { createStore,combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

// import todosReducers from './reducer/todoReducer';

// // initial states here
// const initalState = {};

// // middleware
// const middleware = [thunk];

// const reducer = combineReducers(
// {

//     todos:todosReducers
// });

// // creating store
// export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// // assigning store to next wrapper
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);


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



