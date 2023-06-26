"use client"

import React from 'react'
import { useState, useEffect } from 'react'

export default function ProgressBar() {
  // on scroll, update the progress bar width
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setProgress(scrolled.toFixed(0))
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <div className="progress-bar bg-[#393939] h-3 sticky top-0 left-0 z-10 w-full">
      <div style={{width: `${progress}%`}} className={`progress-bar-inner bg-yellow h-3 sticky top-0 left-0 z-10`}></div>  
    </div>
  )
}