import { useState } from 'react'
import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
function Navbar() {

  const [nav,setNav]=useState(false)

  const handlenav=()=>{
    setNav(!nav)
  }
  return (    <div className='text-white  px-4 flex justify-between h-24 max-w-[1240px] mx-auto mt-5
'>
        <h1 className='w-full pl-15 text-3xl font-bold text-[#00df9a]'>REACT.</h1>  
        <ul className='hidden md:flex'> 
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handlenav} className='block md:hidden'>
       {!nav ? <AiOutlineMenu size={50}/> : <AiOutlineClose size={50}/>}

        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[30%] bg-[#000300] border-r h-full border-r-gray-900 ease-in-out duration-300'
                    : 'fixed left-[-100%]'}>

        
             <ul className='pt- uppercase'> 
          <li className='p-4 border-b border-gray-500'>Home</li>
          <li className='p-4  border-b border-gray-500'>Company</li>
          <li className='p-4  border-b border-gray-500'>Resources</li>
          <li className='p-4  border-b border-gray-500'>About</li>
          <li className='p-4'>Contact</li>
        </ul>


        </div>
    </div>
  )
}

export default Navbar