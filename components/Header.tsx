import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{
        x:-500,
        opacity:0,
        scale:0.5, 
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }} className='flex flex-row items-center'>
        {/* Social Icons */}
        
        <span className='hover:bg-slate-300 border-none rounded-full transition ease-in-out'>
          <SocialIcon 
          url='https://instagram.com' 
          fgColor='gray' 
          bgColor='transparent' />
        </span>

        <span className='hover:bg-slate-300 border-none rounded-full transition ease-in-out'>
          <SocialIcon 
          url='https://www.linkedin.com/in/parth-dodia-6324811b0/' 
          fgColor='gray' 
          bgColor='transparent' />
        </span>

        <span className='hover:bg-slate-300 border-none rounded-full transition ease-in-out'>
          <SocialIcon 
          url='https://twitter.com/hashtag7532' 
          fgColor='gray' 
          bgColor='transparent'/>
        </span>

        <span className='hover:bg-slate-300 border-none rounded-full transition ease-in-out'>
          <SocialIcon 
          url='https://github.com/hashtag7532' 
          fgColor='gray' 
          bgColor='transparent' />
        </span>
      </motion.div>

      <motion.div 
      initial={{
        x:500,
        opacity:0,
        scale:0.5,
      }} 
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }} 
      transition={{
        duration:1.5,
      }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <span className='hover:bg-slate-300 border-none rounded-full transition ease-in-out'>
          <SocialIcon 
          className='cursor-pointer'
          network='email' 
          fgColor='gray' 
          bgColor='transparent'
        />
        </span>

        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 mx-2'>Get In Touch!</p>
      </motion.div>
    </header>
  )
}