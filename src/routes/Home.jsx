import React, { useEffect } from 'react'
import { useOutletContext, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
//components
import AnimatedHeadline, { AnimatedSubhead } from '../components/animatedText';
import ConsoleGraphics from '../components/ConsoleGraphics';

export default function Home() {
  const [setNav] = useOutletContext()
  const { pathname } = useLocation()
  useEffect(()=>{setNav(window.innerWidth > 800 ? true : false)},[])
  return (
    <section className='grid grid-cols-2  w-full h-full relative'>
      <motion.article className='max-w-[450px] min-w-[300px] flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg'>
        <AnimatedHeadline text='Hey nice to meet you I am Honza...' />
        <AnimatedSubhead text='graphic designer and web developer' />
      </motion.article>
      <ConsoleGraphics location={pathname} classn='absolute bottom-sm left-sm' />
    </section>
  )
}
