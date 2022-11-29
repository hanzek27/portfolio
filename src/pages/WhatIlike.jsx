import React from 'react'
import { motion } from "framer-motion"
import Preview from '../components/Preview'

//images
import img1 from '../assets/images/what_I_like/obr1.jpg'
import img2 from '../assets/images/what_I_like/obr2.jpg'
import img3 from '../assets/images/what_I_like/obr3.jpg'
import img5 from '../assets/images/what_I_like/obr5.jpg'

const images = [
  {img: img1, id: 'image1', width: 600},
  {img: img2, id: 'image2', width: 500},
  {img: img3, id: 'image3', width: 600},
  {img: img5, id: 'image4', width: 400},
]

export default function WebDev() {
  return (
    <motion.section className='h-full w-full overflow-visible'>
      <Preview images={images} />
    </motion.section>
  )
}