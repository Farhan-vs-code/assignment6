import React from 'react'

export const Card2 = () => {
    const Card = [
        {img:"s-1.png",text:"Avalanche"},
        {img:"s-2.png",text:"Biological"},
        {img:"s-3.png",text:"Blizzard"},
        {img:"s-4.png",text:"Cold/Freezing"},
        {img:"s-5.png",text:"Drought"},
        {img:"s-6.png",text:"Earthquake"},
        {img:"s-7.png",text:"Flooding"},
        {img:"s-8.png",text:"Heat Wave"},
        {img:"s-9.png",text:"Hail"},
        {img:"s-10.png",text:"Lightning"},
        {img:"s-11.png",text:"Strong Wind"},
        {img:"s-12.png",text:"Man Made"},
        {img:"s-13.png",text:"Mudslide"},
        {img:"s-14.png",text:"Severe Storm"},
        {img:"s-15.png",text:"Strong Wind"},
        {img:"s-16.png",text:"Tornado"},
        {img:"s-17.png",text:"Tsunami"},
        {img:"s-18.png",text:"Volcanic Eruption"},
    ]
  return (
    <div>
        <div>
          <h1 className='text-2xl font-bold text-center mt-12 mb-10'>Which of these best describes the incident?</h1>
       </div>
       <div className='flex flex-wrap justify-center gap-6  mx-[25%]'>
       {Card.map((card)=> (
         <div className=''>
         <button className='flex items-center justify-center text-sm bg-zinc100 text-zinc gap-2 p-3 w-[180px] h-16  mt-2 rounded-md'>
             <img src={card.img} alt="" />
             {card.text}
         </button>
        </div>
       ))}
       </div>
    </div>
  )
}
