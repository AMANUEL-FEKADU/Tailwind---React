import React from 'react'
import image from '../assets/n2.png'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>

        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
            <img src={image} alt='cloud computing ' className='w-[400px] mx-auto'></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Data analytics dashboard</p>
                <h1 className='md:text-4xl text-3xl font-bold py-2'>Manage data analytics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequuntur minus doloribus eligendi quas laudantium, maiores voluptates 
                    quo vero repudiandae labore illum ducimus blanditiis soluta alias corporis aliquam veniam ratione sapiente.</p>
            </div>
    <button className='bg-[#000000] w-[250px] pl-3 rounded-md  md:ml-[500px]  text-[#00df9a] font-medium my-6  py-3 '>Get Started</button>
           
        </div>
    </div>
  )
}

export default Analytics