import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../../redux/action/index';

const inputbox = () => {

//   const formReducer= (state,event)=>{
//     return{
//    ...state,
//    [event.target.name] :event.target.value
//     }
// }

  const [text, setText] = useState("");

  const dispatch = useDispatch();
 

  const onFormSubmit =(e)=>{
    
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText('');
   
    }

  

  function onInputChange(e) {

    console.log(e.target.value)

    setText(e.target.value);






  }


  return (
    <form className='flex w-full  lg:w-2/3 items-center justify-center  bg-opacity-50 mb-5 mt-36 md:mt-80 md:mb-32 lg:mt-28 lg:mb-10 gap-1' onSubmit={onFormSubmit} >

        <input className=" border rounded-md  focus:outline-none  bg-white bg-opacity-0 placeholder-opacity-50 border-white text-left w-[300px] lg:w-4/5 md:w-2/3  md:outline-white h-8 text-white  placeholder-white"  type="text" placeholder="Work to be done"  value={text} onChange={onInputChange}  />
        <button className="rounded-full bg-white p-2  text-center"  >+</button>


        </form>
  )
}

export default inputbox


