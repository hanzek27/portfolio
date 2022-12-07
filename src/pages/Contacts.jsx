import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { useOutletContext, useLocation } from 'react-router-dom';
import { textAnimation, childrenDelay, reducedMotionObject } from '../components/animations/textAnimation';
//components
import AnimatedHeadline from '../components/animatedText'
import ConsoleGraphics from '../components/ConsoleGraphics'

export default function Work() {
  const [nav, useMotionContext]= useOutletContext()
  const reducedMotion = useMotionContext()
  const { pathname } = useLocation()
  return (
    <section className='relative grid grid-cols-1 grid-rows-4 w-full h-full'>
      <ConsoleGraphics location={pathname} classn='absolute bottom-sm left-sm' />
      <motion.article variants={reducedMotion ? reducedMotionObject : childrenDelay} initial='initiate' animate='onScreen' exit='out' className='max-w-[450px] min-w-[300px] row-start-2 row-span-2 space-y-5 flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg'>
        <AnimatedHeadline text='Contact me' />
        <motion.p variants={reducedMotion ? reducedMotionObject : textAnimation} className="font-console text-main-light dark:text-main-dark text-console">606 625 459</motion.p>
        <motion.p variants={reducedMotion ? reducedMotionObject : textAnimation} className="font-console text-main-light dark:text-main-dark text-console">honzastepan27@gmail.com</motion.p>
      </motion.article>
    </section>
  )
}
