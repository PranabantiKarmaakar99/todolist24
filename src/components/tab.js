import React from 'react'

const tab = () => {
  return (
    <div  className='flex w-[360px] lg:w-2/3 md:w-4/5 items-center md:justify-start lg:justify-start md:ml-10 justify-start mt-2 mb-2 gap-2 lg:ml-3 '>
        <button className='bg-white bg-opacity-25 shadow-sm p-2  text-white rounded-md hover:bg-opacity-50'> All Work</button>
        <button className='bg-white bg-opacity-25 shadow-sm p-2 text-white rounded-md hover:bg-opacity-50'> Active Work</button>
        <button className='bg-white bg-opacity-25 shadow-sm p-2 text-white rounded-md hover:bg-opacity-50'> Works Done</button>

    </div>
  )
}

export default tab