import React  from 'react'
import ReactDOM from 'react-dom';
import { motion } from "framer-motion"

export default function ImageFullScreenScroll({images, current, setImgselected}) {
  const currentImgElement = document.getElementById(current.id)
  const top = currentImgElement.getBoundingClientRect().top
  const left = currentImgElement.getBoundingClientRect().left
  const width = currentImgElement.offsetWidth
  const height = currentImgElement.offsetHeight

  const orchestrationAnimation = {
    initialPosition: {
      height: 0,
    },
    fullScreen: {
      height: '100%',
      transition: {
        wait: 'beforeChildren',
        staggerChildren: 0.5,
      }
    },
    exitPosition: {
      height: 0,
      transition: {
        wait: 'afterChildren',
        staggerChildren: 0.5,
      }
    }
  }

  function imageClose(event, info) {
    console.log(info.offset.y)
    if (info.offset.y > 170) return setImgselected(null)
  }

  return ReactDOM.createPortal(
    <motion.div variants={orchestrationAnimation} onClick={()=> setImgselected(null)} initial='initialPosition' animate='fullScreen' exit='exitPosition' className="w-full h-full absolute overflow-y-scroll bg-nav-light dark:bg-nav-dark z-[2] md:px-lg pt-sm md:pt-xl ">
      <motion.div className={`rounded-medium overflow-hidden ring-1 ring-decor-light dark:ring-decor-dark overflow-y-hidden`} >
        <img src={current.img} className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>,
    document.getElementById('modals')
  )
}

