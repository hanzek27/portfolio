import React from 'react'
import { motion } from "framer-motion";
import { backdropAnimation } from '../animations/previewAnimation';

export default function PreviewBackdrop({onClick}) {
  return (
    <motion.div onClick={onClick} variants={backdropAnimation} className='absolute w-full h-full bg-nav-dark z-[-1]' />
  )
}
