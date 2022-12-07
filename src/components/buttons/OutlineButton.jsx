import React from 'react'

export default function OutlineButton({text}) {
  return (
    <button className='py-3 px-8 rounded-medium border border-accent-blue text-console font-console text-accent-blue w-full md:w-max'>
      {text}
    </button>
  )
}
