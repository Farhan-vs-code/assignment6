import React from 'react'
import { Button } from './Common/button'
export const Step4 = () => {
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
        <Button>Finished</Button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center gap-3 mt-12'>
        <div>
        <h1 className='text-2xl font-bold mb-3'>Where’s the incident?</h1>
        <p className='text-sm text-zinc'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
        </div>
        <img src="map1.png" alt="" />
    </div>
    </>
  )
}
