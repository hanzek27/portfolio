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
    x: side ? -30 : 30,
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
    {action: '/contacts', text: 'cd contact_me'},
    {action: changeMode, text: 'mode dark || light'},
  ]

  const styles = {
    size: 'w-navWidth md:w-[400px]',
    design: 'py-lg flex flex-col items-center rounded-medium backdrop-blur-md ring-2 ring-inset z-[1]',
    color: 'bg-nav-light dark:bg-nav-dark dark:ring-decor-dark ring-decor-light',
    position: 'absolute top-[40px] right-[40px] ',
  }

  return (
    <motion.nav
      onClick={()=> setNav(false)}
      key='navigation'
      variants={navAnimation} 
      initial='initial' 
      animate='open' 
      exit='initial'
      className={`${styles.design} ${styles.position} ${styles.color} ${styles.size}`}
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
