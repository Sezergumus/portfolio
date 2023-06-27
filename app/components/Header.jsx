"use client"

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

export default function Header() {
    const [fix, setFix] = useState(false)

    const headerRef = useRef(null);

    // const header = headerRef.current;
    // let headerTop = header.offsetTop;

    // function handleScroll() {
    //     if (window.scrollY >= headerTop) {
    //         setFix(true);
    //     } // check if it is scrolled up to remove the class
    //     else if (window.scrollY <= headerTop) {
    //         setFix(false);
    //     }
    //     console.log((window.scrollY), headerTop)
    // }

    // window.addEventListener('scroll', handleScroll);

  return (
    <motion.div 
        ref={headerRef} 
        className={`header-container border-solid border-[7px] border-yellow w-fit rounded-full mx-auto mt-[64px] ${fix ? 'fixed-nav' : ''}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
    >
        <div className="header-inner flex gap-8 items-center py-1 pl-2 pr-3">
            <div className="active bg-yellow text-[#1A1A20] text-xl font-bold px-3 py-2 rounded-full">
                <a href="#">Home</a>
            </div>
            <div className="text-yellow font-bold text-xl">
                <a href="#about">About</a>
            </div>
            <div className="text-yellow font-bold text-xl">
                <a href="#stack">Stack</a>
            </div>
            <div className="text-yellow font-bold text-xl">
                <a href="#crafts">Crafts</a>
            </div>
        </div>
    </motion.div>
  )
}