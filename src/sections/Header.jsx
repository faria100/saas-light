import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Logo from '../assets/logosaas.png'
import { IoMenu } from "react-icons/io5";


function Header() {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
    <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
      <p className='text-white/60 hidden md:block '>Streamline your workflow and boost your productivity</p>
      <div className='inline-flex gap-1  items-center'>
      <p>Get started for free</p>
      <FaArrowRight className='h-4 w-4 inline-flex justify-center items-center' />
      </div>
    </div>
    <div className='py-5'>
      <div className='container '>
        <div className='flex items-center justify-between ml-2'>
      <img src={Logo} alt="Saas Logo" height={40} width={40} />
      <IoMenu className='h-5 w-5 md:hidden mr-2' />
      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customers</a>
        <a href="#">Updates</a>
        <a href="#">Help</a>
        <button className='bg-black text-white px-4 py-2 rounded-lg font-medium items-center inline-flex justify-center tracking-tight'>Get for free</button>
      </nav>
      </div>
      </div>
    </div>
    </header>
  ) 
}

export default Header;
