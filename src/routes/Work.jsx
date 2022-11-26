import React, { useState, useEffect } from 'react'
import { NavLink, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import { Arrow, Cli, Heart, Design } from '../components/Icons';
const MotionNavLink = motion(NavLink)

const buttonAnimations = {
  initial: {
    y: -20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
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
  const [setNav] = useOutletContext()
  useEffect(()=>{setNav(false)},[])

  const [hover, setHover] = useState('/webdevelopement')
  const workButtons = [
    {action: '/work/webdevelopement', name: '/webdevelopement', text: 'web_developement', icon: Cli},
    {action: '/', name: '/graphicdesign', text: 'graphic_design', icon: Design},
    {action: '/', name: '/whatilike', text: 'what_I_like', icon: Heart},
  ]
  return (
    <div className='h-full w-full grid grid-rows-4 grid-cols-2'>
      <article className='col-span-2 row-span-2 md:col-span-1 md:row-span-2 md:row-start-2   pl-text-sm md:pl-text-md lg:pl-text-lg flex flex-col justify-start'>
        <p className='font-console text-paragraph text-decor-light dark:text-decor-dark'>........</p>
        <p className='font-console text-paragraph text-decor-light dark:text-decor-dark'>portfolio v-1.0.0</p>
        <p className='font-console text-paragraph text-decor-light dark:text-decor-dark'>homepage</p>
        <motion.div variants={buttonAnimations} initial='initial' animate='enter' exit='initial' className='flex flex-col items-left gap-5 w-max'>
          {workButtons.map(button => (
            <MotionNavLink to={button.action} key={button.text} name={button.name} whileHover={{scaleX: 1.1, x: 10}} onHoverStart={(e)=> setHover(e.target.name)} className='w-max flex items-center gap-3 py-2 text-button text-main-light dark:text-main-dark'>
              <Arrow width='8px' />
              <span>{button.text}</span>
            </MotionNavLink>
          ))}
        </motion.div>
      </article>
      <div className='col-span-2 row-start-1 row-span-2    md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-2 flex justify-center items-center relative pr-sm md:pr-none'>
        <AnimatePresence>
        {workButtons.map(button => {
          const Icon = button.icon
          return button.name === hover && (
            <motion.div key={button.name} variants={illustrationan} initial='initial' animate='visible' exit='leave' className='w-xl md:w-1/2 h-full  rounded-medium flex justify-center items-center absolute z-0'>
              <Icon width='100%' fill='fill-accent-dim' />
            </motion.div>
          )
        })}
        </AnimatePresence>
      </div>
    </div>
  )
}

//{button.text === hover && <Arrow width='8px' />}