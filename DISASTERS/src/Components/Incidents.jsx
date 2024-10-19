import React from 'react'
import { Search, StorBy } from './Common/search'
import { Button } from './Common/button'
import { Card } from './Common/card'
export const Incidents = () => {
  return (
    <>
       <div className='bg-gray-200 flex justify-around p-3'>
         <div>
          <h3 className='text-xs text-gray-500 mb-2'>Home - Incidents</h3>
          <h1 className='text-2xl font-bold'>Incidents</h1>
         </div>
         <div className='flex gap-3 mt-2'>
            <Search />
            <StorBy />
            <Button>+ New Incident</Button>
         </div>
       </div>
       <Card/>
    </>
  )
}
