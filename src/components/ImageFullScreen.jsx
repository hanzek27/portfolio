import React  from 'react'
import ReactDOM from 'react-dom';
import { motion } from "framer-motion"

export default function ImageFullScreen({images, current, setImgselected}) {
  const currentImgElement = document.getElementById(current.id)
  const top = currentImgElement.getBoundingClientRect().top
  const left = currentImgElement.getBoundingClientRect().left
  const width = currentImgElement.offsetWidth
  const height = currentImgElement.offsetHeight

  const orchestrationAnimation = {
    initialPosition: {
      transition: {
        wait: 'beforeChildren',
      }
    },
    fullScreen: {
      wait: 'beforeChildren',
      staggerChildren: 0.5,
    },
    exitPosition: {
      wait: 'beforeChildren',
      staggerChildren: 0.5,
    }
  }

  const modalAnimation = {
    initialPosition: {
      top: top,
      left: left,
      width: width,
      height: height,
    },
    fullScreen: {
      left: window.innerWidth > 500 ? (window.innerWidth - 500) / 2 + 'px' : '0',
      top: window.innerWidth > 500 ? (window.innerHeight - 700) / 2 + 'px' : '10%',
      width: window.innerWidth < 500 ? '100%' : '500px',
      height: window.innerWidth < 500 ? '80%' : '700px',
      transition: {
        type: "spring", 
        duration: 0.7,
      }
    },
    exitPosition: {
      top: top,
      left: left,
      width: width,
      height: height,
      transition: {
        type: "spring", 
        bounce: 0,
      }
    }
  }

  const backdropAnimation = {
    initialPosition: {
      opacity: 0,
    },
    fullScreen: {
      opacity: 0.8,
    },
    exitPosition: {
      opacity: 0,
    }
  }

  function imageClose(event, info) {
    console.log(info.offset.y)
    if (info.offset.y > 170) return setImgselected(null)
  }

  return ReactDOM.createPortal(
    <motion.div variants={orchestrationAnimation} initial='initialPosition' animate='fullScreen' exit='exitPosition' className="w-full h-full absolute inset-0 flex justify-center items-center overflow-hidden">
      <motion.div variants={modalAnimation} drag='y' dragConstraints={{top: 0, bottom: 0}} onDragEnd={imageClose} whileDrag={{scale: 0.8}} className={`absolute z-10 rounded-medium overflow-hidden ring-1 ring-decor-light dark:ring-decor-dark overflow-y-hidden`} >
        <img src={current.img} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div onClick={()=> setImgselected(null)} variants={backdropAnimation} className="absolute inset-0 bg-black z-[1]" />
    </motion.div>,
    document.getElementById('modals')
  )
}

