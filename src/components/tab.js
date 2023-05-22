import React from 'react';

import {TABS} from "../../redux/reducer/type";
import { useDispatch } from "react-redux";
import {toggleTabs} from "../../redux/action/index";


const tab = ({currentTab}) => {
  const dispatch = useDispatch();

  return (
    <div  className='flex w-[360px] lg:w-full md:w-full items-start md:justify-start lg:justify-start md:ml-10 justify-start mt-2 mb-2 gap-2 lg:ml-3 '>
        {/* <button className='bg-white bg-opacity-25 shadow-sm p-2  text-white rounded-md hover:bg-opacity-50'> All Work</button>
        <button className='bg-white bg-opacity-25 shadow-sm p-2 text-white rounded-md hover:bg-opacity-50'> Active Work</button>
        <button className='bg-white bg-opacity-25 shadow-sm p-2 text-white rounded-md hover:bg-opacity-50'> Works Done</button> */}

        {TABS.map((tab,index)=>(
          
          
        <button 
        className='bg-white bg-opacity-25 shadow-sm p-2 text-sm text-white rounded-md hover:bg-opacity-50 a active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
        onClick={()=>(dispatch(toggleTabs(tab)))}
        key={index}

       
        >  
        <style jsx> {`.a {tab === currentTab ? 'button selected' : 'button'} ` }</style>
        
         {tab}</button> 
          
          
        ))}

    </div>
  )
}

export default tab