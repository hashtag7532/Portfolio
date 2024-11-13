import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  const skills = [
    {
      name: "React.js",
      image: "/skills/react.png",
      proficiency: 90,
    },
    {
      name: "Express.js",
      image: "/skills/express.png",
      proficiency: 85,
    },
    {
      name: "Node.js",
      image: "/skills/nodejs.png",
      proficiency: 85,
    },
    {
      name: "MySQL",
      image: "/skills/mysql.png",
      proficiency: 80,
    },
    {
      name: "Python",
      image: "/skills/python.png",
      proficiency: 90,
    },
    {
      name: "Java",
      image: "/skills/java.png",
      proficiency: 85,
    },
    {
      name: "C++",
      image: "/skills/cpp.png",
      proficiency: 90,
    },
    {
      name: "C",
      image: "/skills/c.png",
      proficiency: 85,
    },
    {
      name: "R",
      image: "/skills/r.png",
      proficiency: 85,
    },
    {
      name: "Javascript",
      image: "/skills/javascript.png",
      proficiency: 85,
    },
    {
      name: "AWS",
      image: "/skills/aws.png",
      proficiency: 85,
    },
    {
      name: "Next JS",
      image: "/skills/nextjs.png",
      proficiency: 85,
    },
  ];

  return (
    <motion.div 
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        {skills.map((skill) => (
          <div key={skill.name} className='group relative flex cursor-pointer'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={skill.image}
              className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-2 bg-[rgb(36,36,36)]'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.proficiency}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills