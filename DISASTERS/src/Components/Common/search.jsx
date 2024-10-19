import React from 'react'

export const Search = () => {
  return (
    <div className='bg-white h-8 rounded-md md:flex hidden'>
         <div className='pr-1 pl-1 mt-1.5'>
         <ion-icon name="search-outline"></ion-icon>
         </div>
        <input className='outline-none rounded-md w-48 h-8 text-xs' type="search"  placeholder='Search incident' />
    </div>
  )
}
export const StorBy = () => {
  return (
    <div className='text-xs p-2 bg-white text-gray-500 h-8 rounded-md md:flex hidden'>
        <h3>Sort By: Date modified</h3>
    </div>
  )
}
