import React from 'react'
import { motion, useAnimationControls } from "framer-motion";
import { backdropAnimation } from '../animations/previewAnimation';
import useImagePosition from '../../hooks/useImagePosition'

export default function PreviewBackdrop({setselectedImg}) {
  return (
    <motion.div onClick={() => setselectedImg(null)} variants={backdropAnimation} className='absolute w-full h-full bg-nav-dark z-[-1]' />
  )
}
