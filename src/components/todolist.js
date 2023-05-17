import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../redux/action";


import Todo from "./todos24.js";

const Todolist = () => {

  const dispatch = useDispatch();

  const FirstSelector = useSelector((state) => state.todos);



  useEffect(() => {
    dispatch(getAllTodos());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);



  return (
    <div className=" flex  justify-center  lg:mb-2 lg:w-2/3 w-full h-full ">
      <div className="flex flex-col items-center mt-1 gap-1 md:h-96  lg:mb-0 mb-5 mx-3 w-[360px] lg:w-full pt-2 bg-gray-50 bg-opacity-50 rounded-md shadow-sm md:w-4/5">
        <div className=" flex flex-col items-center justify-center w-full  md:w-full gap-1">
          {FirstSelector.map((todo, index) => 
             (
              /* <button className="bg-teal-100 shadow-md p-2 h-10 text-start text-gray-400 rounded-md md:w-full md:mx-3 mr-2 ml-2 w-full  hover:bg-teal-200 relative ">
                <div className="flex items-center w-full">
                  <div>
                    <div
                      className="px-2"
                      onClick={() => dispatch(toggleTodos(el._id))}
                      style={{
                        textDecoration: el?.done ? "line-through" : "",
                        color: el?.done ? "#bdc3c7" : "#34495e",
                        display: editing ? "none" : "",
                      }}

                      // data-testid="todo-test"
                      // key={el.index}
                    >
                      {/* {el.data} */
                           /* <Todo 
                 key={index}
                 todo2={el}
                 /> */
                      /* <form
                        style={{ display: editing ? "inline" : "none" }}
                        onSubmit={(e) => {
                          e.preventDefault();

                          setEditing((prevState) => !prevState);

                          dispatch(updateTodos(el._id, text));
                        }}
                      >
                        <input
                          type="text"
                          value={text}
                          className="edit-todo"
                          onChange={(e) => setText(e.target.value)}
                        />
                      </form>

                 
                    </div>
                  </div>
                  <div className="flex gap-1 pl-[200px] md:pl-[475px] lg:pl-[740px]  absolute right-2">
                    <div
                      className="mr-2 float-right"
                      onClick={() => setEditing((prevState) => !prevState)}
                    >
                      {" "}
                      <BiEditAlt />{" "}
                    </div>

                    <div
                      className="mr-2 float-right"
                      onClick={() => dispatch(removeTodos(el._id))}
                    >
                      {" "}
                      <AiOutlineDelete />{" "}
                    </div>
                  </div>
                </div>
              </button> */


              <Todo 
                 key={index}
                 todo={todo}
                 />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
