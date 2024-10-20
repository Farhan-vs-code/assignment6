import React, { useState } from 'react'

const Navbar = () => {
    const Links =[
      {name:"Dashboard",link:"/"},
      {name:"Incidents",link:"/"},
      {name:"Locations",link:"/"},
      {name:"Activities",link:"/"},
      {name:"Documents",link:"/"},
      {name:"Cypher AI",link:"/"},
    ];
    const [open,setOpen] = useState(false);
  return (
    <>
    <div className='w-full'>
      <div className='md:flex items-center justify-between bg-zinc200 py-4 md:px-10 px-7'>
      <div>
        <img src="/logo.png" alt="" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' >
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-zinc200 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=> (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-2'>
              <a href={link.link} className='text-zinc duration-500 text-sm'>{link.name}</a>
            </li>
          ))
        }
       
      </ul>
      <div className='md:flex hidden gap-2'>
        <img src="/n-1.png" alt="" />
        <img src="/h-1.png" alt="" />
        <div className='text-zinc'>
            <h3>Usman Zafar</h3>
            <h4 className='text-sm'>usmanzafar@gmail.com</h4>
        </div>
      </div>
      </div>
      <div className='w-full h-[1px] bg-gray-700'></div>
    </div>
   
    </>
  )
}

export default Navbar