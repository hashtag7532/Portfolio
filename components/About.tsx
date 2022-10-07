import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
import myPhoto from "../public/WhatsApp Image 2022-09-16 at 10.01.05 PM.jpeg"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>About</h3>

        <motion.div initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] relative top-20" >
            <Image src={myPhoto} width={300} height={450} />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10 '>
            <span className='text-4xl font-bold'>I </span><span className='text-xl '>am</span>
        </div>
    </motion.div>
  )
}

export default About