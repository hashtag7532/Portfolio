import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
import myPhoto from "../public/1708958009004.jpeg"

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
            <Image src={myPhoto} width={450} height={450} />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10 '>
            <span className='text-4xl font-bold'>I </span><span className='text-xl '>am I'm a final year student at Vellore Institute of Technology, pursuing Computer Science with Business Systems. My academic journey has equipped me with a unique blend of technical expertise and business acumen, allowing me to approach problems with both technological innovation and business perspective. When I'm not coding or working on projects, you'll find me on the badminton court, where I channel my competitive spirit and maintain a healthy work-life balance. This combination of technical skills, business knowledge, and athletic discipline has shaped me into a well-rounded individual ready to take on challenging opportunities in the tech industry.</span>
        </div>
    </motion.div>
  )
}

export default About