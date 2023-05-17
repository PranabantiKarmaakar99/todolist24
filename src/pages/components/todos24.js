
import React, { useEffect,useState } from 'react';
import {AiOutlineDelete  } from 'react-icons/ai';
import {RxCross1  } from 'react-icons/rx';
import { BiEditAlt } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux';
// import { toggleTodos } from '../../../redux/action';
import { toggleTodos, removeTodos, updateTodos } from "../../../redux/action";

const Todos = ({todo}) => {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data)
    const dispatch = useDispatch();

    console.log(todo?.data)

    // const todos = useSelector (state=>state.todos)
  
//   useEffect(()=>{
  
//    dispatch(getAllTodos());
  
//   },[])


const onFormSubmit = (e) => {
  e.preventDefault();

  setEditing(prevState => !prevState);

  dispatch(updateTodos(todo._id, text))
}



  return (
  //  <div 
  //  onClick={ToggleTodos}
            // style={{
            //     textDecoration: todo?.done ? 'line-through' : '',
            //     color: todo?.done ? '#bdc3c7' : '#34495e'}}

            //     data-testid="todo-test"
   
   
  // {/* {todo.data}
   
  //  </div> */}
  <button className="bg-teal-100 shadow-md p-2 h-10 text-start text-gray-400 rounded-md md:w-full md:mx-3 mr-2 ml-2 w-full  hover:bg-teal-200 relative ">
                <div className="flex items-center w-full">
                  <div>
                    <div
                      className="px-2"
                      onClick={() => dispatch(toggleTodos(todo._id))}
                      style={{
                        textDecoration: todo?.done ? "line-through" : "",
                        color: todo?.done ? "#bdc3c7" : "#34495e"
                  

                        }}
                       
                    >
                       <div       style={{ display: editing ? "none" : ""
                      }}>{todo.data} </div>
              
                       <form
                        style={{ display: editing  ? "inline" : "none" }}
                        onSubmit={onFormSubmit
                      
                        }
                      >
                        <input
                          type="text"
                          value={text}
                          className="edit-todo"
                          onChange={(e) => {
                            
                            
                            console.log(e.target.value)
                            setText(e.target.value)
                          
                          
                          
                          }}
                        />
                      </form>

                 
                    </div>
                  </div>
                  <div className="flex gap-1 pl-[200px] md:pl-[475px] lg:pl-[740px]  absolute right-2">
                    <div
                      className="mr-2 float-right"
                      onClick={() => setEditing((prevState) => !prevState)}
                    >
                     
                      <BiEditAlt />
                    </div>

                    <div
                      className="mr-2 float-right"
                      onClick={() => dispatch(removeTodos(todo._id))}
                    >
                      {" "}
                      <AiOutlineDelete />{" "}
                    </div>
                  </div>
                </div>
              </button> 


  )
}

export default Todos


