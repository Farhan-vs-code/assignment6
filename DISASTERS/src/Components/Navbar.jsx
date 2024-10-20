import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const Links =[
      {name:"Dashboard",link:"/"},
      {name:"Incidents",link:"/Incidents"},
      {name:"Locations",link:"/Location"},
      {name:"Activities",link:"/Activities"},
      {name:"Documents",link:"/Documents"},
      {name:"Cypher AI",link:"/Cypher"},
    ];
    const [open,setOpen] = useState(false);
  return (
    <>
    <div className='w-full fixed top-0 left-0'>
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
              <Link to={link.link} className='md:text-zinc duration-500 text-sm'>{link.name}</Link>
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