import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from "../components/BackgroundCircles"
import Background from "./Background"

type Props = {}

function Hero({}: Props) {
    const [text, count]= useTypewriter({
        words: ["Frontend Developer", "Designer", "Blockchain Aspirant", "Computer Science Student", "Travel-Buff.jsx"],
        loop:true,
        delaySpeed:1500,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <BackgroundCircles /> */}

        <h1 className='text-5xl lg:6xl'>Parth Dodia</h1>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px] font-semibold'>Software Engineer</h2>
        <h1 className='font-semibold'>
            <span className='text-[48px]'>{text}</span>
            <Cursor cursorColor='gray' />
        </h1>

        <div>
            <Link href="#about">
                <button className='heroButton '>About</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton '>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton '>Projects</button>
            </Link>
            <Link href="#achievements">
                <button className='heroButton '>Achievements</button>
            </Link>
            <Link href="#contact">
                <button className='heroButton '>Contact Me</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero