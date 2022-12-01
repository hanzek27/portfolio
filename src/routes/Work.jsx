import React, { useState } from 'react'
import { NavLink, useOutletContext, useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import { Arrow, Cli, Heart, Design } from '../components/Icons';
import ConsoleGraphics from '../components/ConsoleGraphics';
const MotionNavLink = motion(NavLink)

const buttonAnimations = {
  initial: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
    },
  },
  onScreen: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    }
  },
  out: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  }
}

const buttonsIll = {
  initial: {
    x: 100,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: 50,
    opacity: 0,
  }
}

const illustrationan = {
  initial: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  leave: {
    x: 500,
    opacity: 0,
  }
}

export default function Work() {
  const { pathname } = useLocation()
  const [setNav] = useOutletContext()

  const [hover, setHover] = useState('/webdev')
  const workButtons = [
    {action: '/work/webdev', name: '/webdev', text: 'web_developement', icon: Cli},
    {action: '/work/design', name: '/design', text: 'graphic_design', icon: Design},
    {action: '/work/whatilike', name: '/whatilike', text: 'what_I_like', icon: Heart},
  ]
  return (
    <motion.section className='h-full w-full grid grid-rows-4 grid-cols-2'>
      <ConsoleGraphics location={pathname} classn='row-start-4 pl-text-sm mt-sm' />
      <article className='col-span-2 row-span-1 row-start-3 md:col-span-1 md:row-span-2 md:row-start-2   pl-text-sm md:pl-text-md lg:pl-text-lg  flex flex-col justify-center'> 
      
        <motion.div variants={buttonAnimations} initial='initial' animate='onScreen' exit='out' className='flex flex-col items-left gap-5 w-max'>
          {workButtons.map(button => (
            <MotionNavLink variants={buttonsIll} to={button.action} key={button.text} name={button.name} whileHover={{scale: 1.2, originX: 0}} onHoverStart={(e)=> setHover(e.target.name)} className='w-max flex items-center gap-3 py-2 text-button text-main-light dark:text-main-dark'>
              <Arrow width='8px' />
              <span>{button.text}</span>
            </MotionNavLink>
          ))}
        </motion.div>
      </article>

      <div className='col-span-2 row-start-1 row-span-2 md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-2 flex justify-center items-center relative pr-sm md:pr-none'>
        {workButtons.map(button => {
          const Icon = button.icon
          return button.name === hover && (
            <motion.div key={button.name} variants={illustrationan} initial='initial' animate='visible' exit='leave' className='w-xl md:w-1/2 h-full  rounded-medium flex justify-center items-center absolute z-0'>
              <Icon width='100%' fill='fill-accent-dim' />
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}