import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}} className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full  mx-auto justify-evenly items-center overflow-hidden z-0 '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {/* Project */}
          {/* Project */}
          {/* Project */}
          {projects.map((project,i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
              <motion.img initial={{y:-300, opacity:0}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:1}}
              viewport={{once:true}} src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" width={500} height={100} />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                  <h4 className='text-4xl font-semibold text-center'>
                    Project {i+1} of {projects.length}: <span className='bold text-[#cfffa6]'>Trafico</span>
                  </h4>

                  <p className='text-lg text-center md:text-left '></p>
                </div>
              </div>
          ))}
        </div>
    </motion.div>
  )
}