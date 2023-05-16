

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from '../reducer/type';



// export const addNewTodo = (data) => async (dispatch) => {

//     const res = await fetch('/api/test/add', {
//       method: 'POST',
//       body: JSON.stringify({ data }),
//       headers: {
//         'Content-Type': 'application/json'}
//     });

//     const data1 = await res.json()
//     console.log(data1)

//     dispatch({ type: ADDNEW_TODO , payload: data })

 
// } 


export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await fetch('/api/test/add', {
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

    dispatch({ type: ADDNEW_TODO, payload: data });
  } catch (error) {
    console.error(error);
  }
};

