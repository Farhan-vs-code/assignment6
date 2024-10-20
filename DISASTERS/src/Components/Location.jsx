import React from 'react'
import { Search, StorBy } from './Common/search'
import { Button } from './Common/button'

export const Location = () => {
  const card = [
    {
        image: "p-7.png",
        image2: "g-8.png",
        title: "Whitechapel Rd.",
        dec: "Tulare County,  Los Angles, CA 23415",
        price: "$1,456,654.00"
    },
    {
        image: "p-8.png",
        image2: "g-8.png",
        title: "Whitechapel Rd.",
        dec: "Tulare County,  Los Angles, CA 23415",
        price: "$1,456,654.00"
    },
    {
        image: "p-7.png",
        image2: "g-8.png",
        title: "Whitechapel Rd.",
        dec: "Tulare County,  Los Angles, CA 23415",
        price: "$1,456,654.00"
    },
    {
        image: "p-7.png",
        image2: "g-8.png",
        title: "Whitechapel Rd.",
        dec: "Tulare County,  Los Angles, CA 23415",
        price: "$1,456,654.00"
    },
]
  return (
    <section className='md:mt-[78px] mt-16'>
    <div className='bg-zinc200 flex justify-around p-3'>
          <div>
              <h3 className='text-xs text-zinc mb-2'>Incidents - DR-4699 March 2023 Severe Storms </h3>
              <h1 className='text-2xl font-bold'>DR-4699 March 2023 Severe Storms</h1>
          </div>
         <div className='flex gap-3 mt-2'>
            <Search />
            <StorBy />
            <Button>+ New Location</Button>
         </div>
       </div>

      <section class="container grid grid-cols-12 mx-auto mt-10">
        <div class="lg:col-span-6 col-span-12 md:ml-8 ml-5 mt-10">
          
            <div className='flex gap-2'>
              <img src="l-1.png" alt="" />
              <div>
                <h3 className='text-sm text-zinc mb-1'>Location</h3>
                <h1 className='lg:text-xl font-bold'>Tulare County, Los Angles, CA 23415</h1>
              </div>
            </div>
            <div className='flex gap-2 mt-8'>
              <img src="l-2.png" alt="" />
              <div>
                <h3 className='text-sm text-zinc mb-1'>Approx. Cost:</h3>
                <h1 className='lg:text-xl font-bold'>$60,607,456.00</h1>
              </div>
            </div>
            <div className='h-[1px] md:w-[680px] w-80 bg-zinc200 mt-10 mb-10'></div>
            <div>
              <h1 className='text-sm font-bold mb-1'>Description</h1>
              <p className='text-[16px] text-zinc'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <div className='h-[1px] md:w-[680px] w-80 bg-zinc200 mt-10 mb-10'></div>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {card.map((card)=> (
                <div className='m-2'>
                <div className='lg:relative'>
                             <img src={card.image} alt="" className='' />
                             <img src={card.image2} alt=""  className='lg:flex hidden absolute top-0 left-32 p-2'/>
                          </div>
                          <div className='p-1'>
                           <h1 className='font-bold'>{card.title}</h1>
                           <p className='text-sm text-zinc'>{card.dec}</p>
                           <h2 className='font-bold'>{card.price}</h2>
                          </div>
                  </div>
              ))

              }
            </section>
            <div className='h-[1px] md:w-[680px] w-80 bg-zinc200 mt-10 mb-10'></div>
            <div>
            <div className='flex justify-between'>
              <h3 className='text-sm font-bold'>Activities</h3>
              <a href="#" className='text-sm underline'>See all</a>
            </div>
            <div className='flex gap-3 md:w-[679px] w-80 p-3 bg-zinc100 rounded-[10px] mt-4 mb-4'>
              <img src="p-9.png" alt="" />
              <div>
                <h1 className='font-bold'>Activity name</h1>
                <p className='text-sm text-zinc mt-1 mb-1'>Location name . 16.12212, -122.1424</p>
                <h2 className='font-bold'>$1,456,654.00</h2>
              </div>
            </div>
            <div className='flex gap-3 md:w-[679px] w-80 p-3 bg-zinc100 rounded-[10px]'>
              <img src="p-9.png" alt="" />
              <div>
                <h1 className='font-bold'>Activity name</h1>
                <p className='text-sm text-zinc mt-1 mb-1'>Location name . 16.12212, -122.1424</p>
                <h2 className='font-bold'>$1,456,654.00</h2>
              </div>
            </div>
            </div>

            <div>
            <div className='flex justify-between mt-4'>
              <h3 className='text-sm font-bold'>Documents</h3>
              <a href="#" className='text-sm underline'>See all</a>
            </div>
            <div className='flex gap-3 md:w-[679px] w-80 p-3 bg-zinc100 rounded-[10px] mt-4 mb-4'>
              <img src="p-9.png" alt="" />
              <div>
                <h1 className='font-bold'>Document name</h1>
                <p className='text-sm text-zinc mt-1 mb-1'>Location name . 16.12212, -122.1424</p>
                <h2 className='font-bold'>$1,456,654.00</h2>
              </div>
            </div>
            <div className='flex gap-3 md:w-[679px] w-80 p-3 bg-zinc100 rounded-[10px]'>
              <img src="p-9.png" alt="" />
              <div>
                <h1 className='font-bold'>Document name</h1>
                <p className='text-sm text-zinc mt-1 mb-1'>Location name . 16.12212, -122.1424</p>
                <h2 className='font-bold'>$1,456,654.00</h2>
              </div>
            </div>
            </div>

          </div>
          


        <div class="lg:col-span-6 col-span-12 md:ml-48">
         <h3 className='text-zinc text-sm mb-5'>Incident Map</h3>
         <img src="map2.png" alt="" />
         <h3 className='text-zinc text-sm mt-5'>Start 19.1232, -118.233 End 19.3245, -119.2323</h3>
        </div>

      </section>
       
    </section>
  )
}
