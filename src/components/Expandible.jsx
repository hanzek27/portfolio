import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, useAnimationControls, useScroll } from "framer-motion"
import CloseButtonImagePreviev from './buttons/CloseButtonImagePreviev'

export default function Expandible({ images, styles }) {
  const animationController = useAnimationControls()
  const [imgselected, setImgselected] = useState(null)

  function getAvailableSpace() {
    const stackContainer = document.getElementById('stack')
    const numberOfChildren = stackContainer.children.length
    const gapsInPX = (numberOfChildren - 1) * 20
    const availibleSpaceBefore = stackContainer.offsetHeight - gapsInPX
    return [availibleSpaceBefore, numberOfChildren]
  }

  useEffect(()=>{
    if (!imgselected) return
    const selectedItem = document.getElementById(imgselected.id)

    const left = selectedItem.getBoundingClientRect().left

    const itemHeight = window.innerWidth > 800 ? 300 : window.innerWidth > 400 ? 500 : 400
    const itemWidth = window.innerWidth > 800 ? (
      imgselected.width ? imgselected.width :  400 
    ) : (
      window.innerWidth - 30
    )

    const [avSpace, children] = getAvailableSpace()

    const availibleSpaceAfter = avSpace - itemHeight
    const eachSuppresed = availibleSpaceAfter / (children - 1)

    const leftPosition = (window.innerWidth - itemWidth) / 2
    const leftShift = leftPosition - left
    
    animationController.start(selected => {
      return selected ? {
        height: itemHeight, 
        width: itemWidth,
        left: leftShift,
        transition: { 
          duration: 0.4,
        }
      } : imageCollapse(eachSuppresed)
    })
  },[imgselected])

  function imageCollapse(eachSuppresed) {
    return {
      height: eachSuppresed + 'px',
      width: 'auto',
      left: 0,
      transition: { 
        duration: 0.4,
      },
    }
  }

  function closeImage(e) {
    e.stopPropagation()
    setImgselected(null)
    const [avSpace, children] = getAvailableSpace()
    const itemHeight = avSpace / children
    animationController.start(imageCollapse(itemHeight))
  }

  function dragDown(event, info) {
    console.log(info.offset.y)
    if (info.offset.y > 10) {
      closeImage(event)
    }
  }

  return ReactDOM.createPortal(
    <motion.section id='stack' className='grid grid-cols-1  gap-5 absolute inset-page-sm md:inset-page-md lg:inset-page-lg m-[40px]'>
      {images.map((image, index) => (
        <motion.div 
          drag='y' dragConstraints={{top: 0, bottom: 0}} onDragEnd={dragDown} whileDrag={{scale: 0.9}}
          custom={image.id === imgselected?.id ? true : false }
          animate={animationController}
          id={image.id}
          key={image.id} 
          onClick={()=> setImgselected(image)} 
          className={`ring-1 ring-decor-light dark:ring-decor-dark grow-0 shrink-0 rounded-medium z-0 overflow-hidden relative bg-accent-dim`}
        >
          <img src={image.img} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </motion.section>,
    document.getElementById('modals')
  )
}
