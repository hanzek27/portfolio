import React from 'react'
import { motion } from 'framer-motion';
import { useMotionContext } from '../hooks/useMotionContext'
import { textAnimation, childrenDelay, reducedMotionObject } from './animations/textAnimation';

export default function AnimatedHeadline({text}) {
  const reduceMotion = useMotionContext()
  const words = text.split(' ')
  const arrayOfWords = words.map(word => [...word])
  return (
    <motion.div variants={reduceMotion ? reducedMotionObject : childrenDelay} initial='initiate' animate='onScreen' exit='out' className='flex flex-wrap gap-2.5'>
      {arrayOfWords.map((word, index) => {
        const honza = word[0] === 'H' && word[1] === 'o'
        return (
          <motion.span key={index} className={`flex`}>
            {word.map((letter, index) => (
              <motion.h1 whileHover={{scale: 1.6}} key={letter + index} variants={reduceMotion ? reducedMotionObject : textAnimation} className={`font-main text-large ${ honza ? 'text-accent-blue' : 'text-main-light dark:text-main-dark' }`}>{letter}</motion.h1>
            ))}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export function AnimatedSubhead({text}) {
  const reduceMotion = useMotionContext()
  const words = text.split(' ')
  const arrayOfWords = words.map(word => [...word])
  return (
    <motion.div variants={reduceMotion ? reducedMotionObject : childrenDelay} initial='initiate' animate='onScreen' exit='out' className='flex flex-wrap gap-1.5 mt-7'>
      {arrayOfWords.map((word, index) => {
        return (
          <motion.span key={index} className="flex">
            {word.map((letter, index) => (
              <motion.h2 key={index} variants={reduceMotion ? reducedMotionObject : textAnimation} className='font-main text-medium text-dim-light dark:text-dim-dark'>{letter}</motion.h2>
            ))}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export function AnimatedText({text}) {
  const reduceMotion = useMotionContext()
  const space = '\xa0'
  const spacesIn = text.replaceAll(' ', space)
  return (
    <motion.div variants={reduceMotion ? reducedMotionObject : childrenDelay} initial='initiate' animate='onScreen' exit='out' className='flex flex-wrap items-center'>
      {Array.from(spacesIn).map((letter, index) => <motion.p key={index} variants={reduceMotion ? reducedMotionObject : textAnimation} className='font-console text-console text-dim-light dark:text-dim-dark'>{letter}</motion.p>)}
    </motion.div>
  )
}