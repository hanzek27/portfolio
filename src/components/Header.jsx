import React, { useState, useEffect } from 'react'
import { AnimatePresence, useScroll } from "framer-motion"
import { useLocation } from "react-router-dom";
import BackButton from './buttons/BackButton'
import { AnimatedText } from './animatedText'
import NavButton from './buttons/NavButton'
import Nav from './navigation/Nav'

export default function Header() {
  const { scrollYProgress } = useScroll()
  //scrollYProgress.onChange(val => console.log(val))
  const { pathname } = useLocation()
  const [nav, setNav] = useState(false)
  const desktop = window.innerWidth > 800 ? true : false
  useEffect(()=>{
    if (!desktop) return
    if (pathname !== '/') return
    setNav(true)
  },[])
  return (
    <header className='absolute z-[1] left-0 top-0 p-xs bg-dark md:static md:p-none md:bg-transparent w-full grid grid-cols-[30px_1fr_30px]'>
      <div className='flex justify-center items-center'>
        <BackButton />
      </div>
      <div className='flex justify-between items-center px-sm'>
        <AnimatedText text={`home${ pathname }`} />
        <span className="font-console text-console text-decor-light dark:text-decor-dark">{'<nav />'}</span>
      </div>
      <div className='relative'>
        <NavButton onClick={()=> setNav(prev => !prev)} nav={nav} />
        <AnimatePresence key='navigation'>
          {nav && (<Nav setNav={setNav} />)}
        </AnimatePresence>
      </div>
    </header>
  )
}
