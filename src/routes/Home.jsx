import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const letterAnimation = {
  initial: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
  onScreen: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    }
  }
}

const childrenanim = {
  initial: {
    x: 50,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
  }
}

export default function Home() {
  const result = ['H','e','y','\xa0','n','i','c','e','\xa0','t','o','\xa0','m','e','e','t', '\xa0', 'you', 'I', 'am', 'Honza']

  const space = '\xa0'
  const headline = 'Hey nice to meet you I am Honza...'
  const spacesIn = headline.replaceAll(' ', space)

  const [ setNav ] = useOutletContext()
  //useEffect(()=>{setNav(true)},[])
  return (
    <div className='px-text-sm md:px-text-md lg:px-text-lg h-full flex flex-col justify-center'>
      <article className='max-w-[450px] pb-lg'>
        <p className='font-console text-paragraph text-decor-light dark:text-decor-dark'>........</p>
        <p className='font-console text-paragraph text-decor-light dark:text-decor-dark'>portfolio v-1.0.0</p>
        <p className='font-console text-paragraph text-decor-light dark:text-decor-dark'>homepage</p>
        <motion.div variants={letterAnimation} initial='initial' animate='onScreen' exit='initial' className='flex flex-wrap'>
        <AnimatePresence mode='wait'>
          {Array.from(spacesIn).map((letter, index) => {
            return (
              <motion.h1 key={letter + index} variants={childrenanim} className='font-main text-large text-main-light dark:text-main-dark'>{letter}</motion.h1>
            )
          })}
        </AnimatePresence>
        </motion.div>
        <h2 className='font-main text-medium text-dim-light dark:text-dim-dark mt-3'>graphic designer and web developer</h2>
      </article>
    </div>
  )
}
