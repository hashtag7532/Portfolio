import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col md:flex-row text-center md:text-left max-w-7xl px-10 mx-auto justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl font-semibold'>Contact Me</h3>

        <div></div>
    </div>
  )
}

export default Contact