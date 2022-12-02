import React from 'react'
import ConsoleButton from '../buttons/ConsoleButton'
import { motion } from "framer-motion"
import { navAnimation, navButtonsAnimation, reducedMotionObject } from '../animations/textAnimation'
import { useMotionContext } from '../../hooks/useMotionContext'

export default function Nav({ changeMode, setNav, useMotionUpdateContext }) {

  const reduceMotion = useMotionContext()

  const navButtons = [
    {action: '/', text: 'cd homepage'},
    {action: '/work', text: 'cd work'},
    {action: '/contacts', text: 'cd contact_me'},
    {action: changeMode, text: 'mode dark || light'},
  ]

  const styles = {
    size: 'w-navWidth md:w-[400px]',
    design: 'py-lg flex flex-col items-center rounded-medium backdrop-blur-md ring-2 ring-inset z-[3]',
    color: 'bg-nav-light dark:bg-nav-dark dark:ring-decor-dark ring-decor-light',
    position: 'absolute top-[40px] right-[40px] ',
  }

  return (
    <>
      <motion.nav
        onClick={()=> setNav(false)}
        key='navigation'
        variants={reduceMotion ? reducedMotionObject : navAnimation} 
        initial='initial' 
        animate='open' 
        exit='initial'
        className={`${styles.design} ${styles.position} ${styles.color} ${styles.size}`}
      >
        <motion.ul className='flex flex-col gap-14 w-max'>
          {navButtons.map((button, index) => {
            const side = index % 2==0 // returns true or false
            return <ConsoleButton key={button.text} itemsAnimation={reduceMotion ? reducedMotionObject : navButtonsAnimation} side={side} action={button.action} text={button.text} />
          })}
        </motion.ul>
      </motion.nav>
      <motion.div layout onClick={()=> setNav(false)} className='fixed block md:hidden z-[2] inset-0 bg-nav-light dark:bg-nav-dark' />
    </>
  )
}