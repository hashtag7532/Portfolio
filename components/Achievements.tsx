import React from 'react'

type Props = {}

function Achievements({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center'>
      <h3 className='absolute top-24 uppercase tracking-[24px] text-semibold justify-evenly text-gray-500 text-[24px]'>Achievements</h3>
    </div>
  )
}

export default Achievements