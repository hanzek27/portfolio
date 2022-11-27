import React, { useEffect } from 'react'
import { useOutletContext, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
//components
import AnimatedHeadline, { AnimatedSubhead } from '../components/animatedText';
import ConsoleGraphics from '../components/ConsoleGraphics';

export default function Home() {
  const { pathname } = useLocation()
  const [ setNav ] = useOutletContext()
  useEffect(()=>{setNav(window.innerWidth > 900 ? true : false)},[])

  return (
    <section className='grid grid-cols-1 grid-rows-4 w-full h-full'>
      <ConsoleGraphics location={pathname} classn='row-start-4 pl-text-sm mt-sm' />
      <motion.article className='max-w-[450px] min-w-[300px] row-start-2 row-span-2 flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg'>
        <AnimatedHeadline text='Hey nice to meet you I am Honza...' />
        <AnimatedSubhead text='graphic designer and web developer' />
      </motion.article>

    </section>
  )
}
