import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom";
import BackButton from './buttons/BackButton'
import { AnimatedText } from './animatedText'
import NavButton from './buttons/NavButton'
import Nav from './navigation/Nav'

export default function Header() {
  const { pathname } = useLocation()
  const [nav, setNav] = useState(false)
  return (
    <header className='grid grid-cols-[30px_1fr_30px] w-full h-sm'>
      <div>
        <BackButton />
      </div>
      <div>
        <AnimatedText text={`home${ pathname }`} />
        <span className="font-console text-console text-decor-light dark:text-decor-dark">{'<nav />'}</span>
      </div>
      <div>
        <NavButton onClick={()=> setNav(prev => !prev)} nav={nav} />
        <AnimatePresence key='navigation'>
          {nav && (<Nav setNav={setNav} />)}
        </AnimatePresence>
      </div>
    </header>
  )
}
