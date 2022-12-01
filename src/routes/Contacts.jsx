import React from 'react'
import { motion } from 'framer-motion';
import { useOutletContext, useLocation } from 'react-router-dom';
//components
import AnimatedHeadline from '../components/animatedText'
import ConsoleGraphics from '../components/ConsoleGraphics'

export default function Work() {
  const { pathname } = useLocation()
  return (
    <section className='grid grid-cols-1 grid-rows-4 w-full h-full'>
      <ConsoleGraphics location={pathname} classn='row-start-4 pl-text-sm mt-sm' />
      <motion.article className='max-w-[450px] min-w-[300px] row-start-2 row-span-2 space-y-5 flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg'>
        <AnimatedHeadline text='Contact me' />
        <p className="font-console text-main-light dark:text-main-dark text-console">606 625 459</p>
        <p  className="font-console text-main-light dark:text-main-dark text-console">honzastepan27@gmail.com</p>
      </motion.article>
    </section>
  )
}
