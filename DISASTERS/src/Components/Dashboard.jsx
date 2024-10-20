import React, { useState } from 'react';
import { Search, StorBy } from './Common/search'
import { Button } from './Common/button'
import { Card } from './Common/card'

export const Dashboard = () => {
const [isImageVisible, setIsImageVisible] = useState(false);

const toggleImage = () => {
  setIsImageVisible(!isImageVisible);
};
  return (
    <div className='md:mt-[78px] mt-16'>
       <div className='bg-zinc200 flex justify-around p-3'>
         <div>
          <h3 className='text-xs text-zinc mb-2'>Welcome back</h3>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
         </div>
         <div className='flex gap-3 mt-2'>
            <Search />
            <StorBy />
            <Button>Cypher AI</Button>
         </div>
       </div>
       <Card/>
       <div className="flex flex-col items-center ml-[80%] p-6 space-y-4">
  
      {isImageVisible && (
        <img src="g-2.png" alt="" className="object-cover rounded-lg shadow" />
      )}

      <button onClick={toggleImage} className="px-6 py-2 bg-[#F26922] text-white font-semibold rounded-lg">
        {isImageVisible ? 'X' : 'C'}
      </button>
    </div>
    </div>
  )
}
