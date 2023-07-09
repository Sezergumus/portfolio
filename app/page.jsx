import React from 'react'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Circle from './components/Circle'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <div className="flex">
        <Navbar />
        <div className='main w-full'>
          <div className="main-content min-[900px]:max-w-[900px] mx-auto max-[600px]:px-[24px] max-[900px]:px-[36px]">
            <Hero className="test"/>
            <About />
            <Stack />
            <Projects />
          </div>
          <Footer />
        </div>
      </div>
      <Circle />
    </>
  )
}
