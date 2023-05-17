import React from 'react';
import * as actionTypes from "./type";


//  const initialState=[];

export const todoReducer = (state =[],action) => {


    switch(action.type) {
        case actionTypes.ADDNEW_TODO:
            return[action.payload,...state]

            case actionTypes.GETALL_TODO:
            return action.payload

            case actionTypes.TOGGLE_TODO:
            return state.map(todo=>{

                
                
                // todo._id===action.payload._id?{...todo,done:!todo.done}:todo
                return todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
                // todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo

                
                
            
            
            
            })

            case actionTypes.UPDATE_TODO:
       

                
                
            return state.map(todo=>(

                
                
               
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo

                
                
            ))
            
            
             case actionTypes.DELETE_TODO:
       

                
                
                return state.filter(todo => todo._id !== action.payload._id)

                
                
            
            
            
            
 

            // console.log(state)


        default:
        return state;
    }

}

