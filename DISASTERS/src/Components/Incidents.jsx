import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Search, StorBy } from './Common/search'
import { Button } from './Common/button'
import { Card } from './Common/card'
export const Incidents = () => {
  const Navigate = useNavigate()
  const handelClick = ()=> {
      Navigate("/Step1")
  }
  return (
    <>
       <div className='bg-zinc200 flex justify-around p-3 md:mt-[78px] mt-16'>
         <div>
          <h3 className='text-xs text-zinc mb-2'>Home - Incidents</h3>
          <h1 className='text-2xl font-bold'>Incidents</h1>
         </div>
         <div className='flex gap-3 mt-2'>
            <Search />
            <StorBy />
            <div>
            <button onClick={handelClick} className='py-2 px-6 bg-[#F26922] text-xs text-white rounded-md'>+ New Incident</button>
            </div>
         </div>
        
       </div>
       <Card/>
    </>
  )
}
