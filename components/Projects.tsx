import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function Projects({}: Props) {
  const projects = [
    {
      name: "Document Reading Bot",
      description: "Created a document reading bot for PDFs, smoothly extracting key data and delivering precise responses to user questions. Utilized Natural Language Processing and the seamless application in document analysis. The bot efficiently processes documents, making information retrieval intuitive and accurate.",
      link: "https://github.com/hashtag7532/Document-Reading-Bot"
    },
    {
      name: "AdaptAbility",
      description: "An innovative platform designed to connect specially-abled individuals with job opportunities and skill development resources, featuring enhanced accessibility and intuitive navigation.",
      link: "https://github.com/hashtag7532/AdaptAbility"
    },
  ];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div 
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
      >
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-[#F7AB0A] hover:underline decoration-[#F7AB0A]/50'
                >
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Project {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.name}
                </a>
              </h4>

              <p className='text-lg text-center md:text-left text-gray-300'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}