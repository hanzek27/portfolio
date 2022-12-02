import React from 'react'
import { motion } from 'framer-motion';
import { useMotionUpdateContext, useMotionContext } from '../../hooks/useMotionContext'

export default function MotionToggle() {
  const reducedMotion = useMotionContext()
  const updateMotionContext = useMotionUpdateContext()
  return (
    <motion.button onClick={updateMotionContext} className={`relative bg-decor-light dark:bg-accent-dim w-[50px] h-[26px] rounded-lg flex items-center`}>
      {reducedMotion ? (
        <motion.div layoutId='reduceMotionToggle' className='absolute top-[3px] right-[3px] w-toggleThumb h-toggleThumb bg-accent-blue rounded-full'></motion.div>
      ) : (
        <motion.div layoutId='reduceMotionToggle' className='absolute top-[3px] left-[3px] w-toggleThumb h-toggleThumb bg-dim-light dark:bg-dim-dark rounded-full'></motion.div>
      )}
    </motion.button>
  )
}
