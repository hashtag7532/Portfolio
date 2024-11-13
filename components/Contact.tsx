import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col md:flex-row text-center md:text-left max-w-7xl px-10 mx-auto justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl font-semibold'>Contact Me</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Let's Talk.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Get in Touch</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <form className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input 
                                placeholder='Name' 
                                className='contactInput' 
                                type='text' 
                            />
                            <input 
                                placeholder='Email' 
                                className='contactInput' 
                                type='email' 
                            />
                        </div>

                        <input 
                            placeholder='Subject' 
                            className='contactInput' 
                            type='text' 
                        />

                        <textarea 
                            placeholder='Message' 
                            className='contactInput' 
                        />

                        <button 
                            type='submit'
                            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/70 transition-all'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact