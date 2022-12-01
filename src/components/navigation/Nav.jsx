import React from 'react'
import ConsoleButton from '../buttons/ConsoleButton'
import { motion } from "framer-motion"
import { navAnimation, navButtonsAnimation } from '../animations/textAnimation'
import { useMotionContext } from '../../hooks/useMotionContext'

export default function Nav({ changeMode, setNav, useMotionUpdateContext }) {

  const setMotionContext = useMotionUpdateContext()
  const reduceMotion = useMotionContext()
  const navBoxAnimation = navAnimation(reduceMotion)
  const navItems = navButtonsAnimation(reduceMotion)

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
        variants={navBoxAnimation} 
        initial='initial' 
        animate='open' 
        exit='initial'
        className={`${styles.design} ${styles.position} ${styles.color} ${styles.size}`}
      >
        <button onClick={setMotionContext} className='text-button text-main-light dark:text-main-dark absolute top-3 left-3'>turn off animations</button>
        <motion.ul className='flex flex-col gap-14 w-max'>
          {navButtons.map((button, index) => {
            const side = index % 2==0 // returns true or false
            return <ConsoleButton key={button.text} itemsAnimation={navItems} side={side} action={button.action} text={button.text} />
          })}
        </motion.ul>
      </motion.nav>
      <motion.div layout onClick={()=> setNav(false)} className='fixed block md:hidden z-[2] inset-0 bg-nav-light dark:bg-nav-dark' />
    </>
  )
}