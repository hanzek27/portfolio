import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, useAnimationControls, useScroll } from "framer-motion"
import CloseButtonImagePreviev from './buttons/CloseButtonImagePreviev'
import ImageFullScreen from './ImageFullScreen'
import ImageFullScreenScroll from './ImageFullScreenScroll'

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


export default function Preview({ images, styles }) {
  const galeryWrapper = useRef(null)
  const openItemIndex = useRef(50)
  const animationController = useAnimationControls()
  const [imgselected, setImgselected] = useState(null)

  useEffect(()=>{
    if (!imgselected) return
    const selectedItem = document.getElementById(imgselected.id)
    const top = selectedItem.getBoundingClientRect().top
    const left = selectedItem.getBoundingClientRect().left
    const itemWidth = window.innerWidth > 800 ? imgselected.width ? imgselected.width : 400 : galeryWrapper.current.offsetWidth
    const itemHeight = window.innerWidth > 800 ? 700 : 500
    const leftPosition = (window.innerWidth - itemWidth) / 2
    const topPosition = (window.innerHeight - itemHeight) / 2
    const leftShift = leftPosition - left
    const topShift = topPosition - top
    openItemIndex.current = openItemIndex.current + 1
    animationController.start(selected => {
      return selected.state ? {
        height: itemHeight, 
        width: itemWidth, 
        left: leftShift, 
        top: topShift, 
        zIndex: openItemIndex.current,
        transition: { 
          duration: 0.3,
        }
      } : imageCollapse()
    })
  },[imgselected])

  function imageCollapse() {
    return {
      height: 'auto', 
      width: 'auto', 
      left: 0, 
      top: 0, 
      transition: { 
        duration: 0.5,
        type: "spring",
      },
      transitionEnd: { 
        zIndex: 0,
      }
    }
  }

  function closeImage(e) {
    e.stopPropagation()
    setImgselected(null)
    animationController.start(imageCollapse())
  }

  function dragDown(event, info) {
    console.log(info.offset.y)
    if (info.offset.y > 170) {
      closeImage(event)
    }
  }

  return (
    <motion.section ref={galeryWrapper} variants={animateChildren} initial='initial' animate='onScreen' exit='out' className=' grid grid-cols-2 auto-rows-fr md:grid-cols-2 md:grid-rows-2   gap-5 w-full h-full py-text-sm px-[10px] md:p-text-md'>
      {images.map((image, index) => (
        <motion.div 
          drag='y' dragConstraints={{top: 0, bottom: 0}} onDragEnd={dragDown} whileDrag={{scale: 0.8}}
          custom={image.id === imgselected?.id ? {idx: index, state: true} : {idx: index, state: false} }
          variants={imgAnimation}
          animate={animationController}
          layout
          id={image.id}
          key={image.id} 
          onClick={()=> setImgselected(image)} 
          className={`ring-1 ring-decor-light dark:ring-decor-dark rounded-medium relative z-0 overflow-hidden`}
        >
          {image.id === imgselected?.id && <CloseButtonImagePreviev onClick={closeImage} />}
          <img src={image.img} className="w-full h-full object-cover" />
        </motion.div>
      ))}
      <AnimatePresence>
      {imgselected && <motion.div onClick={closeImage} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='absolute inset-0 z-[1] bg-nav-dark' />}
      </AnimatePresence>
    </motion.section>
  )
}