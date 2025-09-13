import React from 'react'
import { FaDribbbleSquare,FaFacebookSquare, FaGithubSquare
    , FaInstagram, FaTwitterSquare
 } from 'react-icons/fa'
function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
        <div>
        <h1 className='w-full pl-15 text-3xl font-bold text-[#00df9a]'>REACT.</h1>  
        <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quo illo a accusamus cum qui delectus! Cupiditate odio, modi, quis molestiae consequuntur totam, blanditiis culpa nisi doloremque sed saepe necessitatibus.</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>

        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div className='font-medium text-gray-500'>
                <h5>Solutions</h5>
                <ul>
                    <li className='py-2 text-sm '>Analytics</li>
                    <li className='py-2 text-sm '>Marketing</li>
                    <li className='py-2 text-sm '>Commerce</li>
                    <li className='py-2 text-sm '>Insights</li>

                </ul>
            </div>

            <div className='font-medium text-gray-500'>
                <h5>Support</h5>
                <ul>
                    <li className='py-2 text-sm '>pricing</li>
                    <li className='py-2 text-sm '>documentation</li>
                    <li className='py-2 text-sm '>Guides</li>
                    <li className='py-2 text-sm '>API status</li>

                </ul>
            </div>

            <div className='font-medium text-gray-500'>
                <h5>Company</h5>
                <ul>
                    <li className='py-2 text-sm '>About</li>
                    <li className='py-2 text-sm '>Blog</li>
                    <li className='py-2 text-sm '>Jobs</li>
                    <li className='py-2 text-sm '>press</li>

                </ul>
            </div>

            <div className='font-medium text-gray-500'>
                <h5>Legal</h5>
                <ul>
                    <li className='py-2 text-sm '>Claims</li>
                    <li className='py-2 text-sm '>Policy</li>
                    <li className='py-2 text-sm '>Terms</li>
                    

                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer