import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion';
import { useMotionContext } from '../hooks/useCreateWebContext'
import { childrenDelay, consoleDecorationText, textAnimation, reducedMotionObject } from './animations/textAnimation';

export default function ConsoleGraphics({classn, location}) {
  const controller = useAnimationControls()
  const reduceMotion = useMotionContext()
  useEffect(()=>{
    controller.stop()
    controller.start('onScreen')
  },[reduceMotion])
  const lineOne = '..............'
  const lineTwo = 'portfolio_v-1.0.0'
  const lineThree = `my/portfolio${location}`
  return (
    <motion.div variants={reduceMotion ? reducedMotionObject : childrenDelay} initial='initiate' animate={controller} exit='out' className={classn} >
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