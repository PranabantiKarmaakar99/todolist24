import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../redux/action";
import Tabs from "../components/tab";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../../redux/reducer/type';


import Todo from "./todos24.js";

const Todolist = () => {

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state)=>state.currentTab)
  



  useEffect(() => {
    dispatch(getAllTodos());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
        return todos;
    } else if (currentTab === ACTIVE_TODOS) {
        return todos.filter(todo => !todo.done)
    } else if (currentTab === DONE_TODOS) {
        return todos.filter(todo => todo.done)
    }
}



  return (
<div className=" flex flex-col justify-center items-center w-full h-full ">
<div className=" flex items-start justify-start ">
<Tabs currentTab={currentTab} />
</div>


  
    <div className=" flex  justify-center  lg:mb-2 lg:w-2/3 w-full h-full ">

      <div className="flex flex-col items-center mt-1 gap-1 md:h-96  lg:mb-0 mb-5 mx-3 w-[360px] lg:w-full pt-2 bg-gray-50 bg-opacity-50 rounded-md shadow-sm md:w-4/5">
     
        <div className=" flex flex-col items-center justify-center w-full  md:w-full gap-1">

          {getTodos().map((todo, index) => 
             (
              

              <Todo 
                 key={index}
                 todo={todo}
                 />
            )
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Todolist;
