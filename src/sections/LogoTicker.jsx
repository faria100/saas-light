import React from 'react'
import acmeLogo from '../assets/logo-acme.png'
import quantumLogo from '../assets/logo-quantum.png'
import echoLogo from '../assets/logo-echo.png'
import celestialLogo from '../assets/logo-celestial.png'
import apexLogo from '../assets/logo-apex.png'
import pulseLogo from '../assets/logo-pulse.png'
import { motion } from 'framer-motion'


function LogoTicker() {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'
        >
        <motion.div
        className='flex gap-16 flex-none pr-14'
        animate={{
          translateX:'-50%',
        }}
        transition={{
          duration:20,
          repeat: Infinity,
          ease:'linear',
          repeatType:'loop'
        }}>
          <img src={acmeLogo} alt="acme logo" className='logo-ticker-image'/>
          <img src={quantumLogo} alt="quantum logo" className='logo-ticker-image'/>
          <img src={echoLogo} alt="echo logo" className='logo-ticker-image'/>
          <img src={celestialLogo} alt="celestial logo" className='logo-ticker-image' />
          <img src={apexLogo} alt="apex logo" className='logo-ticker-image'/>
          <img src={pulseLogo} alt="pulse logo" className='logo-ticker-image' />
          {/* second set of logos for animation*/}

          <img src={acmeLogo} alt="acme logo" className='logo-ticker-image'/>
          <img src={quantumLogo} alt="quantum logo" className='logo-ticker-image'/>
          <img src={echoLogo} alt="echo logo" className='logo-ticker-image'/>
          <img src={celestialLogo} alt="celestial logo" className='logo-ticker-image' />
          <img src={apexLogo} alt="apex logo" className='logo-ticker-image'/>
          <img src={pulseLogo} alt="pulse logo" className='logo-ticker-image' />

        
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default LogoTicker