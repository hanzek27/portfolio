import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, useAnimationControls, useScroll } from "framer-motion"
import CloseButtonImagePreviev from './buttons/CloseButtonImagePreviev'
import useSimplePreview from '../hooks/useSimplePreview';

export default function Preview({ images }) {
  const [imgselected, setImgselected] = useState(null)
  const [controller, closePreview] = useSimplePreview(imgselected, setImgselected)
  function dragDown(event, info) {
    if (info.offset.y > 10) {
      closePreview()
    }
  }

  return ReactDOM.createPortal(
    <motion.section className=' grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-5 absolute inset-page-sm md:inset-page-md lg:inset-page-lg m-[30px] py-text-sm px-[10px] md:p-text-md'>
      {images.map((image, index) => (
        <motion.div 
          drag='y' dragConstraints={{top: 0, bottom: 0}} onDragEnd={dragDown} whileDrag={{scale: 0.9}}
          custom={image.id === imgselected?.id ? true : false }
          animate={controller}
          id={image.id}
          key={image.id} 
          onClick={()=> setImgselected(image)} 
          className={`ring-1 ring-decor-light dark:ring-decor-dark rounded-medium relative z-0 overflow-hidden bg-accent-dim`}
        >
          {image.id === imgselected?.id && <CloseButtonImagePreviev onClick={closePreview} />}
          <img src={image.img} className="w-full h-full object-cover" />
        </motion.div>
      ))}
      <AnimatePresence>
      {imgselected && <motion.div onClick={closePreview} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='fixed inset-0 z-[1] bg-nav-dark' />}
      </AnimatePresence>
    </motion.section>,
    document.getElementById('modals')
  )
}
