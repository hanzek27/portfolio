import React from 'react'
import { motion } from 'framer-motion';

const childrenAnimation = {
  initiate: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
  loadIn: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
    }
  },
  out: {
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.02,
    }
  }
}

const children = {
  initiate: {
    x: -100,
    opacity: 0,
  },
  loadIn: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: -10,
    opacity: 0,
  }
}

export default function ConsoleGraphics({classn, location}) {
  const lineOne = '..............'
  const lineTwo = 'portfolio_v-1.0.0'
  const lineThree = `my/portfolio${location}`
  return (
    <motion.div variants={childrenAnimation} initial='initiate' animate='loadIn' exit='out' className={classn} >
      <motion.span className='flex'>
        {Array.from(lineOne).map((letter, index) => <motion.p key={index} variants={children} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>{letter}</motion.p>)}
      </motion.span>
      <motion.span className='flex'>
        {Array.from(lineTwo).map((letter, index) => <motion.p key={index} variants={children} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>{letter}</motion.p>)}
      </motion.span>
      <motion.span className='flex'>
        {Array.from(lineThree).map((letter, index) => <motion.p key={index} variants={children} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>{letter}</motion.p>)}
      </motion.span>
    </motion.div>
  )
}

//<motion.p variants={children} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>........</motion.p>