"use client"

import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      // check if any new section is in view
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      sections.forEach(section => {
        // section's top position relative to the viewport
        const top = section.offsetTop;
        // section's height
        const height = section.offsetHeight;
        if(scrollPosition >= top && scrollPosition < top + height) setActiveSection(section.id);
      });
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      // remove active class from all links
      link.classList.remove('active');
      // add active class to the link that corresponds to the active section
      if (link.id === activeSection + '-button') {
        link.classList.add('active');
      }
    })
  }, [activeSection])

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <nav className="h-screen w-fit bg-[#08080a] sticky top-0 left-0 flex flex-col text-[24px] translate-0">
        <span onClick={handleClick} className="logo bg-[#1A1A20] flex justify-center items-center mx-auto w-[45px] h-[45px] rounded-[4px]">
        <svg width="24" height="23" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.216 35C6 35 4.88 34.696 3.856 34.088C2.864 33.48 2.064 32.68 1.456 31.688C0.848 30.664 0.544 29.544 0.544 28.328V25.688H6.88V28.04C6.88 28.2 6.928 28.344 7.024 28.472C7.152 28.568 7.296 28.616 7.456 28.616H28.144C28.304 28.616 28.432 28.568 28.528 28.472C28.656 28.344 28.72 28.2 28.72 28.04V21.464C28.72 21.304 28.656 21.176 28.528 21.08C28.432 20.984 28.304 20.936 28.144 20.936H7.216C6 20.936 4.88 20.632 3.856 20.024C2.864 19.416 2.064 18.616 1.456 17.624C0.848 16.6 0.544 15.464 0.544 14.216V7.112C0.544 5.896 0.848 4.792 1.456 3.8C2.064 2.776 2.864 1.96 3.856 1.352C4.88 0.743999 6 0.439999 7.216 0.439999H28.432C29.648 0.439999 30.752 0.743999 31.744 1.352C32.768 1.96 33.584 2.776 34.192 3.8C34.8 4.792 35.104 5.896 35.104 7.112V9.752H28.72V7.4C28.72 7.24 28.656 7.112 28.528 7.016C28.432 6.888 28.304 6.824 28.144 6.824H7.456C7.296 6.824 7.152 6.888 7.024 7.016C6.928 7.112 6.88 7.24 6.88 7.4V13.976C6.88 14.136 6.928 14.264 7.024 14.36C7.152 14.456 7.296 14.504 7.456 14.504H28.432C29.648 14.504 30.752 14.808 31.744 15.416C32.768 16.024 33.584 16.84 34.192 17.864C34.8 18.856 35.104 19.976 35.104 21.224V28.328C35.104 29.544 34.8 30.664 34.192 31.688C33.584 32.68 32.768 33.48 31.744 34.088C30.752 34.696 29.648 35 28.432 35H7.216Z" fill="white"/>
        </svg>
        </span>
        <a href="#about" id="about-button" className='nav-link'>About</a>
        <a href="#stack" id="stack-button" className='nav-link'>Stack</a>
        <a href="#crafts" id="crafts-button" className='nav-link'>Crafts</a>
    </nav>
  )
}
