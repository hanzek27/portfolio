import React, { useState } from 'react'
import { motion } from "framer-motion"
//images
import img1 from '../assets/images/what_I_like/obr1.jpg'
import img2 from '../assets/images/what_I_like/obr2.jpg'
import img3 from '../assets/images/what_I_like/obr3.jpg'
import img5 from '../assets/images/what_I_like/obr5.jpg'

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

const images = [
  {img: img1, id: 'image1'},
  {img: img2, id: 'image2'},
  {img: img3, id: 'image3'},
  {img: img5, id: 'image4'},
  {img: img5, id: 'image5'},
  {img: img5, id: 'image6'},
]

const imageErapper = {
  hoverStyles: `
    before:absolute 
    before:w-full 
    before:h-full 
    before:bg-dark 
    before:opacity-80 
    hover:before:translate-y-full 
    hover:before:transition 
    hover:before:ease-in-out
  `
}

export default function Webdevelopement() {
  const [imgselected, setImgselected] = useState(null)
  return (
    <motion.section variants={animateChildren} initial='initial' animate='onScreen' exit='out' className='grid grid-cols-2 grid-rows-2    md:auto-rows-fr md:auto-cols-fr    gap-6 w-full h-full py-text-sm px-[10px] md:p-text-md'>
      {images.map(image => (
        <motion.div 
          key={image.id} 
          onClick={(e)=> setImgselected(image)} 
          layoutId={image.id} 
          variants={imgAnimation} 
          className={`ring-1 ring-decor-dark bg-black rounded-medium overflow-hidden relative ${imageErapper.hoverStyles}`}
        >
          <img src={image.img} className="w-full h-full object-cover" />
        </motion.div>
      ))}
      {imgselected && <Fullscreen img={imgselected.img} setImgselected={setImgselected} />}
    </motion.section>
  )
}

function Fullscreen({img, setImgselected}) {
  return (
    <div onClick={(e)=> setImgselected(null)} className='absolute inset-0 z-10 w-full h-full bg-black flex justify-center'>
      <img src={img} className="w-full h-full object-contain" />
    </div>
  )
}