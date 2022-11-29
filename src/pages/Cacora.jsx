import React from 'react'
import Preview from '../components/Preview'

import img1 from '../assets/images/cacora/img1.jpg'
import img2 from '../assets/images/cacora/img2.jpg'
import img3 from '../assets/images/cacora/img3.jpg'
import img4 from '../assets/images/cacora/img4.jpg'


export default function Cacora() {
  const images = [
    {img: img1, id: 'img1'},
    {img: img2, id: 'img2'},
    {img: img3, id: 'img3'},
    {img: img4, id: 'img4'},
    {img: img4, id: 'img5'},
    {img: img4, id: 'img6'},
  ]
  return (
    <div className='h-full w-full'>
      <Preview images={images} />
    </div>
  )
}
