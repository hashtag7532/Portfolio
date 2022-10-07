import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Achievements */}
      <section id="achievements" className='snap-center'>
        <Achievements />
      </section>

      {/* Contact Me */}
      <section id="contact-me" className='snap-start'>
        <Contact />
      </section>
    </div>
  )
}

export default Home
