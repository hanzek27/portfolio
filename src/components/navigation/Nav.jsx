import React from 'react'
import ConsoleButton from '../buttons/ConsoleButton'
import { motion, AnimatePresence } from "framer-motion"

const navAnimation = {
  initial: {
    scale: 0, 
    originY: 0,  
    originX: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  open: {
    scale: 1, 
    originY: 0,  
    originX: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  }
}

const itemsAnimation = {
  initial: (side)=> ({
    x: side ? -50 : 50,
    opacity: 0,
  }),
  open: {
    x: 0,
    opacity: 1,
  },
}

export default function Nav({ changeMode, setNav }) {

  const navButtons = [
    {action: '/', text: 'cd homepage'},
    {action: '/work', text: 'cd work'},
    {action: '/aboutme', text: 'cd about_me'},
    {action: changeMode, text: 'mode dark || light'},
  ]

  return (
    <motion.nav
      onClick={()=> setNav(false)}
      key='navigation'
      variants={navAnimation} 
      initial='initial' 
      animate='open' 
      exit='initial'
      className='rounded-medium py-lg px- flex flex-col items-center backdrop-blur-md absolute top-page-sm md:top-page-md lg:top-page-lg right-page-sm md:right-page-md lg:right-page-lg left-4 md:left-auto md:w-[400px] ring-2 ring-decor-light dark:ring-decor-dark ring-insetvbg-nav-light z-[1] dark:bg-nav-dark'
    >
      <motion.ul className='flex flex-col gap-14 w-max'>
        {navButtons.map((button, index) => {
          const side = index % 2==0 // returns true or false
          return <ConsoleButton key={button.text} itemsAnimation={itemsAnimation} side={side} action={button.action} text={button.text} />
        })}
      </motion.ul>
    </motion.nav>
  )
}
