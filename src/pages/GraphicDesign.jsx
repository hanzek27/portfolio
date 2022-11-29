import React from 'react'
import Galery from '../components/Preview'
//images
import atlas from '../assets/images/graphic_design/atlas2.jpg'
import pucalka from '../assets/images/graphic_design/logoPucalka1.jpg'
import pucalka3 from '../assets/images/graphic_design/pucalka3.jpg'
import vznikLogaPucalka from '../assets/images/graphic_design/vznikLogaPucalka1.jpg'
import plesinger from '../assets/images/graphic_design/plesinger.jpg'
import plesinger1 from '../assets/images/graphic_design/plesinger1.png'

export default function GraphicDesign() {

  const images = [
    {img: plesinger1, id: 'plesinger1'},
    {img: pucalka, id: 'pucalka'},
    {img: pucalka3, id: 'pucalka3'},
    {img: vznikLogaPucalka, id: 'vznikLogaPucalka'},
  ]

  return (
    <section className='h-full w-full overflow-hidden'>
      <Galery scroll={true} images={images} />
    </section>
  )
}
