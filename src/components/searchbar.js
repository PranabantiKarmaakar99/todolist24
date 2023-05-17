import React from 'react'

const searchbar = () => {
  return (
        <div className='flex w-full lg:w-2/3 items-center justify-center  mt-8 md:mt-36 lg:mt-20'>

    <input className=" rounded-full  focus:outline-pink-50  bg-white  bg-opacity-25 border-gray-200 text-left h-10 placeholder-white w-4/5 lg:w-full"  type="text" placeholder="Search" />


    </div>
  )
}

export default searchbar