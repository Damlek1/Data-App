import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-1/3 text-3xl font-bold text-[#00df9a]'>DL-Data.</h1>
        <ul className='hidden md:flex '>
            <li className='p-4 cursor-pointer'>About</li>
            <li className='p-4 cursor-pointer'>Home</li>
            <li className='p-4 cursor-pointer'>Account</li>
            <li className='py-4 cursor-pointer'>Sign In</li>
            <button  className='bg-white  w-[100px] rounded-md font-medium my-3 mx-3 py-2 text-black'>Get Started</button>
        </ul>
        <div onClick={handleClick} className='block md:hidden'>
            {click ? <AiOutlineClose size={20} className='cursor-pointer' /> : <AiOutlineMenu size={20} className='cursor-pointer' /> }
        </div>
        <div className={click ? 'fixed left-0 top-0 w-[60%] h-full border-r body-overflow-y-hidden border-r-gray-900 bg-[#000300] ease-in-out duration-500'  : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font text-[#00df9a]'>DL-Data.</h1>

        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Account</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Sign In</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>About</li>
            <li className='p-4 border border-orange-500 cursor-pointer hover:bg-orange-500 ease-in-out duration-700'>Get Started</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar