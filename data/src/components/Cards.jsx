import React from 'react'
import single from '../assets/rsingle.png'
import dub from '../assets/rdouble.png'
import thri from '../assets/thriple.png'
function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={single} className='w-40 mx-auto mt-[-3rem] bg-white' />
                  <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                  <p className='text-center text-4xl font-bold'>149$</p>
                  <div className='text-center font-medium  border-gray-400'>
                    <p className='py-2 border-b mx-8 mt-8  border-gray-400'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8  border-gray-400' >1 Granted User</p>
                    <p className='py-2 border-b mx-8 border-gray-400'>Send up to 2 GB</p>
                  </div>
                  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>
            </div>
             <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img src={dub} className='w-40 mx-auto mt-[-3rem] bg-transparent' />
                  <h2 className='text-2xl font-bold text-center py-8'>double Users</h2>
                  <p className='text-center text-4xl font-bold'>189$</p>
                  <div className='text-center font-medium  border-gray-400'>
                    <p className='py-2 border-b mx-8 mt-8  border-gray-400'>850 GB Storage</p>
                    <p className='py-2 border-b mx-8  border-gray-400' >2 Granted User</p>
                    <p className='py-2 border-b mx-8 border-gray-400'>Send up to 4.5 GB</p>
                  </div>
                  <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>
            </div>

             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={thri} className='w-40 mx-auto mt-[-3rem] bg-white' />
                  <h2 className='text-2xl font-bold text-center py-8'>multiple Users</h2>
                  <p className='text-center text-4xl font-bold'>220$</p>
                  <div className='text-center font-medium  border-gray-400'>
                    <p className='py-2 border-b mx-8 mt-8  border-gray-400'>1.3 TB Storage</p>
                    <p className='py-2 border-b mx-8  border-gray-400' >unlimited Granted User</p>
                    <p className='py-2 border-b mx-8 border-gray-400'>Send up to 5 GB</p>
                  </div>
                  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards