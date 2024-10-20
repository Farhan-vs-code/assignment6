import React from 'react'

export const Card = () => {
    const card = [
        {
            image: "p-1.png",
            image2: "g-1.png",
            title: "Whitechapel Rd.",
            dec: "Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00"
        },
        {
            image: "p-2.png",
            image2: "g-1.png",
            title: "Whitechapel Rd.",
            dec: "Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00"
        },
        {
            image: "p-3.png",
            image2: "g-1.png",
            title: "Tulare County",
            dec: "Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00"
        },
        {
            image: "p-4.png",
            image2: "g-1.png",
            title: "Tulare County",
            dec: "Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00"
        },
        {
            image: "p-5.png",
            image2: "g-1.png",
            title: "Tulare County",
            dec: "Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00"
        },
        {
            image: "p-6.png",
            image2: "g-1.png",
            title: "Tulare County",
            dec: "Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00"
        },
    ]
  return (
    <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-8'>
       {card.map((card) => (
        <div className='m-2'>
        <div className='lg:relative'>
                     <img src={card.image} alt="" className='' />
                     <img src={card.image2} alt=""  className='lg:flex hidden absolute top-0 left-48 p-2'/>
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
  )
}
