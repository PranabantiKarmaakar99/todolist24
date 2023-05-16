

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from '../reducer/type';



export const addNewTodo = (data) => async (dispatch) => {

    const res = await fetch('http://localhost:3000/api/test/add', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json'}
    });

    const data1 = await res.json()
    console.log(data1)

    dispatch({ type: ADDNEW_TODO , payload: data })

 
} 

