import React from 'react'

type Achievement = {
  title: string;
  description: string;
  date?: string;
}

type Props = {}

function Achievements({}: Props) {
  const achievements: Achievement[] = [
    {
      title: "Yantra Hackathon Track Prize Winner",
      description: "There is a huge lack of solutions in the pharma industry for expired medicines causing huge medical waste and loss to manufacturers, we aim to bridge that gap and work with retailers and manufacturers in building a portal for the efficient management of these medicines. This supply chain management system comes SDG 12. It is an attempt to reduce medical waste disposal and at the same time, it is a profitable model for the manufacturers, retailers and consumers.",
      date: "2023"
    },
    {
      title: "First Position in IIC Hackathon",
      description: "Developed an innovative portal focused on skill development and job search specifically designed for specially-abled individuals. The platform aims to enhance accessibility and navigation, creating better employment opportunities and career growth paths for the differently-abled community.",
      date: "2024"
    },
    {
      title: "Top 5 in CEO Crescendo, organized by L.L Welingkar Institute of Management ",
      description: "Participated in the CEO Crescendo event organized by L.L Welingkar Institute of Management, where we pitched our innovative ideas to a panel of judges and presented our solutions to real-world problems. Our team was recognized for our creativity, problem-solving abilities, and presentation skills, ultimately securing a spot in the top 5 teams.",
      date: "2024"
    },
  ];

  return (
    <div className='min-h-screen relative flex flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Achievements
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-32 scrollbar-none [&::-webkit-scrollbar]{display:none} [-ms-overflow-style:none] [scrollbar-width:none]'>
        {achievements.map((achievement, index) => (
          <article 
            key={index}
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
          >
            <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light text-[#F7AB0A]'>{achievement.title}</h4>
              {achievement.date && (
                <p className='font-bold text-2xl mt-1 text-[#F7AB0A]/40'>{achievement.date}</p>
              )}
              <p className='text-lg text-gray-300 mt-4 hover:text-[#F7AB0A]/40 transition-colors duration-200'>{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Achievements