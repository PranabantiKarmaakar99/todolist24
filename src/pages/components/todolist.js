import React from 'react';
import {AiOutlineDelete  } from 'react-icons/ai';
import {RxCross1  } from 'react-icons/rx';



const todolist = () => {
  return (
 
    <div className=" flex  justify-center  lg:mb-2 lg:w-2/3 w-full h-full ">
    <div className='flex flex-col items-center mt-1 gap-1 md:h-96  lg:mb-0 mb-5 mx-3 w-[360px] lg:w-full pt-2 bg-gray-50 bg-opacity-50 rounded-md shadow-sm md:w-4/5'>
       <div className=" flex items-center justify-center w-full  md:w-full" >
         <button className='bg-teal-100 shadow-md p-2 h-10 text-start text-gray-400 rounded-md md:w-full md:mx-3 mr-2 ml-2 w-full  hover:bg-teal-200 '>
            <div className='flex items-center'>
            <div className='px-2' >Display List</div>  
            <div className='flex gap-1 pl-[180px] md:pl-[475px] lg:pl-[740px]'>   
             <div > <AiOutlineDelete /> </div> 
            <div > <RxCross1 /> </div>  
            
            </div>
            </div>
          </button>
          





          </div> 
          
          
        
      
    </div>
    </div>
  
  )
}

export default todolist;