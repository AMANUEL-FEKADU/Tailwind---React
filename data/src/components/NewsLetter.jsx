import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 px-4'>
                <h1 className='md:text-4xl sm:text-3xl text:2xl font-bold py-2 '> Want tips and tricks </h1>
                <p>Sign up to our newsletter and stay up to date </p>
            </div>
            <div className='my-2'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" placeholder='enter email' className='bg-white flex text-black w-full rounded-md' />
                    <button className='bg-[#14f18a] w-[200px]  rounded-md text-black font-medium my-6  py-3 ml-4 '>Get Started</button>
                  
                </div>
                       <p>we care about the protection of your data. read <span className='text-green-400'>privacy policy</span></p>
                   
            </div>

        </div>
    </div>
  )
}

export default NewsLetter