import React, { useEffect, useContext } from 'react'
import { useOutletContext, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { reducedMotionObject, textAnimation } from '../components/animations/textAnimation';
//components
import AnimatedHeadline, { AnimatedSubhead } from '../components/animatedText';
import ConsoleGraphics from '../components/ConsoleGraphics';

export default function Home() {
  const navigate = useNavigate()
  const [setNav, useMotionContext] = useOutletContext()
  const reduceMotion = useMotionContext()
  const { pathname } = useLocation()
  useEffect(()=>{setNav(window.innerWidth > 800 ? true : false)},[])
  return (
    <section className='grid grid-cols-1  w-full h-full relative'>
      <motion.article className='max-w-[450px] flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg'>
        <AnimatedHeadline text='Hey nice to meet you I am Honza...' />
        <AnimatedSubhead text='graphic designer and web developer asi, co ja kurva vim' />
        <motion.button variants={reduceMotion ? reducedMotionObject : textAnimation} initial='initiate' animate='onScreen' exit='out' onClick={()=> navigate('/contacts')} className={`${ !reduceMotion && 'animate-bounce' } font-console text-button text-main-light dark:text-main-dark border py-4 px-7 w-max rounded-medium mt-md`}>
          contact me
        </motion.button>
      </motion.article>
      <ConsoleGraphics location={pathname} classn='absolute bottom-sm left-sm' />
    </section>
  )
}
