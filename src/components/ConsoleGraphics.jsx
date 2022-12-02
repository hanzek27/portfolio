import React from 'react'
import { motion } from 'framer-motion';
import { useMotionContext } from '../hooks/useMotionContext'
import { childrenDelay, consoleDecorationText, textAnimation, reducedMotionObject } from './animations/textAnimation';

export default function ConsoleGraphics({classn, location}) {
  const reduceMotion = useMotionContext()
  const lineOne = '..............'
  const lineTwo = 'portfolio_v-1.0.0'
  const lineThree = `my/portfolio${location}`
  return (
    <motion.div variants={reduceMotion ? reducedMotionObject : childrenDelay} initial='initiate' animate='onScreen' exit='out' className={classn} >
      <motion.span className='flex'>
        {Array.from(lineOne).map((letter, index) => <motion.p key={index} variants={reduceMotion ? reducedMotionObject : consoleDecorationText} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>{letter}</motion.p>)}
      </motion.span>
      <motion.span className='flex'>
        {Array.from(lineTwo).map((letter, index) => <motion.p key={index} variants={reduceMotion ? reducedMotionObject : consoleDecorationText} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>{letter}</motion.p>)}
      </motion.span>
      <motion.span className='flex'>
        {Array.from(lineThree).map((letter, index) => <motion.p key={index} variants={reduceMotion ? reducedMotionObject : consoleDecorationText} className='font-console text-paragraph text-decor-light dark:text-decor-dark'>{letter}</motion.p>)}
      </motion.span>
    </motion.div>
  )
}