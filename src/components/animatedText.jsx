import React from 'react'
import { motion } from 'framer-motion';

const letterAnimation = {
  initial: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
    },
  },
  onScreen: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.03,
    }
  },
  out: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
    },
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
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    }
  },
  out: {
    x: 50,
    opacity: 0,
  }
}

export default function AnimatedHeadline({text}) {
  const words = text.split(' ')
  const arrayOfWords = words.map(word => [...word])
  return (
    <motion.div variants={letterAnimation} initial='initial' animate='onScreen' exit='out' className='flex flex-wrap gap-2.5'>
      {arrayOfWords.map((word, index) => {
        return (
          <motion.span key={index} className="flex">
            {word.map((letter, index) => (
              <motion.h1 whileHover={{scale: 1.6}} key={letter + index} variants={childrenanim} className='font-main text-large text-main-light dark:text-main-dark'>{letter}</motion.h1>
            ))}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export function AnimatedSubhead({text}) {
  const words = text.split(' ')
  const arrayOfWords = words.map(word => [...word])
  return (
    <motion.div variants={letterAnimation} initial='initial' animate='onScreen' exit='out' className='flex flex-wrap gap-1.5 mt-7'>
      {arrayOfWords.map((word, index) => {
        return (
          <motion.span key={index} className="flex">
            {word.map((letter, index) => (
              <motion.h2 key={index} variants={childrenanim} className='font-main text-medium text-dim-light dark:text-dim-dark'>{letter}</motion.h2>
            ))}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export function AnimatedText({text}) {
  const space = '\xa0'
  const spacesIn = text.replaceAll(' ', space)
  return (
    <motion.div variants={letterAnimation} initial='initial' animate='onScreen' exit='out' className='flex flex-wrap items-center'>
      {Array.from(spacesIn).map((letter, index) => <motion.p key={index} variants={childrenanim} className='font-console text-console text-dim-light dark:text-dim-dark'>{letter}</motion.p>)}
    </motion.div>
  )
}