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

// export default function Galery({ images, scroll }) {
//   const [imgselected, setImgselected] = useState(null)
//   return (
//     <motion.section variants={animateChildren} initial='initial' animate='onScreen' exit='out' className='grid auto-rows-fr auto-cols-fr md:grid-rows-1    gap-6 w-full h-full py-text-sm px-[10px] md:p-text-md'>
//       {images.map(image => (
//         <motion.div 
//           id={image.id}
//           layoutId={image.id}
//           key={image.id} 
//           onClick={()=> setImgselected(image)} 
//           variants={imgAnimation} 
//           className={`ring-1 ring-decor-light dark:ring-decor-dark rounded-medium overflow-hidden relative`}
//         >
//           <img src={image.img} className="w-full h-full object-cover" />
//         </motion.div>
//       ))}
//       <AnimatePresence>
//       {imgselected && (
//         scroll ? (
//             <ImageFullScreenScroll images={images} current={imgselected} setImgselected={setImgselected} />
//           ) : (
//             <ImageFullScreen images={images} current={imgselected} setImgselected={setImgselected}/>
//           )
//       )}
//       </AnimatePresence>
//     </motion.section>
//   )
// }