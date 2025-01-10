import React from 'react'
import logo from '../assets/logosaas.png'
import { PiXLogoFill } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className='container'>
        <div className='inline-flex relative before:content-[""] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute'>
        <img src={logo} alt="Saas Logo"  className='relative h-10 w-10'/>
        </div>
        <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <PiXLogoFill />
          <AiFillInstagram />
          <FaLinkedin />
          <FaPinterest />
          <FaYoutube />
        </div>
        <p className='mt-6'>&copy; 2024 Your Company, Inc.All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer