import React, { useState } from 'react'
import ReactDOM from 'react-dom';
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

export default function CarouselPage() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  return (
    <motion.section className='h-full w-full overflow-visible grid grid-cols-2 grid-rows-2 gap-4 p-md'>
      {images.map((image, index) => (
        <div key={image.id} onClick={()=> setSelectedIndex(index + 1)} className=''>
          <img src={image.img} className={`w-full h-full object-cover ${selectedIndex === index + 1 && 'hidden'}`} />
        </div>
      ))}
      {selectedIndex && <ImagePreview images={images} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />}
    </motion.section>
  )
}

function ImagePreview({images, selectedIndex, setSelectedIndex}) {
  const maxIndex = images.length
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)
  return ReactDOM.createPortal(
    <div onClick={(event)=>closePreview(event, setSelectedIndex)} className='fixed w-full h-full z-10 bg-nav-dark flex justify-center items-center'>
      <button onClick={()=>shiftIndex(setCurrentIndex, maxIndex, 'down')} className='bg-white w-max py-2 px-3 rounded-full absolute left-md top-1/2'>{'<'}</button>
      <img src={images[currentIndex - 1].img} className='w-[500px]' />
      <button onClick={()=>shiftIndex(setCurrentIndex, maxIndex, 'up')} className='bg-white w-max py-2 px-3 rounded-full absolute right-md top-1/2'>{'>'}</button>
    </div>,
    document.getElementById('modals')
  )
}

function shiftIndex(setCurrentIndex, maxIndex, direction) {
  setCurrentIndex(prev => {
    if (direction === 'down') {
      return prev === 1 ? (maxIndex) : (prev - 1)
    } else {
      return prev === maxIndex ? (1) : (prev + 1)
    }
  })
}

function closePreview(event, setSelectedIndex) {
  event.stopPropagation()
  setSelectedIndex(null)
}