import React, { useEffect } from 'react'
import { useOutletContext, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
//components
import AnimatedHeadline, { AnimatedSubhead } from '../components/animatedText';
import ConsoleGraphics from '../components/ConsoleGraphics';

export default function Home() {
  const navigate = useNavigate()
  const [setNav] = useOutletContext()
  const { pathname } = useLocation()
  useEffect(()=>{setNav(window.innerWidth > 800 ? true : false)},[])
  return (
    <section className='grid grid-cols-1  w-full h-full relative'>
      <motion.article className='max-w-[450px] flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg'>
        <AnimatedHeadline text='Hey nice to meet you I am Honza...' />
        <AnimatedSubhead text='graphic designer and web developer' />
        <motion.button initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {ease: 'easeInOut', duration: 0.3}}} onClick={()=> navigate('/contacts')} className='animate-bounce font-console text-button text-main-light dark:text-main-dark border py-4 px-7 w-max rounded-medium mt-md'>
          contact me
        </motion.button>
      </motion.article>
      <ConsoleGraphics location={pathname} classn='absolute bottom-sm left-sm' />
    </section>
  )
}
