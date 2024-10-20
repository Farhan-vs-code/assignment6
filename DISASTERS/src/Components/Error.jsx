import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
    let Navigate = useNavigate()
    const handelClick = ()=> {
        Navigate("/")
    }
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-center text-zinc text-3xl font-bold mt-96'>This page is not defined please back home</h1>
        <button onClick={handelClick} className='btn bg-zinc text-white py-2 rounded-md w-40 mt-4'>Back Home</button>
    </div>
  )
}
