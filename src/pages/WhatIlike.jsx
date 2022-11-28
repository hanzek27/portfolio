import React from 'react'
import { motion } from "framer-motion"
import Galery from '../components/Galery'

//images
import img1 from '../assets/images/what_I_like/obr1.jpg'
import img2 from '../assets/images/what_I_like/obr2.jpg'
import img3 from '../assets/images/what_I_like/obr3.jpg'
import img5 from '../assets/images/what_I_like/obr5.jpg'

const images = [
  {img: img1, id: 'image1'},
  {img: img2, id: 'image2'},
  {img: img3, id: 'image3'},
  {img: img5, id: 'image4'},
]

export default function WebDev() {
  return (
    <motion.section className='h-full w-full'>
      <Galery images={images} />
    </motion.section>
  )
}