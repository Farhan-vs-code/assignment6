import React from 'react'
import { Button } from './Common/button'
import { Card2 } from './Common/card2'

export const Step2 = () => {
  return (
    <>
    <div className='bg-zinc200 flex md:justify-around items-center md:p-2'>
      <div className='flex md:gap-2 '>
        <div className='sm:flex hidden py-2'>
        <button className='bg-white py-2 px-4 rounded-[90%]'>x</button>
        </div>
        <div className='p-1'>
         <p className='text-zinc text-xs'>Home - Incidents - New Incident</p>
         <h1 className='font-bold md:text-2xl text-xl'>New Incident</h1>
      </div>
      </div>

      <div className='sm:flex hidden'>
        <img src="g-7.png" alt="" />
      </div>
      <div className='flex md:gap-2 gap-1'>
       <div> <button className='bg-white text-xs text-zinc px-6 py-2 rounded-md'>Back</button></div>
        <Button>Next step</Button>
      </div>
    </div>
    <div>
        <Card2/>
    </div>
    </>
  )
}
