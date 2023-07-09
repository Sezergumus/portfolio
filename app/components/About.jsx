"use client"

import React from 'react'
import { Archivo_Black } from 'next/font/google';
import Reveal from './utils/Reveal'

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function About() {
  return (
    <section className="about-container mt-[128px]" id="about">
        <div className="title-container flex flex-row items-center justify-between gap-3">
          <Reveal><h1 className={`${archivo.className} title text-yellow text-[64px] mb-32px`}>About.</h1></Reveal>
          <div className="title-line"></div>
        </div>
        <div className="about-content">
            <div className="about-text">
              <Reveal><p className="mb-[32px] text-[24px]">Hello, I&apos;m Sezer and I&apos;m a 19-year-old computer science student with a passion for web development.</p></Reveal>
              <Reveal><p className="mb-[32px] text-[24px]">Since I was a kid, I have been fascinated by computers. <br/>At the age of 10, I started programming with Scratch and Code.org.</p></Reveal>
              <Reveal><p className="mb-[32px] text-[24px]">I continued my journey by learning Python. As I delved deeper into the world of programming, I discovered C# and used it to develop games with Unity. </p></Reveal>
              <Reveal><p className="mb-[32px] text-[24px]">However, it was web development that truly captured my interest. As a self-taught full-stack developer, I have spent the past 3 years honing my skills in the MERN stack.</p></Reveal>
              <Reveal><p className="mb-[32px] text-[24px]">I am now seeking a position where I can continue to grow and develop my skills in a professional environment.</p></Reveal>
            </div>
        </div>
    </section>
  )
}
