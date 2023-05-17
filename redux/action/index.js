

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from '../reducer/type';








export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await fetch('/api/test/Addtodos', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error('Failed to add new todo');
    }

    const data1 = await res.json();
    console.log(data1);

    
    dispatch({ type: ADDNEW_TODO, payload: data1 });
  } catch (error) {
    console.error(error);
  }
};


export const getAllTodos = () => async (dispatch) => {
  try {
    const res2 = await fetch('/api/test/getAllTodos')
      
    

    if (!res2.ok) {
      throw new Error('Failed to get all todos');
    }

    const data2 = await res2.json();
    console.log(data2);

   dispatch({ type: GETALL_TODO, payload: data2 });

  } catch (error) {
    console.error(error);
  }
};

export const toggleTodos = (_id) => async (dispatch) => {
  try {
    const res2 = await fetch(`/api/test/toggleTodos/?id=` + _id )
    
      
    

    if (!res2.ok) {
      throw new Error('Failed to toggled todo');
    }
    // console.log(res2.data)
    const data3 = await res2.json();
    console.log(data3)
    console.log(data3._id);

    dispatch({ type:TOGGLE_TODO, payload:data3 });

  } catch (error) {
    console.error(error);
  }
};


export const updateTodos = (_id,data) => async (dispatch) => {
  try {
    const res2 = await fetch(`/api/test/UpdateTodos/?id=` + _id ,{
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
      
    

    if (!res2.ok) {
      throw new Error('Failed to update todo');
    }
    // console.log(res2.data)
    const data3 = await res2.json();
   

    dispatch({ type:UPDATE_TODO, payload:data3 });

  } catch (error) {
    console.error(error);
  }
};


export const removeTodos = (_id) => async (dispatch) => {
  try {
    const res2 = await fetch(`/api/test/removeTodos/?id=` + _id )
      
    

    if (!res2.ok) {
      throw new Error('Failed to remove todo');
    }
    // console.log(res2.data)
    const data3 = await res2.json();
   

    dispatch({ type:DELETE_TODO, payload:data3 });

  } catch (error) {
    console.error(error);
  }
};

