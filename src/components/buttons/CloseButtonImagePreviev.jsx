import React from 'react'
import { Close } from '../Icons'

export default function CloseButtonImagePreviev(props) {
  return (
    <button onClick={props.onClick} className='p-xs rounded-bl-medium  bg-decor-dark absolute top-0 right-0'>
      <Close width='15px' />
    </button>
  )
}
