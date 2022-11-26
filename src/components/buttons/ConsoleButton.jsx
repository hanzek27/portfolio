import React from 'react'
import { Arrow } from '../Icons'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';

export default function ConsoleButton({ text, itemsAnimation, side, action }) {
  return (
    <motion.li
      custom={side} 
      variants={itemsAnimation}
      whileHover={{scale: 1.1}}
      className='flex items-center gap-4'
    >
      <Arrow width='8px' />
      {typeof action === 'string' ? (
        <NavLink 
          to={action}
          className={({ isActive, isPending }) => `${isActive ? 'text-accent-blue' : 'text-main-light dark:text-main-dark'} font-console text-console py-2`}
        >{text}</NavLink>
      ) : (
        <button
          onClick={action}
          className='text-main-light dark:text-main-dark font-console text-console py-2'
        >{text}</button>
      )}
    </motion.li>
  )
}
