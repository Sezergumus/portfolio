import React from 'react'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Circle from './components/Circle'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <div className="main-content min-[900px]:max-w-[900px] mx-auto">
        <Hero className="test"/>
        <Header />
        <About />
        <Stack />
        <Projects />
      </div>
      <Footer />
      <Circle />
    </>
  )
}
