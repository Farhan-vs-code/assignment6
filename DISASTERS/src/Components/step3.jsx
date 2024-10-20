import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Step3 = () => {
  const Navigate = useNavigate()
  const handelClick = ()=> {
      Navigate("/Step4")
  }
  return (
    <>
      <div className='bg-zinc200 flex md:justify-around items-center md:p-2 md:mt-[78px] mt-16'>
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
       <button onClick={handelClick} className='py-2 px-6 bg-[#F26922] text-xs text-white rounded-md'>Next step</button>
      </div>
    </div>

         <div className='mt-10 lg:mx-[600px] md:mx-auto md:container mx-3'>
          <div>
           <h1 className='text-2xl font-bold'>Let’s give the incident a title?</h1>
           <p className='text-sm text-zinc mt-2 mb-2'>Make a title that will easily identify the incidents</p>
            <input type="text"  placeholder='Add title here' className='md:w-[752px] md:h-12 w-72 bg-zinc100 text-xs text-zinc outline-none p-2 mb-3'/>
            </div>
          <div>
           <h1 className='text-2xl font-bold'>Describe what happened during the incident?</h1>
           <p className='text-sm text-zinc mt-2 mb-2'>Share some information about the incident. The when, where, how.</p>
            <textarea name="" placeholder='Type here' className='md:w-[752px] w-72 h-32 bg-zinc100 text-xs text-zinc outline-none p-2 mt-2'></textarea>
            
            </div>
         </div>

    </>
  )
}
