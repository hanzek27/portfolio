import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, useAnimationControls, useScroll } from "framer-motion"
import { Close } from './Icons';

export default function Presentation({ images }) {
  const [imgselected, setImgselected] = useState(null)
  return (
    <motion.section className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full h-full py-text-sm px-[10px] md:p-text-md'>
      {images.map(image => (
        <motion.div 
          id={image.id}
          key={image.id} 
          onClick={()=> setImgselected(image)} 
          className={`ring-1 ring-decor-light dark:ring-decor-dark rounded-medium overflow-hidden relative`}
        >
          <img src={image.img} className="w-full h-full object-cover" />
        </motion.div>
      ))}
      <AnimatePresence>
      {imgselected && <ImageFullScreen currentImage={imgselected} setImgselected={setImgselected} />}
      </AnimatePresence>
    </motion.section>
  )
}

function ImageFullScreen({currentImage, setImgselected}) {
  return (
    <motion.div initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ease: 'easeInOut', duration: 0.2}} exit={{y: 200, opacity: 0}} className="absolute z-[2] inset-0 bg-light dark:bg-dark overflow-y-auto scrollbar-thin scrollbar-thumb-accent-blue scrollbar-bg-accent-dim" >
      <div className='sticky top-0 h-lg md:h-xl mb-2 bg-nav-light dark:bg-nav-dark backdrop-blur-2xl flex items-center justify-center'>
        <h4 className='font-main text-button text-main-light dark:text-main-dark'>{currentImage.name}</h4>
        <button onClick={()=> setImgselected(null)} className='p-xs bg-accent-blue rounded-full absolute bottom-[-22px]  w-min'>
          <Close width='15px' />
        </button>
      </div>
      <div className='w-full h-max max-w-[700px] mx-auto px-sm md:px-0'>
        <img src={currentImage.img} className='w-full h-full object-cover rounded-medium ring-1 ring-decor-light dark:ring-decor-dark' />
      </div>
    </motion.div>
  )
}