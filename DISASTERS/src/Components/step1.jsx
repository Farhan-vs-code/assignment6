import React from 'react'
import { Button } from './Common/button';
export const Step1 = () => {
    const card2 = [
        {
            image: "g-4.png",
            title: "What type of incident?",
            dec: "Choose the category that best describes the incident."
        },
        {
            image: "g-5.png",
            title: "What type of incident?",
            dec: "Choose the category that best describes the incident."
        },
        {
            image: "g-6.png",
            title: "What type of incident?",
            dec: "Choose the category that best describes the incident."
        },
    ]
  return (
    <>
       <div className='mt-12 flex flex-col gap-5'>
        <h1 className='text-4xl font-bold text-center'>Let’s get started</h1>
        <p className='text-[16px] text-center text-gray-500'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum<br/>
             dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
             <img src="g-3.png" alt="" className='container mx-auto w-[598px]' />
       </div>
        <div className='container mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-8 lg:mx-96'>
        {card2.map((card)=> (
            <div className='m-2'>
            <div className='h-52 w-[200px] bg-gray-200 p-2 rounded-md'>
              <img src={card.image} alt="" />
               <h1 className='text-xl font-bold mt-2.5 mb-2.5'>{card.title}</h1>
               <p className='text-sm text-gray-500'>{card.dec}</p>
               </div>
          </div>
        ))}
        </div>
        <div className='md:mt-20 mt-5 mb-5 flex justify-center'>
            <Button>Get started</Button>
        </div>
    </>
  )
}
