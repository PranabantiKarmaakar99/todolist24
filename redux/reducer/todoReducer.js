import React from 'react';
import * as actionTypes from "./type";


 const initialState=[];

export const todoReducer = (state = initialState,action) => {


    switch(action.type) {
        case actionTypes.ADDNEW_TODO:
            return[action.payload,...state]

        default:
        return state;
    }

}

// export default todoReducer;

// import * as actionTypes from './type';


// const initialState = [];


// export const todosReducers = (state = { items: [] }, action) => {

//     switch (action.type) {
//         case actionTypes.ADDNEW_TODO:
//             return { list: [...state.items, action.payload] };
//         // case actionTypes.GETALL_TODO:
//         //     return action.payload
//         // case actionTypes.TOGGLE_TODO:
//         //     return state.map(todo => (
//         //         todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
//         //     ))
//         // case actionTypes.UPDATE_TODO:
//         //     return state.map(todo => (
//         //         todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
//         //     ))
//         // case actionTypes.DELETE_TODO:
//         //     return state.filter(todo => todo._id !== action.payload._id);
        
//         default: 
//             return state;
//     }
// }