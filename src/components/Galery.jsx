import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ImageFullScreen from './ImageFullScreen'

const animateChildren = {
  initial: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
    },
  },
  onScreen: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  },
  out: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  }
}

const imgAnimation = {
  initial: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
}

export default function Galery({ images }) {
  const [imgselected, setImgselected] = useState(null)
  return (
    <motion.section variants={animateChildren} initial='initial' animate='onScreen' exit='out' className='grid grid-cols-2 grid-rows-2    md:auto-rows-fr md:auto-cols-fr    gap-6 w-full h-full py-text-sm px-[10px] md:p-text-md'>
      {images.map(image => (
        <motion.div 
          id={image.id}
          layoutId={image.id}
          key={image.id} 
          onClick={()=> setImgselected(image)} 
          variants={imgAnimation} 
          className={`ring-1 ring-decor-light dark:ring-decor-dark rounded-medium overflow-hidden relative`}
        >
          {image.id !== imgselected?.id && (
            <img src={image.img} className="w-full h-full object-cover" />
          )}
        </motion.div>
      ))}
      <AnimatePresence>
      {imgselected && <ImageFullScreen images={images} current={imgselected} setImgselected={setImgselected}/>}
      </AnimatePresence>
    </motion.section>
  )
}