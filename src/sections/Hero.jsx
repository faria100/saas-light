import React, { useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import cogImage from '../assets/cog.png'
import cylinderImage from '../assets/cylinder.png'
import noodleImage from '../assets/noodle.png'
import { easeInOut, motion, useScroll, useTransform , useMotionValueEvent} from 'framer-motion';


function Hero() {
  const heroRef = useRef()
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  })
  const translateY= useTransform(scrollYProgress, [0,1], [150,-150])
  
  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
      <div className='container'>
        <div className='md:flex items-center '>
          {/* Text Section */}
          <div className='text-center md:text-left md:w-1/2 pl-6 md:pl-12'>
            <div className='tag'>
              Version 2.0 is here
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
              Pathway to productivity
            </h1>
            <p className='text-lg md:text-xl text-[#010D3E] tracking-tight mt-6'>
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 items-center mt-8 justify-center md:justify-start'>
              <button className="btn btn-primary">
                Get for free
              </button>
              <button className="btn btn-text flex items-center gap-2 px-6 py-3 border  text-black-600 rounded-lg hover:bg-blue-100 transition">
                <span>Learn more</span>
                <FaArrowRight className='h-5 w-5' />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img 
            src={cogImage} 
            alt="Cog image" 
            className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 ' 
            animate={{
              translateY:[-30 , 30]
            }}
            transition={{
              repeat:Infinity,
              repeatType:'mirror',
              duration: 3,
              ease:'easeInOut',
            }}
            />
            <motion.img 
            src={cylinderImage} 
            width={220} 
            height={220} 
            alt="Cylinder image"
            className='hidden md:block md:absolute -top-8 -left-32 '
            style={{
              translateY: translateY,
            }} />
            <motion.img 
            src={noodleImage} 
            width={220} 
            className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] ' 
            alt="Noodle image" 
            style={{
              rotate: 30,
              translateY:translateY
            }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
