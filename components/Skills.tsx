import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 font-semibold'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-gray-500'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5 '>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
    </motion.div>
  )
}

export default Skills